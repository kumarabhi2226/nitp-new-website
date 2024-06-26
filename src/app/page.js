import Image from "next/image";
import Slider from "./components/home/Slider";
import Gallery from "./components/home/Gallery"
import Popbuttons from "./components/home/Popbuttons";
import Details from "./components/home/Details";
import Aboutus from "./components/home/Aboutus";
import Placement from "./components/home/Placement";
import Movingbar from "./components/home/Movingbar";


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
