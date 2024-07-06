import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://www.nitp.ac.in/static/af157e2154c79e7db8ab212debc3c769/360e2/cc.png",
      subheading: "Centre for Computing and Information Services(CCIS)",
      text: "A state-of-the-art Computer Centre started its operation on 27th November 2011. It serves as the central computing facility for the students, research scholars and teachers of the institute. The Centre is well equipped with modern Computers (190 in number), air conditioned labs and stabilized uninterrupted power supply among the other facilities. The Centre has seven labs for all the students and one lab exclusively for PhD scholars of the institute. All labs are equipped with IP cameras to monitor the activities remotely. The Centre has 1 Gbps, 24x7 internet connectivity on optical fiber under National Knowledge Network, Govt. of India.The Centre also has a Virtual Class Room and Desktop VideoConferencing facility. It operates from 8:30 AM to 5:30 PM..",
    },
    {
      image: "https://i.postimg.cc/gJ7F1PGs/prabhat-kumar.png",
      subheading: "Head (CCIS)",
      text: ""
    },
    
    
  ];

  return (
    <div className="container mx-auto md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">

      <Head>
        <title>//</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
      
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-10 items-center">
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
      title: 'SAC | NIT Patna',
    }
  }
import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://www.nitp.ac.in/static/2bfbf8ac448cb7569a1ed353d8555c73/a41d1/library.jpg",
      subheading: "Library ",
      text: `The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK.The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software.The students can issue a sufficient no.of books for use throughout the semester and an additional no.of books for special reference.`,
    },
    {
      image: "",
      subheading: "E-RESOURCE SECTION",
      text: `It also maintains an E-Resource Section which subscribes and maintains a wide collection of highly acclaimed e-journals published by some big names like:
- AMERICAN SOCIETY OF CIVIL ENGINEERS(ASCE)
- AMERICAN SOCIETY OF MECHANICAL ENGINEERS(ASME)
- IEL
- IEEE
- NATURE
- ACM
- INDIAN STANDARD
- SPRINGER
...and many more. The total collection of e-journals in the E-Resource Section numbers to more than 2700 of diverse categories. This section is mainly used for vital information access and research.`,
    },
    {
      image: "",
      subheading: "Special Features of Central Library ",
      text: `Separate zones for every department.
Separate section for SC/ST under the name of B.R. Ambedkar section.
Separate section for e-journals called the E-Resource Section.
Calm milieu and spacious studying facility within the library.
Centrally air-conditioned.
Library is the member of INDEST and DELNET.`,
    },
  ];

  return (
    <div className="container mx-auto md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Library</title>
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
                  alt=""
                  className="w-3/4 md:w-2/5 rounded-md"
                />
              </>
            ) : (
              <>
                <img
                  src={place.image}
                  alt=""
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
    title: "Library | NIT Patna",
  };
}
