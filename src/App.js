import './App.css';
import Navbar from './components/Navbar';
import BoshSahifa from './components/BoshSahifa';
import Boglanish from './components/Boglanish';
import Portfolio from './components/Portfolio';
// import Xizmatlar from './components/Xizmatlar';
import MenHaqimda from './components/MenHaqimda';
import Tajriba from './components/Tajriba';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BoshSahifa />

      <MenHaqimda />
      {/* <Xizmatlar /> */}
      <Tajriba />
      <Portfolio />
      <Boglanish />
      <Footer/>

    </>
  );
}

export default App;
