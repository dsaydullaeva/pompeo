import './Button.css'

function Button(props) {
  const {name, color} = props
  return (
    <button className='btn' style={{backgroundColor: color}}>
      {name}
    </button>
  )
}

export default Button;
