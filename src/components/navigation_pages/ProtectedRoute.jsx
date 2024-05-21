import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loggeduser } from "../Authentication/AuthSlice";
const Protected_Route = ({ children }) => {
  const user = useSelector(loggeduser);
  console.log(user);

  if (!user) return <Navigate to="/login"></Navigate>;
  return children;
};

export default Protected_Route;
