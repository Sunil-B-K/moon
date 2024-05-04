import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderTwo from "./components/HederTwo/HeaderTwo";
import Hero from "./components/hero/Hero";
import Content from "./components/content/Content";
import Product from "./components/product/Product";
import Second from "./components/Secondhero/Second";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTwo />
      <Hero />
      <Content />
      <Product />
      <Second />
    </div>
  );
}

export default App;
