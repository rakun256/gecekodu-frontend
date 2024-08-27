import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
import "./index.css";
import LandingPage from "./Pages/landingPage";
//import MemberPage from "./Pages/memberPage";

function App() {
  return (
    <div className="font-sans overflow-hidden">
      <Header />
      <LandingPage />
      {/* <MemberPage /> */}
      <Footer />
    </div>
  );
}

export default App;
