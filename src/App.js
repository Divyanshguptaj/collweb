import './App.css';
import Navbar from'./Components/Navbar.js';
import TopMenu from './Components/TopMenu.js';
import LandingPage from './Components/LandingPage.js';
import Main from './Components/Main.js'
import Logo from './Components/Logo.js'

function App() {
  return (
    <>
      <TopMenu/>
      <Logo/>
      <Navbar/>
      <LandingPage/>
      <Main/>
    </>
  );
}

export default App;