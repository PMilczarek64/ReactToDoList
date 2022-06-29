import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchFrom/SearchFrom";
import List from "./components/List/List";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;