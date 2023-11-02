import './TextCard.css';


export default function TextCard (props) {
    return (
        <div className='textCard'>
            <h2 className='h2'>{props.h2}</h2>
            <h3 className='h3'>{props.h3}</h3>
            <p className='p'>{props.p}</p>
            <h4 className='h4'>{props.h4}</h4>
        </div>
    )
}