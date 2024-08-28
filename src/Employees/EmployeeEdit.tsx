import { Edit, SimpleForm, TextInput, ReferenceArrayInput } from "react-admin";

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" required />
      <TextInput source="position" required />
      <TextInput source="email" required />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Edit>
);
