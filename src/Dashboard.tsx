import { Box, Stack, Typography } from "@mui/material";
import PieChartCard from "./components/PieChartCard";
import StatCard from "./components/StatCard";
import BarChartCard from "./components/BarChartCard";
import { Title } from "react-admin";

export const Dashboard = () => {
  return (
    <>
      <Title title="Dashboard" />
      <Box>
        <Typography
          fontWeight="Bold"
          variant="h4"
          component="div"
          sx={{ my: "0.5em" }}
        >
          Dashboard
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mr: "0.5em" }}>
          <StatCard title="30" content="Total Employees" iconName="Groups" />
          <StatCard title="12" content="Enrolled Employees" iconName="Groups" />
          <StatCard
            title="18"
            content="Unenrolled Employees"
            iconName="Groups"
          />
          <StatCard title="2" content="Admins" iconName="Groups" />
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
    </>
  );
};
