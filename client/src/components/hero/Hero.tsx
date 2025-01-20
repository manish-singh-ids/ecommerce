import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <main>
        <div className="py-48 flex justify-center items-center text-white bg-hero bg-cover bg-no-repeat bg-center min-h-fit w-full">
          <h1 className="font-kaushan text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black">
            Welcome to M Store
          </h1>
        </div>
      </main>
    </>
  );
};

export default Hero;
