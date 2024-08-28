import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
} from "react-admin";

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
