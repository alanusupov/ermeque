import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import Order from "./components/Order";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Info />
      <Services />
      <Calculator />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
