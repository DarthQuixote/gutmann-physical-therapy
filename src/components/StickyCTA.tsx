import { useState } from 'react';
import { Calendar, X } from 'lucide-react';

export default function StickyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-[#AAF0D1] hover:bg-[#99DFC0] text-gray-900 font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden md:inline">Schedule Your Performance Audit</span>
        <span className="md:hidden">Book Now</span>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Physical Therapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Performance Audit
                </h3>
                <p className="text-gray-600">
                  Let's discuss your goals and create a personalized plan to optimize your performance and prevent injuries.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">What to Expect:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#AAF0D1] mt-1">•</span>
                    <span>Comprehensive movement assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#AAF0D1] mt-1">•</span>
                    <span>Sport-specific performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#AAF0D1] mt-1">•</span>
                    <span>Personalized training and rehab roadmap</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#AAF0D1]/10 rounded-xl border border-[#AAF0D1]/30">
                <p className="text-center text-gray-700">
                  <strong>Ready to book?</strong> Contact via the form below or call{' '}
                  <a href="tel:206-555-0100" className="text-gray-900 font-bold hover:underline">
                    (206) ###-####
                  </a>
                </p>
              </div>

              <button
                onClick={() => {
                  setIsModalOpen(false);
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#AAF0D1] hover:bg-[#99DFC0] text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Go to Contact Form
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
