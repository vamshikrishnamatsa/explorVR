import './hero.css'
import island from './VR3.jpg'

export default function Hero(){
    
    return(
        <div className='hero-main'>
            
                <div className="imageBG">
                    <img src={island} className="image1" alt='hol'></img>
                    <h1 className="title">"EXPERIENCE THE NEXT GENERATION OF VR"</h1>
                    
                </div>
           
        </div>
    )
}