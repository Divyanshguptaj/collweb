import './App.css';
import Navbar from'./Components/Navbar.js';
import TopMenu from './Components/TopMenu.js';
import LandingPage from './Components/LandingPage.js';
import Main from './Components/Main.js'
import Logo from './Components/Logo.js'
import CardSlider from './Components/CardSlider.js';
function App() {
  return (
    <>
      <TopMenu/>
      <Logo/>
      <Navbar/>
      <LandingPage/>
      <Main/>
      <CardSlider/>
    </>
  );
}

export default App;