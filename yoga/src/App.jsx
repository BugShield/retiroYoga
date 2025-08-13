import Header from "./componentes/header";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";
import Imersao from "./componentes/Imersão";
import Facilitadores from "./componentes/Facilitadores";
import Local from "./componentes/Local";


function App() {
  return (
    <>
      <div className="h-dvh">
        <Header />
        <Hero />
        <Sobre />
      </div>
        <Imersao />
        <Facilitadores />
        <Local />

    </>
  );
}

export default App;
