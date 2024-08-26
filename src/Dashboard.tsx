import { Box, Stack, Typography } from "@mui/material";
import PieChartCard from "./components/PieChartCard";
import StatCard from "./components/StatCard";
import BarChartCard from "./components/BarChartCard";

export const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" component="div" sx={{ my: "0.5em" }}>
        Dashboard
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mr: "0.5em" }}>
        <StatCard title="10" content="Employees" iconName="Groups" />
        <StatCard title="10" content="Employees" iconName="Groups" />
        <StatCard title="10" content="Employees" iconName="Groups" />
        <StatCard title="10" content="Employees" iconName="Groups" />
      </Stack>
      <Stack
        direction="row"
        sx={{ mt: "1em", mb: "1em", mr: "0.5em" }}
        spacing={2}
      >
        <BarChartCard />
        <PieChartCard />
      </Stack>
    </Box>
  );
};
