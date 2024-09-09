import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import CustomersSay from "./components/CustomersSay";
import Card from "./components/Card";
import {Route, Routes, Link} from "react-router-dom";


function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/booking" element={<Bookings />}></Route>
          <Route path="/order" element={<orderOnline />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <CustomersSay>
          <Card />
        </CustomersSay>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
