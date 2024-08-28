import {
  Datagrid,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceField,
  TextField,
  usePermissions,
} from "react-admin";
import { LearningPath, Permissions } from "../types";

export const LearningPathList = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <List>
      <Datagrid>
        <TextField<LearningPath> source="id" />
        <ReferenceField<LearningPath>
          source="categoryId"
          reference="categories"
          link={permissions?.role === "admin" ? "show" : ""}
        />
        <TextField<LearningPath> source="name" />
        <TextField<LearningPath> source="description" />
        <ReferenceArrayField<LearningPath>
          reference="employees"
          source="enrolled"
        />
        {permissions?.role === "admin" ? <EditButton /> : null}
      </Datagrid>
    </List>
  );
};
