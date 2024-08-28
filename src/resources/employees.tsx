import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  EmailField,
  List,
  ReferenceArrayField,
  ReferenceArrayInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
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

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" required />
      <TextInput source="position" required />
      <TextInput source="email" required />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Edit>
);

export const EmployeeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="position" required />
      <TextInput source="email" required />
      <ReferenceArrayInput reference="learning_paths" source="enrolled" />
    </SimpleForm>
  </Create>
);
