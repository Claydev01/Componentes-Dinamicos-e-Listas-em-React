import './Card.css'


export default function Card(props) {
        console.log(props)
    return (
        <div className="card">
        <h1>{props.item.nome}</h1>
        <img src={props.item.imagem} width="200"/>
    </div>
    )
}