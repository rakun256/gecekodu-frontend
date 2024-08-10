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
    </div>
  );
}

export default App;
