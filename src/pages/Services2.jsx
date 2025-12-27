import React from 'react';
import { bg } from '../utils/config';
import NavBar from '../components/NavBar';

const ServiceCard = ({ title, description, price, whatsappUrl }) => {
    return (
        <div 
        className="flex flex-col p-8 rounded-2xl shadow-sm"
        style={{ backgroundColor: '#EFD09E' }}
        >
            {/* Content Container */}
            <div className="w-full min-w-0 md:min-w-[500px] p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl">
                    {description}
                </p>
                <p className="text-gray-700 font-bold leading-relaxed text-sm md:text-base max-w-3xl">
                    {price}
                </p>
                {/* whatsapp link */}
                <a href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.44h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    View in Catalog
                </a>
            </div>

        </div>
    );
};

const Services2 = () => {
    
  const services = [
    {
      title: "Dance Choreography",
      description: "MR. Jayaruwan Prabodya Premachandra",
      price: "LKR. 10,000 per day (one item)",
      whatsappUrl:"https://wa.me/p/24559491377059810/94713161550"
    },
    {
      title: "Event Package 01 | Budget Pack",
      description: "06 Dancers | O3 Dance Performance",
      price: "LKR. 90,000",
      whatsappUrl:"https://wa.me/p/25575205398813286/94713161550"
    },
    {
      title: "Event Package 02 | Kikstart Pack",
      description: "01 Solo performance | 01 Group performance | 05 Dancers",
      price: "LKR. 70,000",
      whatsappUrl:"https://wa.me/p/25198062516555720/94713161550"
    },
    {
      title: "Event Package 03 | Standard Pack",
      description: "01 Solo performance | 02 Group performance | 07 Dancers",
      price: "LKR. 110,000",
      whatsappUrl:"https://wa.me/p/25888733480751456/94713161550"
    },
    {
      title: "Event Package 04 | Premium Pack",
      description: "01 Solo performance | 02 Group performance | 01 Special dance performance",
      price: "LKR. 125,000",
      whatsappUrl:"https://wa.me/p/26010711598524924/94713161550"
    },
    {
      title: "Welcome Dance And Oil Lamp",
      description: "04 Wes dancers | 02 Drummers | Jayamangala gatha (03 girls)",
      price: "LKR. 40,000",
      whatsappUrl:"https://wa.me/p/33525637683701139/94713161550"
    }
  ];

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='news' />
      </div>
      <main
        className="min-h-screen text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative" // Added relative for pseudo-element (if using) or if needed for child positioning
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >
        
        <div className="max-w-3xl mx-auto">
         {/* Header Section */}
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#EFD09E' }}>
            Our Services
            </h2>
            

            {/* Vertical List Section */}
            <div className="flex flex-col gap-5">
            {services.map((service, index) => (
                <ServiceCard 
                key={index} 
                title={service.title}
                description={service.description}
                price={service.price}
                whatsappUrl={service.whatsappUrl}
                />
            ))}
            </div>
        </div>
        
        </main>
    </>
  );
};

export default Services2;