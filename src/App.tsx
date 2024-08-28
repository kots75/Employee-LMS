import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./Layout";
import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import {
  EmployeeCreate,
  EmployeeEdit,
  EmployeeList,
  EmployeeShow,
} from "./resources/employees";
import { PostCreate, PostEdit, PostList } from "./resources/posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./resources/categories";

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    {(permissions) => (
      <>
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        {permissions.role === "admin" ? (
          <Resource
            name="employees"
            list={EmployeeList}
            show={EmployeeShow}
            edit={EmployeeEdit}
            create={EmployeeCreate}
            icon={UserIcon}
          />
        ) : null}
        {permissions.role === "admin" ? (
          <Resource
            name="categories"
            list={CategoryList}
            show={CategoryShow}
            edit={CategoryEdit}
            create={CategoryCreate}
            icon={CategoryIcon}
          />
        ) : null}
      </>
    )}
  </Admin>
);
