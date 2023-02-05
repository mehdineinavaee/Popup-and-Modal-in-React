import "./App.css";
import Popup from "./components/popup";

function App() {
  return (
    <main className="container">
      <p>This is PoppinsLatin-Regular font</p>
      <p>
        This is <span className="PoppinsLatin-Black">PoppinsLatin-Black</span>{" "}
        font
      </p>
      <Popup />
    </main>
  );
}

export default App;
