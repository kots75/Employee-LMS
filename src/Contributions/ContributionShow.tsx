import {
  ReferenceField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Contribution } from "../types";
import { Divider } from "@mui/material";

export const ContributionShow = () => (
  <Show>
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField<Contribution>
        source="id"
        label="ID"
        sx={{ fontSize: "0.8em" }}
      />
      <ReferenceField<Contribution>
        source="learningPathId"
        reference="learning_paths"
        label="Learning Path"
      >
        <TextField source="name" sx={{ fontSize: "0.8em" }} />
      </ReferenceField>
      <TextField<Contribution> source="title" sx={{ fontSize: "0.8em" }} />
      <RichTextField<Contribution> source="body" />
      <ReferenceField<Contribution> source="employeeId" reference="employees">
        <TextField source="name" sx={{ fontSize: "0.8em" }} />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
