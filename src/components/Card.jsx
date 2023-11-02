import "./Card.css";

export default function Card (props) {
    return (
        <div className="card">
        <img src={props.img} alt="" />
        <p className="cardTitle">{props.title}</p>
        <p className="cardPrice">{props.price}</p>
       </div>
    )
}