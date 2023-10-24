import Imagem from './img/castelo.jpg'
import './App.css';
import ProfileImagem from './componentes/ProfileImage';

function App() {
  return (
    <div className="App">
     <h1> Disney </h1>
     <ProfileImagem titulo={"o castelo da disney em orlando é o da princesa Cinderela, a magia que existe é espetacular"} imagem={Imagem} alt={"teste"}/>
    </div>
  );
}

export default App;
