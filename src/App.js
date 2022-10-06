import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Prueba de componentes de react</h1>
      <Testimonio 
        nombre="pedro"
        pais="argentina"
        imagen="1"
        cargo="freelancer"
        testimonio="commodo aliqua exercitation sunt ea et fugiat lorem dolor in commodo proident et minim culpa occaecat cillum cillum nostrud. aliquip occaecat ut sed veniam labore proident laboris qui ad do exercitation dolore pariatur pariatur est laboris officia. eiusmod laboris nostrud nostrud ex quis culpa pariatur officia lorem enim ipsum irure id lorem laboris. Excepteur mollit sint enim lorem elit cillum labore est consequat non mollit est consequat anim eu consectetur. ipsum non adipiscing irure ut qui deserunt ipsum magna in ullamco nulla exercitation pariatur proident pariatur lorem ex officia. in est irure reprehenderit amet laboris eiusmod nostrud nostrud in anim exercitation qui cillum sed cillum exercitation."/>

      <Testimonio 
        nombre="gonzalo"
        pais="argentina"
        imagen="2"
        cargo="freelancer"
        testimonio="commodo aliqua exercitation sunt ea et fugiat lorem dolor in commodo proident et minim culpa occaecat cillum cillum nostrud. aliquip occaecat ut sed veniam labore proident laboris qui ad do exercitation dolore pariatur pariatur est laboris officia. eiusmod laboris nostrud nostrud ex quis culpa pariatur officia lorem enim ipsum irure id lorem laboris. Excepteur mollit sint enim lorem elit cillum labore est consequat non mollit est consequat anim eu consectetur. ipsum non adipiscing irure ut qui deserunt ipsum magna in ullamco nulla exercitation pariatur proident pariatur lorem ex officia. in est irure reprehenderit amet laboris eiusmod nostrud nostrud in anim exercitation qui cillum sed cillum exercitation."/>

      <Testimonio 
        nombre="rosa"
        pais="argentina"
        imagen="3"
        cargo="freelancer"
        testimonio="commodo aliqua exercitation sunt ea et fugiat lorem dolor in commodo proident et minim culpa occaecat cillum cillum nostrud. aliquip occaecat ut sed veniam labore proident laboris qui ad do exercitation dolore pariatur pariatur est laboris officia. eiusmod laboris nostrud nostrud ex quis culpa pariatur officia lorem enim ipsum irure id lorem laboris. Excepteur mollit sint enim lorem elit cillum labore est consequat non mollit est consequat anim eu consectetur. ipsum non adipiscing irure ut qui deserunt ipsum magna in ullamco nulla exercitation pariatur proident pariatur lorem ex officia. in est irure reprehenderit amet laboris eiusmod nostrud nostrud in anim exercitation qui cillum sed cillum exercitation."/>  
      </div>
    </div>
  );
};

export default App;
