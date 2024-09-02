import {
  ChipField,
  Datagrid,
  EditButton,
  List,
  ReferenceArrayField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SingleFieldList,
  TextField,
  TextInput,
  usePermissions,
} from "react-admin";
import { LearningPath, Permissions } from "../types";

const learningPathFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    label="Employee"
    source="employeeId"
    reference="employees"
    allowEmpty
    alwaysOn={true}
  >
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const LearningPathList = () => {
  const { permissions } = usePermissions<Permissions>();
  return (
    <List filters={learningPathFilters}>
      <Datagrid>
        <TextField<LearningPath> source="id" />
        <ReferenceField<LearningPath>
          source="categoryId"
          reference="categories"
          link={permissions?.role === "admin" ? "show" : ""}
        />
        <TextField<LearningPath> source="name" />
        <TextField<LearningPath> source="description" />
        <ReferenceArrayField<LearningPath>
          reference="employees"
          source="enrolled"
        >
          <SingleFieldList
            linkType={permissions?.role === "admin" ? "show" : false}
          >
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        {permissions?.role === "admin" ? <EditButton /> : null}
      </Datagrid>
    </List>
  );
};
