import "./App.css";
import { Error, Footer, Header, NestedHoverNavLinks ,Home } from "./paths";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nested" element={<NestedHoverNavLinks />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
