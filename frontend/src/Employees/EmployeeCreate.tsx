import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

export const EmployeeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="position" required />
      <TextInput source="email" required />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Create>
);
