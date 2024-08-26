import {
  BooleanField,
  Datagrid,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const TodoList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="completed" />
    </Datagrid>
  </List>
);
