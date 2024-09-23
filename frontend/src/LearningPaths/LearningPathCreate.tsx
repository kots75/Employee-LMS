import {
  Create,
  FileField,
  FileInput,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const LearningPathCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <ReferenceInput source="categoryId" reference="categories" />
      <ReferenceArrayInput reference="learning_paths" source="prereqIds" />
      <FileInput source="files">
        <FileField source="url" title="title" />
      </FileInput>
      <TextInput source="description" required />
      <ReferenceArrayInput reference="employees" source="enrolled" />
    </SimpleForm>
  </Create>
);
