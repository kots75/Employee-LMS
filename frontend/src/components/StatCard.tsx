import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import * as Icons from "@mui/icons-material";

interface Props {
  title: string;
  content: string;
  iconName: keyof typeof Icons; // Restricts iconName to valid MUI icon names
}

const StatCard: React.FC<Props> = ({ title, content, iconName }) => {
  // Dynamically select the icon based on the iconName prop
  const IconComponent = Icons[iconName];

  return (
    <Card
      sx={{ display: "flex", alignItems: "center", padding: 2, flexGrow: 1 }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardMedia>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {IconComponent ? <IconComponent sx={{ fontSize: 40 }} /> : null}
        </Box>
      </CardMedia>
    </Card>
  );
};

export default StatCard;
