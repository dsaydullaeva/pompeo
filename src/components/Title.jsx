import './Title.css'

function Title(props) {
  return (
    <div>
      {props.h3 && <h3>{props.h3}</h3>}
      {props.h1 && <h1>{props.h1}</h1>}
      {props.h2 && <h2>{props.h2}</h2>}
    </div>
  )
}

export default Title