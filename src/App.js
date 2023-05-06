import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ItemDetailPage from "./pages/itemDetailPage/ItemDetailPage";
import Users from "./pages/dashboard/Users";
import AddItem from "./pages/addItem/AddItem";
import UserProfile from "./pages/userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/users" element={<Users />} />
        <Route path="/Add Item" element={<AddItem />} />
        <Route path="/Home/itemDetail" element={<ItemDetailPage />} />
        <Route path="/Profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
