import React from "react";
import {
  Create,
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

export const ContributionCreate = () => {
  const { permissions } = usePermissions<Permissions>();

  const transform = (data: any) => {
    // Append the employeeId from permissions to the form data
    return {
      ...data,
      employeeId: permissions?.userId,
    };
  };

  return (
    <Create transform={transform}>
      <SimpleForm>
        <ReferenceInput
          source="learningPathId"
          reference="learning_paths"
          label="Learning Path"
        />
        {permissions?.role === "admin" && (
          <ReferenceInput source="employeeId" reference="employees" />
        )}
        <TextInput source="title" required />
        <RichTextInput source="body" />
      </SimpleForm>
    </Create>
  );
};
