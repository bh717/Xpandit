import {
  Routes,
  Route,
} from "react-router-dom";
// import Cookie from "./components/Cookie/Cookie";
import { Footer, Header } from "./components/Layout";
import {
  Home,
  Reklamfilm,
  Eventfilm,
  Coporate,
  Omoss,
} from "./pages";


import "react-multi-carousel/lib/styles.css";


function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reklam" element={<Reklamfilm/>} />
        <Route exact path="/eventfilm" element={<Eventfilm/>} />
        <Route exact path="/coporate" element={<Coporate/>} />
        <Route exact path="/omoss" element={<Omoss/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
