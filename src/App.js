import Activities from "./pages/activities";
import BestDeals from "./pages/best-deals";
import Bucket from "./pages/bucket";
import CategoryPage from "./pages/category";
import Coupon from "./pages/coupon";
import Deals from "./pages/deals";
import Explore from "./pages/explore";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Hero from "./pages/hero";
import Services from "./pages/services";
import Staycation from "./pages/staycation";
import TopStaycation from "./pages/top-staycation";
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
