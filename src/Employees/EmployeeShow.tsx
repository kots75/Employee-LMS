import { Divider } from "@mui/material";
import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { Employee } from "../types";

export const EmployeeShow = () => (
  <Show>
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField<Employee> source="id" sx={{ fontSize: "0.8em" }} />
      <TextField<Employee> source="name" sx={{ fontSize: "0.8em" }} />
      <TextField<Employee> source="position" sx={{ fontSize: "0.8em" }} />
      <EmailField<Employee> source="email" sx={{ fontSize: "0.8em" }} />
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
