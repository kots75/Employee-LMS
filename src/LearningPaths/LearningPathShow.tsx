import {
  ReferenceArrayField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  usePermissions,
} from "react-admin";
import { LearningPath, Permissions } from "../types";
import EnrollButton from "./EnrollButton";

export const LearningPathShow = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <Show>
      <SimpleShowLayout>
        <TextField<LearningPath> source="id" />
        <TextField<LearningPath> source="name" />
        <ReferenceField<LearningPath>
          source="categoryId"
          reference="categories"
          link={permissions?.role === "admin" ? "show" : ""}
        />
        <TextField<LearningPath> source="description" />
        <ReferenceArrayField<LearningPath>
          reference="employees"
          source="enrolled"
        />
        {permissions?.role === "employee" && <EnrollButton />}
      </SimpleShowLayout>
    </Show>
  );
};
