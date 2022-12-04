import "./Header.css"
import Blob from "../Blob/Blob";
import IconsBar from "../IconsBar/IconsBar";

export default function Header(){

    
    return(

        <div className="header-div section">

            <div className="header-titlediv">
                <h1 className="header-title">Bubble Dev</h1>
                <h2 className="header-subtitle">.אתרים. אפליקציות. פתרונות תוכנה</h2>
                <IconsBar/>
            </div>

            <div className="header-icons">

            </div>
       
            <div className="blob-1">
                <Blob/>
            </div>

            

        </div>
    );
}