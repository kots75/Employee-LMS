import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  FileField,
  FileInput,
} from "react-admin";

export const LearningPathEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" required />
      <ReferenceInput source="categoryId" reference="categories" />
      <ReferenceArrayInput reference="learning_paths" source="prereqIds" />
      <FileInput source="files">
        <FileField source="url" title="title" />
      </FileInput>
      <TextInput source="description" required />
      <ReferenceArrayInput reference="employees" source="enrolled" />
    </SimpleForm>
  </Edit>
);
