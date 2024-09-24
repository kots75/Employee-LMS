import { Divider } from "@mui/material";
import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AdminShow = () => (
  <Show>
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField source="id" label="ID" sx={{ fontSize: "0.8em" }} />
      <TextField source="name" sx={{ fontSize: "0.8em" }} />
      <EmailField source="email" sx={{ fontSize: "0.8em" }} />
      <TextField source="username" sx={{ fontSize: "0.8em" }} />
    </SimpleShowLayout>
  </Show>
);
