"use client"
import { useEffect, useState } from 'react';
import { LinkedInProfile } from 'react-linkedin-sdk'; // Import LinkedInProfile from react-linkedin-sdk
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import './Gallery.css';

export function Gallery() {
  const [linkedInPosts, setLinkedInPosts] = useState([]);

  useEffect(() => {
    
    const mockPosts = [
      {
        author: {
          name: 'NIT Patna',
          profileImageUrl: 'https://www.nitp.ac.in/static/logo512-b2c623bcaf7f23d5455ed1609e8bdb01.png', // Replace with actual image URL
        },
        text: "5mo • We're #hiring a new Walk-in-Interview for Temporary Faculty at NIT Patna in Patna, Bihar. Apply ... see more",
        likes: 84,
        reposts: 1,
      },
      {
        author: {
          name: 'NIT Patna',
          profileImageUrl: 'https://www.nitp.ac.in/static/logo512-b2c623bcaf7f23d5455ed1609e8bdb01.png', // Replace with actual image URL
        },
        text: "5mo • Another post from Ashish Kumar on LinkedIn...",
        likes: 56,
        reposts: 3,
      },
      // Add more posts as needed
    ];

    setLinkedInPosts(mockPosts); // Set the fetched posts to state
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-20 h-full gdiv">
      <div className="w-full md:w-2/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 social-media">
        <h2 className="text-xl font-bold mb-4 text-center">View our Social Media</h2>
        <div className="space-y-4 overflow-y-auto max-h-[400px]">
          {linkedInPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-md">
              <div className="flex items-start space-x-2">
                <Avatar>
                  <AvatarImage src={post.author.profileImageUrl} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-bold">{post.author.name}</p>
                  <p className="text-sm">{post.text}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <FacebookIcon className="h-5 w-5" />
                    <ReplyIcon className="h-5 w-5" />
                    <RepeatIcon className="h-5 w-5" />
                    <SendIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>{post.likes}</span>
                <span>{post.reposts} reposts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 image-gallery">
        <h2 className="text-xl font-bold mb-4 text-center">
          <CameraIcon className="inline-block h-6 w-6" /> Glimpse of NIT Patna{' '}
          <CameraIcon className="inline-block h-6 w-6" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <img
              key={index}
              src="/placeholder.svg"
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-md block object-cover"
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <Button variant="outline" className="bg-white" href="/gallery">
            Explore more beauty of NIT Patna
          </Button>
        </div>
      </div>
   
    </div>
  );
}

export default Gallery;

function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function RepeatIcon(props) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <
    svg
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
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);
}
