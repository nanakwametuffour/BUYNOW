import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Watch from "./pages/Watch";
import Phone from "./pages/Phone";
import Earphone from "./pages/Earphone";
import Airpode from "./pages/Airpode";
import CartItem from "./components/CartItem";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/earphone" element={<Earphone />} />
            <Route path="/airpode" element={<Airpode />} />
            <Route path="/cart" element={<CartItem/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
