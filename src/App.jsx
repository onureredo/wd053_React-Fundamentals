import Footer from './components/Footer';
import Home from './components/Home';
import HomeAgain from './components/HomeAgain';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <>
      <Navbar />
      <UserGreeting />
      {/* <Home /> */}
      <HomeAgain />
      <Movies />
      <Footer />
    </>
  );
}

export default App;
