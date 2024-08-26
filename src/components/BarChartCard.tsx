import { Card, CardContent, CardHeader } from "@mui/material";
import { Post, User } from "../types";
import { useGetList } from "react-admin";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartCard = () => {
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

  // Prepare data for BarChart
  const barData = users
    ? users.map((user) => ({
        name: user.name,
        postCount: postCounts[user.id] || 0,
      }))
    : [];

  return (
    <Card sx={{ padding: 2, flexGrow: 1 }}>
      <CardHeader title="Bar Chart" />
      <CardContent
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <BarChart
          width={600}
          height={400}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="postCount" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
