import './News.css'
import Button from './Button'
import Title from './Title'
import iconTelegram from '../assets/icon-telegram.png'
import Container from './Container'

function News() {
  return (
    <Container>
      <div className='news-container'>
        <img src={iconTelegram} alt="plane icon" />
        <Title h3='Latest news' h2='Latest News New updates'/>
        <form action="">
        <input className='mail' type="email" placeholder='Enter your email'/>
        <Button name='Subscribe' color='#000'/>
        </form>
        <div>
        <input className='check' type="checkbox" id='myCheckbox'/>
        <label htmlFor='myCheckbox'>Sign up for our newsletter</label>
        </div>
      </div>
    </Container>
  )
}

export default News