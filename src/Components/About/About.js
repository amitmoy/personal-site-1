import './About.css'
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import pic4 from '../../images/pic4.png';
import pic5 from '../../images/pic5.png';
import Carousel from '../Carousel/Carousel';

export default function Services(){

    return(
        <div className='about-div section'>
            <h1 className='about-header'>קצת עליי</h1>
            
            <div className='about-grid-container row' style={{margin: 0}}>
                <div className="col-sm">
                    <p className='about-content'>מהנדס תוכנה בעל ניסיון של מעל 3 שנים בפיתוח אתרים, אפליקציות ותוכנות בחברות גדולות</p>
                </div>

                <div className="col-sm" style={{margin:'auto 0'}}>
                    <Carousel>
                        <img src={pic1} className="self-pic"/>
                        <img src={pic2} className="self-pic" />
                        <img src={pic3} className="self-pic" />
                        <img src={pic4} className="self-pic" />
                        <img src={pic5} className="self-pic" />
                    </Carousel>
                </div>

                </div>

        </div>
    );
}