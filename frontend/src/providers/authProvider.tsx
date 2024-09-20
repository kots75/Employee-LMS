import { AuthProvider } from "react-admin";
import { jwtDecode } from "jwt-decode";

interface Payload {
  role: string;
  userId: string;
}

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request(
      `${import.meta.env.VITE_JSON_SERVER_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      },
    );
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const { token } = await response.json();
      // store the token in local storage
      localStorage.setItem("token", token);
    } catch {
      throw new Error("Network error");
    }
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const token = localStorage.getItem("token");
    if (!token) return Promise.reject();
    const { userId, role } = jwtDecode<Payload>(token);

    return Promise.resolve({ role, userId });

    // if (localStorage.getItem("username") === "admin")
    //   return Promise.resolve({ role: "admin", userId: 100 });
    // else return Promise.resolve({ role: "employee", userId: 1 });
  },
};
