import './Showcase.css'
import Button from './Button'
import Title from './Title'
import showcase from '../assets/showcase.png'


function Showcase() {
  return (
    <div className='showcaseContainer'>
      <div>
      <Title h3='Pompeo Pottery' h1='Unique Porcelain Stone Collection' />
      <p>Unique & modern pottery made by our master in porcelain & stones</p>
      <Button name='Shop Collection' color='#AC1313' />
      </div>
      <img className='bgImg' src={showcase} alt="vase" />
    </div>
  )
}

export default Showcase