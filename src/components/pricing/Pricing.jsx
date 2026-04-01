import React, { useState } from 'react';

const Pricing = () => {
  // Setting "Pro" as the default selected plan as requested
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const pricingData = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '$0',
      period: '/Month',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      buttonText: 'Get Started Free',
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '$29',
      period: '/Month',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
      buttonText: 'Start Pro Trial',
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '$99',
      period: '/Month',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="mt-[120px] max-w-[1200px] mx-auto px-4 mb-[120px] font-sans">
      <div className="text-center mb-10">
        <h2 className="text-[48px] font-extrabold leading-tight mb-4">Simple, Transparent Pricing</h2>
        <p className="text-[#627382] text-[16px] font-normal">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {pricingData.map((plan) => {
          const isSelected = selectedPlan === plan.name;
          
          return (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`card relative p-10 rounded-[32px] border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between ${
                isSelected 
                  ? 'bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-white border-transparent shadow-2xl scale-105 z-10' 
                  : 'bg-white text-[#1D2939] border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* "Most Popular" Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFF6E3] text-[#F9BF2E] px-4 py-1 rounded-full text-sm font-bold shadow-sm border border-[#F9BF2E]/20">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-8 ${isSelected ? 'text-white/80' : 'text-[#627382]'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline mb-8">
                  <span className="text-[48px] font-bold">{plan.price}</span>
                  <span className={`text-xl ml-1 ${isSelected ? 'text-white/70' : 'text-[#627382]'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isSelected ? "text-white" : "text-green-500"}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corrected Button Logic */}
              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-white' // White background for the Pro button
                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' // Gradient background for others
                }`}
              >
                <span className={isSelected ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent" : ""}>
                  {plan.buttonText}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;