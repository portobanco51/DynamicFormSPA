import { RootState } from "../types";
import { useSelector } from "react-redux";
import ThankYou from "./ThankYou";
import Form from "./Form";

const Layout = () => {
  const submitted = useSelector((state: RootState) => state.form.submitted);

  return <> {!submitted ? <Form /> : <ThankYou />}</>;
};
export default Layout;
