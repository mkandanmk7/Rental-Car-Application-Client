import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

const Home = () => {
  const cars = useSelector((state) => state.carReducer);
  console.log(cars);
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
    </DefaultLayout>
  );
};

export default Home;
