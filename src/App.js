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
import GetItems from "./pages/dashboard/GetItems";
import Routing from "./routing/Routing";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home/getItemDetail/:id" element={<ItemDetailPage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/users" element={<Users />} />
        <Route path="/Products" element={<GetItems />} />
        <Route path="/Add Item" element={<AddItem />} />
        <Route path="/Dashboard/Update/:id" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
