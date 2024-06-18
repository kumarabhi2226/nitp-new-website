import Image from "next/image";
import Slider from "./components/Slider";

import Popbuttons from "./components/Popbuttons";
import Details from "./components/Details";
import Aboutus from "./components/Aboutus";
import Placement from "./components/Placement";


export default function Home() {
  return (
    <>
    <Slider/>
    <Popbuttons/>
    <Details/>
    <Aboutus/>
    <Placement/>
    </>
    
  );
}
