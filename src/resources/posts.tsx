import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
  usePermissions,
  useRecordContext,
} from "react-admin";
import { Permissions } from "../types";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  })),
);

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

const EditOwnPostButton = () => {
  const record = useRecordContext();
  const { permissions } = usePermissions<Permissions>();
  if (
    record &&
    permissions?.role === "employee" &&
    record.userId === permissions?.userId
  ) {
    return <EditButton />;
  } else if (permissions?.role === "admin") {
    return <EditButton />;
  }
};

export const PostList = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <List filters={postFilters}>
      <Datagrid rowClick={false}>
        <TextField source="id" />
        <ReferenceField
          source="userId"
          reference="users"
          link={permissions?.role === "admin" ? "show" : ""}
        />
        <TextField source="title" />
        <EditOwnPostButton />
      </Datagrid>
    </List>
  );
};

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <ReferenceInput source="userId" reference="users" link="show" />
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);
