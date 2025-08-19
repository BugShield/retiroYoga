import Header from "./componentes/organismos/Header";
import Hero from "./componentes/organismos/Hero";
import Sobre from "./componentes/organismos/Sobre";
import Imersao from "./componentes/organismos/Imersão";
import Facilitadores from "./componentes/organismos/Facilitadores";
import Local from "./componentes/organismos/Local";
import Alimentacao from "./componentes/organismos/Alimentacao";
import Investimento from "./componentes/organismos/Investimento";
import ComoChegar from "./componentes/organismos/ComoChegar";
import Footer from "./componentes/organismos/Footer";
import bgHeart from "/assets/bgHearts.png";
function App() {
  return (
    <>
      <div
        className="relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Header />
        <Hero />
      </div>
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Sobre />
      </div>
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Local />
      </div>
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Alimentacao />
      </div>

      <Facilitadores />
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Imersao />
      </div>
      <div
        lassName="relative bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <Investimento />
      </div>
      <ComoChegar />
      <Footer />
    </>
  );
}

export default App;
