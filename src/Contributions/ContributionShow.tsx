import {
  ReferenceField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const ContributionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="learningPathId" reference="learning_paths" />
      <TextField source="title" />
      <RichTextField source="body" />
      <ReferenceField source="employeeId" reference="employees" />
    </SimpleShowLayout>
  </Show>
);
