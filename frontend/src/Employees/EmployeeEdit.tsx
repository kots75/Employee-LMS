import {
  Edit,
  PasswordInput,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="position" />
      <TextInput source="email" />
      <TextInput source="username" />
      <PasswordInput source="newpassword" label="New Password" />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Edit>
);
