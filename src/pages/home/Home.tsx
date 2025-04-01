import Navbar from "../../components/navigation/Navbar/Navbar";
import FavoriteProduct from "./section/FavoriteProduct";
import MapOutlets from "./section/MapOutlets";
import StartWithCoffee from "./section/StartWithCoffee";
import Testimonial from "./section/Testimonial";
import WeProvideCoffeeAndMeals from "./section/WeProvideCoffeeAndMeals";

const Home = () => {
  return (
    <div>
      <Navbar variant="transparent" />
      <StartWithCoffee />
      <WeProvideCoffeeAndMeals />
      <FavoriteProduct />
      <MapOutlets />
      <Testimonial />
    </div>
  );
};

export default Home;
