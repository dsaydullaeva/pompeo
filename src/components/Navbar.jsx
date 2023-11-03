import './Navbar.css'
import Container from './Container'
import cart from '../assets/cart.png'

function Navbar() {
  return (
    <Container>
      <div className='navbar'>
        <h4><a href="">Pompeo</a></h4>
        <ul className='menu'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Contact</a></li>
          <li><a href=""><img src={cart} alt="cart" /> Cart</a></li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar