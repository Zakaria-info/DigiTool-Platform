import React from 'react';

const GetStartedSection = () => {
  const steps = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/spp6c6sq/user.png',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/0jqzZrdV/package.png', 
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/vCNQHgnF/rocket.png', 
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
    },
  ];

  return (
    <div className="mt-[120px] mb-30 max-w-[1200px] mx-auto p-4 md:p-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Get Started In 3 Steps
      </h2>
      <p className="text-[#627382] text-regular text-center text-lg mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-between shadow-lg h-[380px]"
          >
            <div className="absolute top-4 right-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
              0{step.id}
            </div>
            <img
              src={step.image}
              alt={step.title}
              className="w-[100px] h-[100px] mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-[#627382] text-lg mb-8 text-center px-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedSection;