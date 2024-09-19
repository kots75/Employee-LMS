export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export interface Permissions {
  role: string;
  userId: string;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
  enrolled: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface LearningPath {
  id: string;
  name: string;
  categoryId: string;
  files: { url: string; title: string }[];
  prereqIds: string[];
  description: string;
  enrolled: string[];
}

export interface Contribution {
  id: string;
  title: string;
  body: string;
  employeeId: string;
  learningPathId: string;
}
