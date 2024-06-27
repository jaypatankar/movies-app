import { goto } from "$app/navigation";
import { auth } from "../stores/auth";

export const whoami = (currentUrl: string = "/") => {
    // Retrieve the active user from localStorage and parse it
    let activeUser = localStorage.getItem("activeUser");
    let parsedUser = null;
    
    let storeData = localStorage.getItem("db-store");
    let parsedStoreData = null;

    try {
      parsedUser = activeUser ? JSON.parse(activeUser) : null;
    } catch (e) {
      console.error("Error parsing active user from localStorage:", e);
    }
    
    try {
      parsedStoreData = storeData ? JSON.parse(storeData) : null;
    } catch (e) {
      console.error("Error parsing store data from localStorage:", e);
    }

    // Check if the parsed user exists
    let isUserActivated = null;
    if (parsedUser && parsedUser.email) {
      isUserActivated = parsedUser?.activeUser?.email === parsedStoreData.email
      if (isUserActivated) {
        auth.update((state) => ({
          ...state,
          isAuthenticated: true,
        }));
        goto(currentUrl);
        return true;
      } else {
        goto("/auth/login");
        return false;
      }
    } else {
      goto("/auth/login");
      return false;
    }
}