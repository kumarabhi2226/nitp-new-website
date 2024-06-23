"use client";
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import './Gallery.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from 'next/link';

const images = [
  'https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg',
  'https://cdn.pixabay.com/photo/2024/03/24/17/10/background-8653526_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/08/08/10/50/hot-wheels-8177051_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/06/13/25/black-tailed-skimmer-8812720_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/05/18/17/59/leaf-1401140_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/03/24/17/10/background-8653526_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/08/08/10/50/hot-wheels-8177051_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/06/06/13/25/black-tailed-skimmer-8812720_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/05/18/17/59/leaf-1401140_1280.jpg',
];

export function Gallery() {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (index) => {
    setPopupImage(images[index]);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImage(null);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setPopupImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setPopupImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    script.setAttribute('charset', 'utf-8');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-20 h-full gdiv">
      <div className="w-full md:w-2/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 social-media">
        <h2 className="text-xl font-bold mb-4 text-center">View our Social Media</h2>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw">Tweets by NIT Patna</a>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/EduMinOfIndia?ref_src=twsrc%5Etfw">Tweets by Education Ministry Of India</a>
      </div>
      <div className="imagediv1">
        <h2 className="text-xl font-bold mb-4 text-center">Glimpse of NIT Patna</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 md:p-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group aspect-[4/3]">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height="auto"
                className="object-cover w-full h-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openPopup(index)} className="text-white font-medium">
                  View Image
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-center mt-6">
            <Link
              href="/Gallery"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <GalleryThumbnailsIcon className="w-5 h-5" />
              View All
            </Link>
          </div>
        </div>
      </div>
      {popupImage && (
        <>
          <div className="overlay-background" onClick={closePopup}></div>
          <div className="popup">
            <button className="close-button" onClick={closePopup}>✖</button>
            <img src={popupImage} alt="Popup Image" />
            <div className="navigation-buttons">
              <button className="prev-button" onClick={showPreviousImage}>←</button>
              <button className="next-button" onClick={showNextImage}>→</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;

function GalleryThumbnailsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </svg>
  )
}
