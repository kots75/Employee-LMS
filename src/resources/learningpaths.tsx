import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceArrayInput,
  ReferenceField,
  ReferenceInput,
  SaveButton,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
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
      </SimpleShowLayout>
    </Show>
  );
};

export const LearningPathEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" required />
      <ReferenceInput source="categoryId" reference="categories" />
      <TextInput source="description" required />
      <ReferenceArrayInput reference="employees" source="enrolled" />
    </SimpleForm>
  </Edit>
);

export const LearningPathCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <ReferenceInput source="categoryId" reference="categories" />
      <TextInput source="description" required />
      <ReferenceArrayInput reference="employees" source="enrolled" />
      <SaveButton />
    </SimpleForm>
  </Create>
);
