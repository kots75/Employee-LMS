import { Card, CardContent, CardHeader } from "@mui/material";
import { useGetList } from "react-admin";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { User } from "../types";

const PieChartCard = () => {
  const { data: users } = useGetList<User>("users");

  // Transform users data for PieChart
  const pieData = users
    ? users.map((user) => ({
        name: user.name,
        value: user.id,
      }))
    : [];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <Card>
      <CardHeader title="Pie Chart" />
      <CardContent>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
