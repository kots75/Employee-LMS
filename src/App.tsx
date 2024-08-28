import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import UserIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import { Admin, Resource } from "react-admin";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./Layout";

import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";

import { EmployeeCreate } from "./Employees/EmployeeCreate";
import { EmployeeEdit } from "./Employees/EmployeeEdit";
import { EmployeeList } from "./Employees/EmployeeList";
import { EmployeeShow } from "./Employees/EmployeeShow";

import { CategoryCreate } from "./Categories/CategoryCreate";
import { CategoryEdit } from "./Categories/CategoryEdit";
import { CategoryList } from "./Categories/CategoryList";
import { CategoryShow } from "./Categories/CategoryShow";

import { ContributionList } from "./Contributions/ContributionList";
import { ContributionCreate } from "./Contributions/ContributionCreate";
import { ContributionEdit } from "./Contributions/ContributionEdit";
import { ContributionShow } from "./Contributions/ContributionShow";

import { LearningPathCreate } from "./LearningPaths/LearningPathCreate";
import { LearningPathEdit } from "./LearningPaths/LearningPathEdit";
import { LearningPathList } from "./LearningPaths/LearningPathList";
import { LearningPathShow } from "./LearningPaths/LearningPathShow";

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    {(permissions) => (
      <>
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
        <Resource
          name="learning_paths"
          list={LearningPathList}
          show={LearningPathShow}
          edit={permissions.role === "admin" ? LearningPathEdit : undefined}
          create={permissions.role === "admin" ? LearningPathCreate : undefined}
          icon={SchoolIcon}
          options={{ label: "Learning Paths" }}
        />
        <Resource
          name="contributions"
          list={ContributionList}
          show={ContributionShow}
          edit={ContributionEdit}
          create={ContributionCreate}
          icon={ArticleIcon}
        />
      </>
    )}
  </Admin>
);
