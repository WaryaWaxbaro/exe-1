import { useState } from "react";
import reactLogo from "./assets/react.svg";
import sheekh from "./assets/sheekh.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppHeader from "./component/AppHeader";
import ProductForm from "./component/ProductForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AppHeader image={sheekh} title="Welcome To Product Page 1" />
        <ProductForm />
      </div>
    </>
  );
}

export default App;
