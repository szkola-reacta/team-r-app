import Home from "./pages/Home";
import Header from "./components/Header";
import SinglePost from './components/Posts/SinglePost'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SinglePost />
    </div>
  );
}

export default App;
