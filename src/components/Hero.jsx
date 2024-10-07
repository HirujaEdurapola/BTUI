import "./src/Hero.css"
import MSFS from "./assests/MSFS.png"
import A320 from "./assests/plane.png"
import Cessna from "./assests/Cessna.png"

function DisplayHero() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
    
        // A320 plane
        const a320 = document.getElementById('a320');
        const a320TranslateX = Math.min(scrollY * 2, windowWidth);
        const a320TranslateY = -Math.min(scrollY * 0.2, windowHeight);
        const a320Scale = 1 + Math.min(scrollY / 1000, 2); 
        a320.style.transform = `translate(${a320TranslateX}px, ${a320TranslateY}px) scale(${a320Scale})`;
    
        // Cessna plane
        const cessna = document.getElementById('cessna');
        const cessnaTranslateX = Math.min(scrollY * -2, windowWidth); 
        const cessnaTranslateY = -Math.min(scrollY * 0.1, windowHeight);
        const cessnaScale = 1 + Math.min(scrollY / 1000, 2); 
        cessna.style.transform = `translate(${cessnaTranslateX}px, ${cessnaTranslateY}px) scale(${cessnaScale})`;
    });
    return (
        <>
        <div class="hero">
        <div class="hero-div">
        <img src={MSFS} alt="MSFS Logo" className="hero-logo" id="msfs" draggable="false"/>
        <img src={A320} alt="A320" id="a320" className="hero-img-plane" draggable="false"/>
        <img src={Cessna} alt="Cessna" id="cessna" className="hero-img-plane" draggable="false"/>
        </div>
        </div>
        </>
    )

}

export default DisplayHero