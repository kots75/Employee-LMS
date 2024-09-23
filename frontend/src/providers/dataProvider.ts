import jsonServerProvider from "ra-data-json-server";
import {
  fetchUtils,
  GetListParams,
  QueryFunctionContext,
  withLifecycleCallbacks,
} from "react-admin";
import { LearningPath } from "../types";

interface FetchOptions extends RequestInit {
  user?: {
    authenticated?: boolean;
    token?: string;
  };
}

type CloudinaryFile = {
  original_filename: string;
  secure_url: string;
};

type SignData = {
  api_key: string;
  timestamp: string;
  signature: string;
  cloud_name: string;
};

const fetchJson = (url: string, options: FetchOptions = {}) => {
  options.user = {
    authenticated: true,
    // use the token from local storage
    token: localStorage.getItem("token") || undefined,
  };
  return fetchUtils.fetchJson(url, options);
};

const baseDataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  fetchJson,
);

const customDataProvider = {
  ...baseDataProvider,
  getList: (resource: string, params: GetListParams & QueryFunctionContext) => {
    if (resource === "learning_paths" && params.filter.employeeId) {
      const { employeeId } = params.filter;
      // Fetch the employee's data
      return baseDataProvider
        .getOne("employees", { id: employeeId })
        .then((employeeResponse) => {
          const enrolledPathIds = employeeResponse.data.enrolled;
          // Fetch the learning paths that match the enrolled path IDs
          return baseDataProvider.getList("learning_paths", {
            ...params,
            filter: { id: enrolledPathIds },
          });
        });
    }

    return baseDataProvider.getList(resource, params);
  },
};

const dataProvider = withLifecycleCallbacks(customDataProvider, [
  {
    resource: "learning_paths",
    beforeSave: async (data: LearningPath) => {
      // Check if the files array exists and contains files
      if (!data.files || data.files.length === 0) {
        return data; // Bypass file uploading if no files are attached
      }

      const response = await fetchJson(
        `${import.meta.env.VITE_JSON_SERVER_URL}/get-cloudinary-signature`,
        { method: "GET" },
      );

      const signData: SignData = response.json;

      const url = `https://api.cloudinary.com/v1_1/${signData.cloud_name}/auto/upload`;

      // Handle multiple file uploads
      const uploadedFiles = [];

      for (let fileObj of data.files) {
        const formData = new FormData();
        formData.append("file", fileObj.rawFile);
        formData.append("api_key", signData.api_key);
        formData.append("timestamp", signData.timestamp);
        formData.append("signature", signData.signature);

        const fileResponse = await fetch(url, {
          method: "POST",
          body: formData,
        });

        const file: CloudinaryFile = await fileResponse.json();
        uploadedFiles.push({
          src: file.secure_url,
          title: file.original_filename,
        });
      }

      return {
        ...data,
        files: uploadedFiles,
      };
    },
  },
]);

export default dataProvider;
