import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Contact = () => {
  const { selectedPick, servicesData, submitContact } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMsg, setSubmissionMsg] = useState('');

  const defaultProjectVal = servicesData[selectedPick]?.chip_label || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: defaultProjectVal,
    timeline: '',
    notes: ''
  });

  const steps = [
    { key: 'name', question: 'What is your name?', placeholder: 'Enter your name', type: 'text' },
    { key: 'email', question: 'Where can we reach you?', placeholder: 'you@company.com', type: 'email' },
    { key: 'company', question: 'Which company are you with?', placeholder: 'Company name', type: 'text' },
    { key: 'project', question: 'What do you want to build?', placeholder: 'A product, a platform, a rebuild', type: 'text' },
    { key: 'timeline', question: 'When would you like to start?', placeholder: 'e.g. next month', type: 'text' },
    { key: 'notes', question: 'Anything else we should know?', placeholder: 'Optional', type: 'text' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [steps[currentStep].key]: e.target.value });
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const res = await submitContact(formData);
      setSubmissionMsg(res.message);
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
  };

  const activeStepObj = steps[currentStep];

  return (
    <div className="contact-page pgc pt-[clamp(92px,13vh,128px)] pb-[clamp(24px,4vh,48px)] min-h-[100svh]">
      <div className="w max-w-[1200px] margin-auto px-[var(--pad)]">
        <p className="ey mb-2">01 / Contact</p>
        <h1 className="text-[clamp(42px,min(6vw,10vh),84px)] font-[700] leading-[1.02] text-[#f2f0ea] m-0 mb-4">
          Let’s make it real.
        </h1>

        <div className="cc grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-[clamp(36px,6vw,96px)] items-stretch mt-[clamp(20px,3.4vh,40px)]">
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-8 p-0">
            <h2 className="text-[clamp(26px,min(2.8vw,4.8vh),42px)] font-[700] font-[var(--d)] text-[#f2f0ea] leading-[1.12] tracking-[-0.025em] max-w-[20ch] m-0">
              A good system starts with a good conversation.
            </h2>
            <div className="l2 pt-6">
              <span className="ey flex mb-3 tracking-[0.08em] uppercase text-[#9a968a]">Prefer email?</span>
              <a
                href="mailto:hello@decacorpus.com"
                className="font-[600] text-[clamp(24px,min(2.5vw,4.2vh),36px)] font-[var(--d)] text-[#f2f0ea] text-decoration-none transition-colors duration-250 hover:text-white"
              >
                hello@decacorpus.com
              </a>
            </div>
          </div>

          {/* Right Column: Crisp White Form Card */}
          <div className="fp bg-[#ffffff] text-[#0a0a0a] border-0 rounded-[20px] p-[clamp(28px,3.8vw,48px)] min-h-[clamp(360px,48vh,460px)] flex flex-col relative overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            {!isSubmitted ? (
              <>
                <div className="hr text-[#736f64] text-[12px] tracking-[0.08em] uppercase font-[500]">
                  0{currentStep + 1} / 0{steps.length}
                </div>

                {/* Step Progress Segment Bar */}
                <div className="seg flex gap-2 mt-3 mb-6">
                  {steps.map((_, idx) => (
                    <i
                      key={idx}
                      className={`flex-1 h-[3px] rounded-[3px] transition-colors duration-300 ${
                        idx <= currentStep ? 'bg-[#0a0a0a]' : 'bg-[#e4e2dc]'
                      }`}
                    />
                  ))}
                </div>

                {/* Active Question */}
                <div id="q" className="my-auto">
                  <h3 className="font-[700] text-[clamp(26px,min(2.8vw,4.8vh),38px)] leading-[1.1] text-[#0a0a0a] mb-6 font-[var(--d)]">
                    {activeStepObj.question}
                  </h3>
                  <input
                    type={activeStepObj.type}
                    value={formData[activeStepObj.key] || ''}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={activeStepObj.placeholder}
                    autoFocus
                    className="w-full bg-transparent border-0 border-b-[1.5px] border-[#0a0a0a] rounded-none text-[#0a0a0a] font-[500] text-[clamp(19px,1.8vw,24px)] py-3 px-0 outline-none placeholder:text-[#9a968a] focus:border-b-[2.5px] transition-all"
                  />
                </div>

                {/* Nav Buttons */}
                <div className="nv flex justify-between items-center pt-6 mt-auto">
                  <button
                    disabled={currentStep === 0}
                    onClick={handlePrev}
                    className="pvb bg-none border-0 text-[#736f64] font-[500] text-[14px] cursor-pointer py-2 px-0 disabled:opacity-30 disabled:cursor-default hover:text-[#0a0a0a] hover:-translate-x-1 transition-all"
                  >
                    ← Previous
                  </button>
                  <button onClick={handleNext} className="b !bg-[#0a0a0a] !text-[#ffffff] px-7 py-3">
                    {currentStep === steps.length - 1 ? 'Send →' : 'Next →'}
                  </button>
                </div>
              </>
            ) : (
              <div className="my-auto text-center">
                <h3 className="text-[34px] font-[700] text-[#0a0a0a] mb-3 font-[var(--d)]">
                  {submissionMsg}
                </h3>
                <p className="text-[#4b4a44] text-[16px]">
                  Thank you for reaching out to DecaCorpus.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
