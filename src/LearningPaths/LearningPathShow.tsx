import { Divider } from "@mui/material";
import {
  ChipField,
  FileField,
  ReferenceArrayField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  usePermissions,
  useShowContext,
} from "react-admin";
import { LearningPath, Permissions } from "../types";
import EnrollButton from "./EnrollButton";

const LearningPathShowLayout = () => {
  const { permissions } = usePermissions<Permissions>();
  const { record } = useShowContext<LearningPath>();
  return (
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField<LearningPath>
        source="id"
        label="ID"
        sx={{ fontSize: "0.8em" }}
      />
      <TextField<LearningPath> source="name" sx={{ fontSize: "0.8em" }} />
      <ReferenceField<LearningPath>
        source="categoryId"
        reference="categories"
        link={permissions?.role === "admin" ? "show" : ""}
      >
        <TextField source="name" sx={{ fontSize: "0.8em" }} />
      </ReferenceField>
      {(record?.prereqIds.length ?? 0) > 0 && (
        <ReferenceArrayField<LearningPath>
          reference="learning_paths"
          source="prereqIds"
          label="Prerequisites"
        >
          <SingleFieldList>
            <ChipField source="name" sx={{ fontSize: "0.7em" }} />
          </SingleFieldList>
        </ReferenceArrayField>
      )}
      {(record?.files?.length ?? 0) > 0 && (
        <FileField
          source="files"
          src="url"
          title="title"
          target="_blank"
          sx={{ fontSize: "0.8em" }}
        />
      )}
      <TextField<LearningPath>
        source="description"
        sx={{ fontSize: "0.8em" }}
      />
      <ReferenceArrayField<LearningPath>
        reference="employees"
        source="enrolled"
      >
        <SingleFieldList>
          <ChipField source="name" sx={{ fontSize: "0.7em" }} />
        </SingleFieldList>
      </ReferenceArrayField>
      {permissions?.role === "employee" && <EnrollButton />}
    </SimpleShowLayout>
  );
};

export const LearningPathShow = () => (
  <Show>
    <LearningPathShowLayout />
  </Show>
);
