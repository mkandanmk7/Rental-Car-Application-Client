import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { userRegister } from "../redux/actions/userActions";

const Register = () => {
  let dispatch=useDispatch();


  const registerUser  = (value) => {
    dispatch(userRegister(value))
  }

  return (
    <DefaultLayout>
      <h1>Register Page</h1>;
    </DefaultLayout>
  );
};

export default Register;
