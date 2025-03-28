'use client';

import Image from 'next/image';
import { services } from '@/constants';
import Link from 'next/link';

const Services = () => {
  return (
<section className="bg-[#fdfcfa]">        
  <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md" id="services-section">
    
        <div className="text-center">
          <h3 className="text-sky-700 text-2xl lg:text-4xl font-semibold mb-3 tracking-widest uppercase py-5">Nos Services</h3>
          <h2 className="text-lg font-normal text-black dark:text-white">
            Pourquoi choisir la Chambre Arbitrale du Sport ?
          </h2>
        </div>
        <div className="my-16 px-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? 'row-span-2' : '' 
                } group transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-3`}
              >
                <Image
                  src={item.src}
                  alt={item.titre}
                  width={600}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col items-start gap-8 justify-end">
                  <p className="text-white text-2xl font-semibold opacity-0 transform translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.titre}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-white text-lg font-medium opacity-0 transform translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {item.contenu}
                    </p>
                    <Link
                      href="#"
                      className="text-white text-sm rounded-full bg-primary border border-primary py-1 px-2 hover:bg-primary/40 hover:backdrop-blur-sm transition-all duration-300 transform group-hover:scale-110"
                    >
                      Consulter
                    </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
