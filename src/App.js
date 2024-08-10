<<<<<<< HEAD
import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
import "./index.css";
import LandingPage from "./Pages/landingPage";


function App() {
  return (
    <div className="font-sans overflow-hidden">
      <Header />
      <LandingPage />
      <Footer />
=======
import './App.css';
import LandingPage from './Pages/landingPage';
import MemberPage from './Pages/memberPage';

function App() {
  return (
    <div className="font-sans">
      <LandingPage></LandingPage>
      <MemberPage></MemberPage>
>>>>>>> carousel-and-member
    </div>
  );
}

export default App;
