import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { mockPromotions } from "./mocks/mockPromotions";

function App() {
  return (
    <>
      <Header />
      <Banner promotions={mockPromotions} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
