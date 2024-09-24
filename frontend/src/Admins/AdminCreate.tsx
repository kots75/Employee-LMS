import { Create, PasswordInput, SimpleForm, TextInput } from "react-admin";

export const AdminCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="name" required />
        <TextInput source="email" required />
        <TextInput source="username" required />
        <PasswordInput source="password" required />
      </SimpleForm>
    </Create>
  );
};
