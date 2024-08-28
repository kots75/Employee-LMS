import {
  Datagrid,
  EmailField,
  List,
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  TextField,
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
    </Datagrid>
  </List>
);

export const EmployeeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="position" />
      <EmailField source="email" />
      <ReferenceArrayField
        reference="learning_paths"
        source="enrolled"
        label="Enrolled"
      />
    </SimpleShowLayout>
  </Show>
);
