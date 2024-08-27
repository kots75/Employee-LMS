export type User = {
  id: number;
  name: string;
  email: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type Permissions = {
  role: string;
  userId: number;
};
