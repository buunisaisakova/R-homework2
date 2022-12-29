import './App.css';
import MainPage from "./pages/MainPage";
import UserPage from "./pages/userPage/UserPage";
import AboutTitle from "./components/aboutTitle/AboutTitle";

function App() {
  return (
    <div className="App">
      <MainPage/>
        <h1>--------------------</h1>

      <AboutTitle/>

        <UserPage/>

    </div>
  );
}

export default App;
