import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

export const CategoryList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
    </SimpleForm>
  </Create>
);
