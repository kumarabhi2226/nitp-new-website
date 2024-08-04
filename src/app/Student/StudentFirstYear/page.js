import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/SxY7cVp2/homebg-21.jpg",
      subheading: "Student Induction Programme 2022.",
      text: "This page has been created specially for First Year Students, so that they can get all important information / announcement (not exhaustive though) related to them on a single page.",
    },
    
    
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-6 bg-white bg-opacity-50">

      <Head>
        <title>1st Year Students</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
      Welcome! 1st Year
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-4 items-center">
            {index % 2 === 0 ? (
              <>
              <div className="md:pl-4 ">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800 items-start" >{place.subheading}</h2>
                  <p className="text-gray-600 ">{place.text}</p>
                </div>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-3/4 md:w-2/5 rounded-md"
                />
                
              </>
            ) : (
              <>
                
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-full md:w-1/2 rounded-md"
                />
                <div className="md:pr-4">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800">{place.subheading}</h2>
                  <p className="text-gray-600">{place.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
    return {
      title: '1st Year Student | NIT Patna',
    }
  }