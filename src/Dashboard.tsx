import { Box, Stack, Typography } from "@mui/material";
import PieChartCard from "./components/PieChartCard";
import StatCard from "./components/StatCard";

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
      <Stack direction="row" sx={{ mt: "1em" }} spacing={2}>
        <PieChartCard />
        <PieChartCard />
      </Stack>
    </Box>
  );
};
