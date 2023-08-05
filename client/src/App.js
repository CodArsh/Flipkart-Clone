import { Box } from "@mui/material";
import "./App.css";

// components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/Details/DetailView";
import Cart from "./components/Cart/Cart";
import PaymentGateway from "./components/Payment/PaymentGateway";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 60 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentGateway />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
