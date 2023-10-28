import { RecoilRoot } from "recoil";
import LandingPage from "./pages/LandingPage";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { route } from "./types/types";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
  const routes: route[] = [
    { name: "Home", path: "/", element: <LandingPage /> },
    { name: "Menu", path: "/Menu", element: <></> },
    { name: "Contact", path: "/Contact", element: <></> },
    { name: "Cart", path: "/Cart", element: <CartPage /> },
  ];

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          {routes.map((item: route) => (
            <Route path={item.path} element={item.element}></Route>
          ))}
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;