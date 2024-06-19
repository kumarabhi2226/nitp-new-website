import Image from "next/image";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery"
import Popbuttons from "./components/Popbuttons";
import Details from "./components/Details";
import Aboutus from "./components/Aboutus";
import Placement from "./components/Placement";
import Movingbar from "./components/Movingbar";


export default function Home() {
  return (
    <>
    <Slider/>
    <Movingbar/>
    <Popbuttons/>
    <Details/>
    <Aboutus/>
    <Placement/>
    <Gallery/>
    
    </>
    
  );
}
