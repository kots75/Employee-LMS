import React from "react";
import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  usePermissions,
} from "react-admin";
import { Permissions } from "../types";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  })),
);

export const ContributionEdit = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" required />
        <RichTextInput source="body" />
        {permissions?.role === "admin" && (
          <ReferenceInput source="employeeId" reference="employees" />
        )}
        <ReferenceInput
          source="learningPathId"
          reference="learning_paths"
          label="Learning Path"
        />
      </SimpleForm>
    </Edit>
  );
};
