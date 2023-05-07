// import { Route, Routes } from "react-router-dom";
// import Signin from "../pages/signin/Signin";
// import Signup from "../pages/signup/Signup";
// import Home from "../pages/home/Home";
// import Cart from "../pages/cart/Cart";
// import Dashboard from "../pages/dashboard/Dashboard";
// import Users from "../pages/dashboard/Users";
// import GetItems from "../pages/dashboard/GetItems";
// import AddItem from "../pages/addItem/AddItem";
// import ItemDetailPage from "../pages/itemDetailPage/ItemDetailPage";
// import UserProfile from "../pages/userProfile/UserProfile";

// function Routing() {
//   const checkAdmin = localStorage.getItem("UserType");
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Signin />} />
//         <Route path="/Signup" element={<Signup />} />
//         {checkAdmin === "Admin" ? (
//           <>
//             <Routes>
//               <Route path="/Dashboard" element={<Dashboard />} />
//               <Route path="/Dashboard/users" element={<Users />} />
//               <Route path="/Products" element={<GetItems />} />
//               <Route path="/Add Item" element={<AddItem />} />
//             </Routes>
//           </>
//         ) : (
//           <>
//             <Routes>
//               <Route path="/Home" element={<Home />} />
//               <Route path="/Cart" element={<Cart />} />
//               <Route
//                 path="/Home/getItemDetail/:id"
//                 element={<ItemDetailPage />}
//               />
//               <Route path="/Profile" element={<UserProfile />} />
//             </Routes>
//           </>
//         )}
//         {/* <Route path="/Home" element={<Home />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/Dashboard/users" element={<Users />} />
//         <Route path="/Products" element={<GetItems />} />
//         <Route path="/Add Item" element={<AddItem />} />
//         <Route path="/Home/getItemDetail/:id" element={<ItemDetailPage />} />
//         <Route path="/Profile" element={<UserProfile />} /> */}
//       </Routes>
//       {/* <Routes>
//         <Route path="/Dashboard" element={<Dashboard />} />
//       </Routes> */}
//     </>
//   );
// }

// export default Routing;
