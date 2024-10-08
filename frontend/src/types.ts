export type User = {
  id: number;
  name: string;
  email: string;
};

export interface Admin {
  name: string;
  email: string;
  username: string;
  password: string;
}

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

export type Employee = {
  id: number;
  name: string;
  position: string;
  email: string;
  enrolled: number[];
  username: string;
  password: string;
};

export type Category = {
  id: number;
  name: string;
};

export type LearningPath = {
  id: number;
  name: string;
  categoryId: number;
  files: { url: string; title: string; rawFile: File }[];
  prereqIds: number[];
  description: string;
  enrolled: number[];
};

export type Contribution = {
  id: number;
  title: string;
  body: string;
  employeeId: number;
  learningPathId: number;
};
