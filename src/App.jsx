import "./index.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Production from "./components/Production";

function App() {
  return (
    <>
      <Header />
      {/* <div className="bg bg-no-repeat object-cover"> */}
      <Slider />
      <Production />
      {/* </div> */}
    </>
  );
}

export default App;
