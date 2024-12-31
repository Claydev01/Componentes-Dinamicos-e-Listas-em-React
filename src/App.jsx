import './App.css'
import Card from './components/Card/Card'

function App() {
  const borracha ={
    nome:'borracha',
    imagem:'https://raw.githubusercontent.com/Claydev01/api_img/refs/heads/main/borracha.png'
  }

  const caderno ={
    nome:'caderno',
    imagem:'https://raw.githubusercontent.com/Claydev01/api_img/refs/heads/main/caderno.png'
  }
  
  const caneta ={
    nome:'caneta',
    imagem:'https://raw.githubusercontent.com/Claydev01/api_img/refs/heads/main/caneta.png'
  }

  const mochila ={
    nome:'mochila',
    imagem:'https://raw.githubusercontent.com/Claydev01/api_img/refs/heads/main/mochila.png'
  }


  const produtos=[borracha,caderno,caneta,mochila]
  
  return (
    <>
      <div className="cards">
       {produtos.map(function (produto){
        return <Card key={produto.nome} item={produto}
        />
       })}
     </div>   
    </>
  )
}

export default App
