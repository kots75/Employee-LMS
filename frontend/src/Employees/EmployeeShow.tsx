import { Divider } from "@mui/material";
import {
  ChipField,
  EmailField,
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";
import { Employee } from "../types";

export const EmployeeShow = () => (
  <Show>
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField<Employee> source="id" label="ID" sx={{ fontSize: "0.8em" }} />
      <TextField<Employee> source="name" sx={{ fontSize: "0.8em" }} />
      <TextField<Employee> source="position" sx={{ fontSize: "0.8em" }} />
      <EmailField<Employee> source="email" sx={{ fontSize: "0.8em" }} />
      <TextField<Employee> source="username" sx={{ fontSize: "0.8em" }} />
      <ReferenceArrayField<Employee>
        reference="learning_paths"
        source="enrolled"
        label="Enrolled Paths"
      >
        <SingleFieldList>
          <ChipField source="name" sx={{ fontSize: "0.7em" }} />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
