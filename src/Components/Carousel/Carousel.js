import './Carousel.css'
import { useEffect, useState } from 'react';

export default function Carousel({children}){
    const [counter, setCounter] = useState(1);
    const content = children;

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(prev => {
                if(prev ===  content.length){
                    return 1;
                } else {
                    return prev + 1;
                }
            });
          }, 5000);
          return () => clearInterval(interval);
    });



    return(
        <div className='self-image-div'>

            {content.map((item, index) => (
            <div
                className={counter - 1 === index ? "show" : "not-show"}
                key={index}
            >
                {item}
            </div>
            ))}
        
        </div>
    );
}