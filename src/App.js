import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NabBar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/users/User";
import AddUser from "./pages/users/AddUser";

function App() {
  return (
    <>
      <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
