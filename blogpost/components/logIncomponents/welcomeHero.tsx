import React from 'react';

const WelcomeMessage= () => {
  return (
    <div className="">
      <div className="flex flex-col  max-md:mt-10">
        <h1 className="text-6xl font-bold text-neutral-700 max-md:mr-2.5 max-md:text-4xl">
          Welcome <br /> Back
        </h1>
        <p className="mt-10 ml-2.5 text-2xl text-zinc-500 max-md:mt-10">
          Login to receive blogs and <br /> learn more about A2SV
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;