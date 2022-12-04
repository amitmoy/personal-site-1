import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./Main.css";
import About from "../About/About";
import SlideShow from "../SlideShow/SlideShow";

export default function Main(){

    return(
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <SlideShow/>

        </div>
    )
}