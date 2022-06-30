import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
