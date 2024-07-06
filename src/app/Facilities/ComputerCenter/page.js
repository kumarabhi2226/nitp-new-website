import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://www.nitp.ac.in/static/af157e2154c79e7db8ab212debc3c769/360e2/cc.png",
      subheading: "Centre for Computing and Information Services(CCIS)",
      text: "A state-of-the-art Computer Centre started its operation on 27th November 2011. It serves as the central computing facility for the students, research scholars and teachers of the institute. The Centre is well equipped with modern Computers (190 in number), air conditioned labs and stabilized uninterrupted power supply among the other facilities. The Centre has seven labs for all the students and one lab exclusively for PhD scholars of the institute. All labs are equipped with IP cameras to monitor the activities remotely. The Centre has 1 Gbps, 24x7 internet connectivity on optical fiber under National Knowledge Network, Govt. of India.The Centre also has a Virtual Class Room and Desktop VideoConferencing facility. It operates from 8:30 AM to 5:30 PM.",
    },
    {
      image:
        "https://www.nitp.ac.in/static/93dd1c9418abd80c357b3f6142c9d419/8b23a/prabhat-kumar.png",
      subheading: "Head (CCIS)",
      text: `Prof. PRABHAT KUMAR
        प्रो. प्रभात कुमार
        Professor (Computer Science and Engineering Dept.)
        & प्राध्यापक (कंप्यूटर विज्ञान और इंजीनियरिंग विभाग)
        Head, Centre for Computing and Information Services (CCIS)
        विभागाध्यक्ष, कम्प्यूटिंग और सूचना सेवा केंद्र (सीसीआईएस)`,
    },
  ];

  return (
    <div className="container mx-auto md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Computer Centre</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  gap-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:pl-4 ">
                  <h2 className="text-3xl font-bold mb-2 text-red-800 items-start">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line ">
                    {place.text}{" "}
                  </p>
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
                  <h2 className="text-3xl font-bold mb-2 text-red-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {place.text}
                  </p>
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
    title: "Computer Center | NIT Patna",
  };
}
