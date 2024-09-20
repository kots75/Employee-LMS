import jsonServerProvider from "ra-data-json-server";
import { fetchUtils, GetListParams, QueryFunctionContext } from "react-admin";

interface FetchOptions extends RequestInit {
  user?: {
    authenticated?: boolean;
    token?: string;
  };
}

const fetchJson = (url: string, options: FetchOptions = {}) => {
  options.user = {
    authenticated: true,
    // use the token from local storage
    token: localStorage.getItem("token") || undefined,
  };
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  fetchJson,
);

const customDataProvider = {
  ...dataProvider,
  getList: (resource: string, params: GetListParams & QueryFunctionContext) => {
    if (resource === "learning_paths" && params.filter.employeeId) {
      const { employeeId } = params.filter;
      // Fetch the employee's data
      return dataProvider
        .getOne("employees", { id: employeeId })
        .then((employeeResponse) => {
          const enrolledPathIds = employeeResponse.data.enrolled;
          // Fetch the learning paths that match the enrolled path IDs
          return dataProvider.getList("learning_paths", {
            ...params,
            filter: { id: enrolledPathIds },
          });
        });
    }

    return dataProvider.getList(resource, params);
  },
};

export default customDataProvider;
