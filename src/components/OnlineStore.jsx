import './OnlineStore.css';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import Button from './Button'
import Title from './Title'
import Container from './Container'
import Card from './Card'

const cardData = [
    {
        image: img6,
        title: 'Decor Plate',
        price: '$ 65.00 USD'
    },
    {
        image: img7,
        title: 'Mint Pottery',
        price: '$ 75.00 USD'
    },
    {
        image: img8,
        title: 'Set Of Potterys',
        price: '$ 125.00 USD'
    },
    {
        image: img9,
        title: 'Orange Ceramic',
        price: '$ 55.00 USD'
    },
    {
        image: img10,
        title: 'Dark Bowl',
        price: '$ 115.00 USD'
    },
    {
        image: img11,
        title: 'Square Pottery',
        price: '$ 75.00 USD'
    },
]



export default function OnlineStore () {
    return (
        <Container>
           <div className='onlineStore'>
           <Title h3='our online store' h2='pottery collection'/>
            <div className="cards">
            {
            cardData.map((item)=>(<Card img={item.image} title={item.title} price={item.price}/>))
           }
            </div>
            <Button name='view Collection' color='#AC1313'/>
           </div>
        </Container>
    )
}