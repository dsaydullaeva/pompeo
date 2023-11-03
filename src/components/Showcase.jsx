import './Showcase.css'
import Button from './Button'
import Title from './Title'
import showcase from '../assets/showcase.png'
import Container from './Container'


function Showcase() {
  return (
    <div className='showcaseContainer'>
      <Container>
        <div className='flexContainer'>
          <div className='showcaseText'>
          <Title h3='Pompeo Pottery' h1='Unique Porcelain Stone Collection' />
          <p>Unique & modern pottery made by our master in porcelain & stones</p>
          <Button name='Shop Collection' color='#AC1313' />
          </div>
          <figure>
            <img className='bgImg' src={showcase} alt="vase" />
          </figure>
         
        </div>
      </Container>
    </div>
  )
}

export default Showcase