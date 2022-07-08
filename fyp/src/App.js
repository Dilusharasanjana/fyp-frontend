import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blockexplore from "./Blockexplore";
import Transaction from "./Transaction";
import Register from "./Register";
import AppNew from "./test/AppNew";
import Key from "./Key";

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="blockexplore" element={<Blockexplore />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="register" element={<Register />} />
        <Route path="app" element={<AppNew/>}/>
        <Route path="key" element={<Key/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;