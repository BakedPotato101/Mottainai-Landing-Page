export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("merchant_token");
  }
  return false;
};
