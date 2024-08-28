import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  usePermissions,
  useRecordContext,
} from "react-admin";
import { Contribution, Permissions } from "../types";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="employeeId" label="Employee" reference="employees" />,
];

const EditOwnPostButton = () => {
  const record = useRecordContext();
  const { permissions } = usePermissions<Permissions>();
  if (
    record &&
    permissions?.role === "employee" &&
    record.employeeId === permissions?.userId
  ) {
    return <EditButton />;
  } else if (permissions?.role === "admin") {
    return <EditButton />;
  }
};

export const ContributionList = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField<Contribution> source="id" />
        <ReferenceField<Contribution>
          source="learningPathId"
          reference="learning_paths"
          label="Learning Path"
        />
        <TextField<Contribution> source="title" />
        <ReferenceField<Contribution>
          source="employeeId"
          reference="employees"
          label="Posted By"
          link={permissions?.role === "admin" ? "show" : undefined}
        />
        <EditOwnPostButton />
      </Datagrid>
    </List>
  );
};
