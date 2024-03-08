import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Menu from './Components/Menu'
import All from "./Components/All"
import Burger from "./Components/Burger"
import Pizza from "./Components/Pizza"
import Pasta from "./Components/Pasta"
import Fries from "./Components/Fries"
import About from "./Components/About";
import BookTable from "./Components/BookTable";
import Footer from "./Components/Footer";

function App() {
  let siteTitle = "Website Title";
  return (
    <Router>
      <Navbar name={siteTitle} />
      <Routes>
        <Route path="home" element={<Home />}>
          <Route index element={<All />} />
          <Route path='all' element={<All />} />
          <Route path="burger" element={<Burger />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="pasta" element={<Pasta />} />
          <Route path="fries" element={<Fries />} />
        </Route>
        <Route path="menu" element={<Menu />}>
          <Route index element={<All />} />
          <Route path='all' element={<All />} />
          <Route path="burger" element={<Burger />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="pasta" element={<Pasta />} />
          <Route path="fries" element={<Fries />} />
        </Route>
        <Route path="about" element={<About/>}/>
        <Route path="bookTable" element={<BookTable/>}/>
      </Routes>
      <Footer name={siteTitle}/>
    </Router>
  );
}
export default App;
