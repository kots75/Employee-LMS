import {
  BooleanField,
  Datagrid,
  List,
  ReferenceField,
  TextField,
  usePermissions,
} from "react-admin";
import { Permissions } from "./types";

export const TodoList = () => {
  const { permissions } = usePermissions<Permissions>();

  return (
    <List>
      <Datagrid>
        <ReferenceField
          source="userId"
          reference="users"
          link={permissions?.role === "admin" ? "show" : ""}
        />
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="completed" />
      </Datagrid>
    </List>
  );
};
