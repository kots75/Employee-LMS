import { Datagrid, EditButton, EmailField, List, TextField } from "react-admin";

export const AdminList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="username" />
      <EditButton />
    </Datagrid>
  </List>
);
