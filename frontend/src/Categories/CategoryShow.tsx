import { Show, SimpleShowLayout, TextField } from "react-admin";
import { Category } from "../types";
import { Divider } from "@mui/material";

export const CategoryShow = () => (
  <Show>
    <SimpleShowLayout spacing={1} divider={<Divider flexItem />}>
      <TextField<Category> source="id" label="ID" sx={{ fontSize: "0.8em" }} />
      <TextField<Category> source="name" sx={{ fontSize: "0.8em" }} />
    </SimpleShowLayout>
  </Show>
);
