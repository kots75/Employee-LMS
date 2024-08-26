import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { Dashboard } from "./Dashboard";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList } from "./posts";
import { TodoList } from "./todos";
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
          edit={
            permissions === "admin" ? (
              PostEdit
            ) : (
              <>
                <h1>You do not have permission to edit</h1>
              </>
            )
          }
          create={PostCreate}
          icon={PostIcon}
        />
        {permissions === "admin" ? (
          <Resource
            name="users"
            list={UserList}
            show={ShowGuesser}
            icon={UserIcon}
          />
        ) : null}
        <Resource name="todos" list={TodoList} icon={ListIcon} />
      </>
    )}
  </Admin>
);
