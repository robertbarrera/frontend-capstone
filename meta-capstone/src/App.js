import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import CustomersSay from "./components/CustomersSay";
import Card from "./components/Card";


function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <CustomersSay>
          <Card />
        </CustomersSay>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
