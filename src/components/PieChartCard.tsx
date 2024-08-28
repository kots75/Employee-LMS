import { Card, CardContent, CardHeader } from "@mui/material";
import { useGetList } from "react-admin";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Post, User } from "../types";

const PieChartCard = () => {
  const { data: users } = useGetList<User>("users");
  const { data: posts } = useGetList<Post>("posts", {
    pagination: { page: 1, perPage: 100 },
  });

  // Transform posts data to count the number of posts per user
  const postCounts = posts
    ? posts.reduce(
        (acc, post) => {
          acc[post.userId] = (acc[post.userId] || 0) + 1;
          return acc;
        },
        {} as Record<number, number>,
      )
    : {};

  // Prepare data for PieChart
  const pieData = users
    ? users.map((user) => ({
        name: user.name,
        value: postCounts[user.id] || 0,
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
            cy={120}
            labelLine={false}
            outerRadius={120}
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
