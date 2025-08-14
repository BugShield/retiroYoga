import Header from "./componentes/header";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";
import Imersao from "./componentes/Imersão";
import Facilitadores from "./componentes/Facilitadores";
import Local from "./componentes/Local";
import bgHeart from "/assets/bgHearts.png"


function App() {
  return (
    <>
      <div className="relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bgHeart})` }}>
        <Header />
        <Hero />
      </div>
        <Sobre />
        <Imersao />
        <Facilitadores />
        <Local />

    </>
  );
}

export default App;
