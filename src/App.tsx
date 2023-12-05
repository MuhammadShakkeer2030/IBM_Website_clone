import "./App.css";
import { ProductCardList } from "./components/ProductCardList";
import { Footer, Header, HomeBanner, NestedHoverNavLinks } from "./paths";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <ProductCardList key={0} item={[]} width={""} />

      <Routes>
        <Route path="/nested" element={<NestedHoverNavLinks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
