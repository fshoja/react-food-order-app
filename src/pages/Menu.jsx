import FoodList from "../component/FoodList/FoodList";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";


export default function Menu() {

  return (
    <>
      <Navbar />

      <section className="menu">

        <h1>
          Our Menu
        </h1>

        <FoodList />

      </section>
 <Footer />
    </>
  );
}