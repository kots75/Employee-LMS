import { Edit, PasswordInput, SimpleForm, TextInput } from "react-admin";

export const AdminEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
        <TextInput source="name" required />
        <TextInput source="email" required />
        <TextInput source="username" required />
        <PasswordInput source="newpassword" label="New Password" />
      </SimpleForm>
    </Edit>
  );
};
