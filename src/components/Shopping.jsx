import './Shopping.css';
import Title from './Title';
import Button from './Button';
import Container from './Container';

export default function Shopping () {
    return (
        <div className='shopping'>
            <Container>
                <Title h3='Pompeo POttery' h2='Ready to start shopping?'/>
                <p className='shoppingText'>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit. </span> <br/>Suspendisse varius enim in eros elementum.</p>
                <Button name='new collection' color='#AC1313'/>
            </Container>
        </div>
    )
}