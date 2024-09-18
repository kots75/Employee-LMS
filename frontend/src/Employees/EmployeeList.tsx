import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceArrayField,
  EditButton,
} from "react-admin";

export const EmployeeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="position" />
      <EmailField source="email" />
      <ReferenceArrayField
        reference="learning_paths"
        source="enrolled"
        label="Enrolled"
      />
      <EditButton />
    </Datagrid>
  </List>
);
