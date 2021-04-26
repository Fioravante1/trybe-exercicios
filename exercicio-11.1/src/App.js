import './App.css';

const newArray = ['Aprender React', 'Melhorar JavaScript', 'Melhorar Logica de Programação']

const task = (value) => {
  return (
    <li className="texto">{value}</li>
  );
}

function App() {
  return (
   newArray.map((value) => task(value))
  );
}

export default App;
