import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
    </SimpleForm>
  </Create>
);
