import jsonServerProvider from "ra-data-json-server";
import { GetListParams, QueryFunctionContext } from "react-admin";

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
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
