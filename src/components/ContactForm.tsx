import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sport: '',
    goal: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', sport: '', goal: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Ready to Optimize?
          </h2>
          <p className="text-xl text-gray-300">
            Let's talk about your goals and how we can help you perform at your peak.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#AAF0D1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-300">We'll be in touch shortly to discuss your performance goals.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AAF0D1] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AAF0D1] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sport" className="block text-sm font-medium text-white mb-2">
                  Primary Sport
                </label>
                <select
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#AAF0D1] focus:border-transparent transition-all"
                >
                  <option value="" className="bg-gray-900">Select your primary sport</option>
                  <option value="golf" className="bg-gray-900">Golf</option>
                  <option value="run" className="bg-gray-900">Running</option>
                  <option value="bike" className="bg-gray-900">Cycling</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-white mb-2">
                  Primary Goal / Current Limitation
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AAF0D1] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your goals or what's holding you back..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#AAF0D1] hover:bg-[#99DFC0] text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send to the Team
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
