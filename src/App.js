import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FullContact from "./pages/FullContact";
import AddContact from "./pages/AddContact";
import Category from "./pages/Category";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-contact" element={<FullContact/>}/>
        <Route path="/add-Contact" element={<AddContact/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
