import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  ReferenceArrayField,
} from "react-admin";

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
