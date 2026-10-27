import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    companyName: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    email: ''
  });

  const roles = [
    'CTO',
    'TECH CEO',
    'CMO',
    'TEAM LEAD',
    'VP OF ENGINEERING',
    'OTHER ROLE'
  ];

  const projectTypes = [
    'SAAS',
    'STARTUP',
    'WEBSITE',
    'MOBILE',
    'APPLICATION',
    'UNIQUE TYPE'
  ];

  const budgetRanges = [
    '< 50K',
    '$ 50 - 100K',
    '$ 100K - 250K',
    '> $ 250 K'
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const isEmailValid = validateEmail(formData.email);

  

  if (step === 1) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-stone-900">
        <div className="bg-stone-800 flex flex-col justify-evenly text-white rounded-lg shadow-lg border border-white-100 w-full h-[80vh] max-w-2xl">
          <h1 className="text-5xl font-bold  mt-10 mb-2  px-10">Hello!</h1>

          <div className="space-y-8 px-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-4xl font-bold mb-2">My Name is</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 px-4 py-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-white text-xl "
                  placeholder="Fill your name  "
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-6xl">I'm a</p>
              <div className="flex flex-wrap gap-4 ">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setFormData({ ...formData, role })}
                    className={`px-5 py-2  mt-6 rounded-full border focus:border-dotted transition-all duration-300 ${formData.role === role
                        ? 'bg-white text-gray-800 border-dotted border-white'
                        : 'border-dotted-gray-500 text-gray-500 text-xl'
                      } hover:bg-white hover:text-gray-800`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {formData.name && formData.role && (
          <div className="flex justify-end  mt-6 pr-3">
          <button
            onClick={handleNext}
            className="bg-white text-red-500 w-20 h-15 lg:w-40 lg:h-20 flex items-center justify-center rounded-full font-bold text-4xl lg:text-5xl hover:bg-gray-200 transition-colors"
          >
            <ArrowRight className='h-[3rem] w-[2rem]'/>
          </button>
        </div>
        
          )}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-stone-900">
        <div className="bg-stone-800 text-white p-10 rounded-lg shadow-lg border border-white-100 w-full h-[80vh] max-w-2xl">
         <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-5xl mt-16">I'm from</p>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="flex-1 px-4 py-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-white text-xl "
                placeholder="company name"
              />
            </div>

            <div className="space-y-4">
              <p className="text-4xl mb-8">I want you for a</p>
              <div className="flex flex-wrap gap-6">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-5 py-2 rounded-full border transition-all duration-300 ${formData.projectType === type
                      ? 'bg-white text-gray-800 border-dotted border-white'
                      : 'border-dotted-gray-500 text-gray-500 text-xl'
                    } hover:bg-white hover:text-gray-800`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <p className="text-5xl text-right mb-11">Project</p>
              </div>
          </div>

          {formData.companyName && formData.projectType && (
             <div className=" flex justify-end   mt-4  ">
          <button
            onClick={handleNext}
            className="bg-white  text-red-500 w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center rounded-l-[50px] rounded-r-[20px] font-bold text-4xl lg:text-7xl hover:bg-gray-200 transition-colors"
          >
            →
          </button>
         </div>
         
          )}
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-stone-900">
        <div className="bg-stone-800 text-white p-10 rounded-lg shadow-lg border border-gray-700 w-full max-w-2xl">
          <h2 className="text-5xl font-bold mb-8">Describe your project</h2>

          <div className="bg-stone-900 p-6 rounded-lg mb-8">
            <p className="text-gray-300 mb-2">Protip — touch on these things:</p>
            <ul className="space-y-2 text-gray-400">
              <li>— Your idea</li>
              <li>— Your timeline</li>
              <li>— Your location</li>
              <li>— Where you heard about us</li>
            </ul>
          </div>

          <textarea
            value={formData.projectDescription}
            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            className="w-full h-32 bg-transparent border-2 border-gray-700 rounded-lg p-4 text-white mb-8"
            placeholder="Describe your project..."
          />

          <h3 className="text-4xl mb-6">My budget is</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {budgetRanges.map((budget) => (
              <button
                key={budget}
                onClick={() => setFormData({ ...formData, budget })}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${formData.budget === budget
                    ? 'bg-white text-gray-800'
                    : 'border-gray-500 text-gray-500'
                  } hover:bg-white hover:text-gray-800`}
              >
                {budget}
              </button>
            ))}
          </div>

          {formData.projectDescription && formData.budget && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-900">
        <div className="bg-stone-800 text-white p-10 rounded-lg shadow-lg border border-white-100 w-full h-[80vh] max-w-2xl">
          <h2 className="text-5xl font-bold mt-20">My e-mail is</h2>

        <div className="mb-8">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-white text-xl"
            placeholder="Enter your email"
          />
          {formData.email && !isEmailValid && (
            <p className="text-red-500 mt-2">Email is invalid</p>
          )}
        </div>

        <button
          onClick={() => alert(JSON.stringify(formData, null, 2))}
          disabled={!isEmailValid}
          className={`w-full py-4 rounded-lg font-bold mb-4 ${isEmailValid
              ? 'bg-white text-gray-800 hover:bg-gray-200'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
        >
          SUBMIT
        </button>

        <button
          onClick={handleBack}
          className="w-full text-center underline hover:text-gray-400"
        >
          I want to change my answers
        </button>
      </div>
    </div>
  );
};

export default ContactPage;