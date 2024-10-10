import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC = () => {
    const [step, setStep] = useState(0);
    const steps = [
        'Searching 400+ flights',
        'Attaching company rules',
        'Serving best results'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % steps.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24">
                    <svg className="absolute animate-fly" width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {steps.map((text, index) => (
                <div key={index} className="flex items-center mb-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${index <= step ? 'bg-teal-500' : 'bg-gray-200'}`}>
                        {index < step ? (
                            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                        ) : index === step ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : null}
                    </div>
                    <span className={`text-lg ${index <= step ? 'text-gray-800 font-semibold' : 'text-gray-400'}`}>
                        {text}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default LoadingAnimation;