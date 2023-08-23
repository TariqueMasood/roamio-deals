import Activities from "./components/activities";
import BestDeals from "./components/best-deals";
import Bucket from "./components/bucket";
import CategoryPage from "./components/category";
import Coupon from "./components/coupon";
import Deals from "./components/deals";
import Explore from "./components/explore";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Staycation from "./components/staycation";
import TopStaycation from "./components/top-staycation";
import CustomerSlider from "./pages/customer-slider";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Deals />
      <Staycation />
      <Explore />
      <CategoryPage />
      <Activities />
      <BestDeals />
      <Bucket />
      <CustomerSlider />
      <TopStaycation />
      <Services />
      <Coupon />
      <Footer />
    </>
  );
}

export default App;
