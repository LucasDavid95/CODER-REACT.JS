import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
