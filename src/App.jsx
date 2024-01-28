import "./index.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Production from "./components/Production";
import GenreMovieList from "./components/GenreMovieList";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Production />
      <GenreMovieList />
    </>
  );
}

export default App;
