import { Box, Stack, Typography } from "@mui/material";
import PieChartCard from "./PieChartCard";
import StatCard from "./StatCard";
import BarChartCard from "./BarChartCard";
import { Title, useGetList } from "react-admin";
import { Employee } from "../types";

export const Dashboard = () => {
  const { data: employees } = useGetList<Employee>("employees", {
    pagination: { page: 1, perPage: 100 },
  });
  const totalEmployees = employees ? employees.length : 0;
  const enrolledEmployees =
    employees?.filter((employee) => employee.enrolled.length > 0).length || 0;
  const unenrolledEmployees = totalEmployees - enrolledEmployees;

  const { data: admins } = useGetList("admins");
  const totalAdmins = admins ? admins.length : 0;

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
          <StatCard
            title={totalEmployees.toString()}
            content="Total Employees"
            iconName="Groups"
          />
          <StatCard
            title={enrolledEmployees.toString()}
            content="Enrolled Employees"
            iconName="Groups"
          />
          <StatCard
            title={unenrolledEmployees.toString()}
            content="Unenrolled Employees"
            iconName="Groups"
          />
          <StatCard
            title={totalAdmins.toString()}
            content="Admins"
            iconName="Groups"
          />
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
