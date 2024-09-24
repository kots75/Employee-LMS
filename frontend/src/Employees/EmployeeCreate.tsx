import {
  Create,
  PasswordInput,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EmployeeCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="position" required />
      <TextInput source="email" required />
      <TextInput source="username" required />
      <PasswordInput source="password" required />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Create>
);
