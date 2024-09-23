import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoryCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" required />
    </SimpleForm>
  </Create>
);
