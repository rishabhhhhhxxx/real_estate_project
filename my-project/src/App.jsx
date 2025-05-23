import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing.jsx";
import Listing from "./pages/Listing";
import Search from "./pages/Search";


export default function App() {
  return(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/create-listing" element={<CreateListing />}></Route>
      <Route path="/update-listing/:listingId" element={<UpdateListing />}></Route>
      </Route>
      <Route path="/listing/:listingId" element={<Listing />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

