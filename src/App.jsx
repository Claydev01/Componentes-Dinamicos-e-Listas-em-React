import './App.css'
import Card from './components/Card/Card'

function App() {
  const borracha ={
    nome:'borracha',
    imagem:'https://www.salvatore.academy/devmon/1_java.png'
  }

  const produtos=[borracha]
  
  return (
    <>
      <div className="cards">
       {produtos.map(function (devmon){
        return <Card key={devmon.nome} item={devmon}
        />
       })}
     </div>   
    </>
  )
}

export default App
