import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/global.css";
import "./component/auth/auth.css";
import "./component/home/home.css";
import "./component/footer/footer.css";
import "./component/header/header.css";
import "./component/products/product.css";
import "./component/newsletter/newsletter.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
