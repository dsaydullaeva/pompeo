import './ProductCategories.css';
import Title from './Title';
import TextCard from './TextCard';
import Container from './Container';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

export default function ProductCategories () {
    return (
        <Container>
            <div className='productCategories'>
            <Title h3='Product Categories' h2='porcelain pottery'/>
            <div className='productType'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='info'>
                <TextCard h2='Hand Grafted Pottery since 1990' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.'/>
                <TextCard h2='We Provide Premium Pottery Produts' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.'/>
            </div>
            <div className='details'>
                <img src={img4} alt=""/>
                <TextCard h3='Gold & Black Pottery' p='Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.' h4='View Details'/>
                <TextCard h3='Orange Ceramic' p='Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.' h4='View Details'/>
                <img src={img5} alt=""/>
            </div>
            </div>
        </Container>
    )
}