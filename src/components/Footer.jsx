import './Footer.css'
import Container from './Container'
import email from '../assets/email.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'

function Footer() {
  return (
    <div className='footer-bg'>
      <Container>
        <div className='contacts-container'>
          <h4>Pompeo</h4>
          <p>I have always striven to fix beauty in wood, stone, <br /> glass or pottery, that has been my creed.</p>
          <div className='links'>
            <div className='email flex-container'>
              <a href="mailto:pompeopotery@gmail.com"><img src={email} alt="" /></a>
              <a href="mailto:pompeopotery@gmail.com">Email</a>
              <a href="mailto:pompeopotery@gmail.com">pompeopotery@gmail.com</a>
            </div>
            <div className='location flex-container'>
              <a href=""><img src={location} alt="" /></a>
              <a href="">Location</a>
              <p>Central Park, Manhattan</p>
              <p>New York, 1101</p>
            </div>
            <div className='phone flex-container'>
              <a href="tel:+1 292 345 678"><img src={phone} alt="" /></a>
              <a href="tel:+1 292 345 678">Call</a>
              <a href="tel:+1 292 345 678">+1 292 345 678</a>
            </div>
          </div>
        </div>
        <div className='license-container'>
          <p>Template design by <span>Dorian Hoxha</span> - <span>Image License Info</span> Powered by <span>Webflow</span></p>
        </div>
      </Container>
    </div>
  )
}

export default Footer