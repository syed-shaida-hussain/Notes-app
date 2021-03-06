import "./App.css";
import {  Routes , Route } from "react-router-dom"
import { Signin } from "./pages/Authentication/loginPage";
import { Signup } from "./pages/Authentication/signupPage";
import { HomePage } from "./pages/Homepage/homePage";
import { TrashPage } from "./pages/Trashed/trash";
import { ArchivePage } from "./pages/Archive/archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/login" element = {<Signin />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/trash" element = {<TrashPage/>} />
        <Route path = "/archives" element = {<ArchivePage />} />
      </Routes>
    </div>
  );
}

export default App;
