import { writable } from "svelte/store";
import { hashPassword } from "../utils/hashPassword";
import * as bcrypt from "bcryptjs";
import { DBUtil } from "../utils/db";
import { whoami } from "../utils/whoami";

// Initial state of the auth store
export const auth = writable({
  isAuthenticated: false,
  user: null,
  users: [], // To store registered users
});

// Function to sign up a new user
export const signup = async (email: string, password: string) => {
  const hashedPassword = await hashPassword(password);

  try {
    const newUser = { email, password: hashedPassword };
    auth.update((state) => {
      return {
        ...state,
        users: [...state.users, newUser],
      };
    });
    DBUtil.getInstance().insert("user", newUser);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// Function to login a user
export const login = async (email: string, password: string) => {
  try {
    const userDoc = DBUtil.getInstance().find("user", "email", email);
    const isPasswordValid = await bcrypt.compare(password, userDoc.password);

    if (isPasswordValid) {
      auth.update((state) => ({
        ...state,
        isAuthenticated: true,
        user: userDoc,
      }));
      let activeuser = {
        email,
        activeAt: new Date()
      }
      DBUtil.getInstance().insert("activeUser", activeuser);
      localStorage.setItem('activeUser', JSON.stringify(activeuser))
      return { isAuthenticated: true, user: userDoc };
    } else {
      auth.update((state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
      }));
      return { isAuthenticated: false, user: null };
    }
  } catch (error: any) {
    auth.update((state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }));
    return { isAuthenticated: false, user: null, message: error.message };
  }
};

// Function to logout a user
export const logout = () => {
  DBUtil.getInstance().insert("activeUser", []);
  localStorage.removeItem('activeUser');
  auth.update((state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }));
  whoami();

};
