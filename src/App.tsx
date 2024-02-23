import "./App.css";
import { Error, Footer, Header, NestedHoverNavLinks ,Home, Login, ChatBot } from "./paths";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative bg-[#121212]">
      <Header />
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nested" element={<NestedHoverNavLinks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <ChatBot/>
      <Footer />
    </div>
  );
}

export default App;
