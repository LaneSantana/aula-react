
import './App.css';

import Header from './componentes/Header';
import Projects from './componentes/Projects';
import Contacts from './componentes/Contact';
import Footer from './componentes/Footer';
import HelloUse from './componentes/HelloUse';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <HelloUse nome= "Lane" adjetivo= " a Moana do Recife"></HelloUse>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
}

export default App;
