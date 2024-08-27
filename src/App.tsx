import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { Dashboard } from "./Dashboard";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList } from "./posts";
import { UserList } from "./users";

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
            name="users"
            list={UserList}
            show={ShowGuesser}
            icon={UserIcon}
          />
        ) : null}
      </>
    )}
  </Admin>
);
