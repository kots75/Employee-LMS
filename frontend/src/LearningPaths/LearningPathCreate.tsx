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
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" required />
      <ReferenceInput source="categoryId" reference="categories" />
      <ReferenceArrayInput reference="learning_paths" source="prereqIds" />
      <FileInput source="files" multiple={true}>
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="description" required />
      <ReferenceArrayInput reference="employees" source="enrolled" />
    </SimpleForm>
  </Create>
);
