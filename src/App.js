import "./App.css";
import MainPageComponent from "./main/index";
import { Switch, Route } from "react-router-dom";
import UploadComponent from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadComponent />
        </Route>
        <Route exact={true} path={"/products/:id"}>
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
