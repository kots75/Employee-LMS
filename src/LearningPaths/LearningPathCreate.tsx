import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SaveButton,
} from "react-admin";

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
