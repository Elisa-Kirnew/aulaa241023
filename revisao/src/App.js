import Imagem from './img/imagem.jpg'
import './App.css';
import ProfileImagem from './componentes/ProfileImage';

function App() {
  return (
    <div className="App">
     <h1> teste </h1>
     <ProfileImagem titulo={"imagem teste ilustrativa"} imagem={Imagem} alt={"teste"}/>
    </div>
  );
}

export default App;

