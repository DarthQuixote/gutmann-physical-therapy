import { Award, Bike, Mountain } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. climbing in the Pacific Northwest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/80 p-6 rounded-xl border border-gray-200 shadow-xl max-w-xs">
              <p className="text-sm font-semibold text-gray-900">Completed Full Ironman</p>
              <p className="text-xs text-gray-600 mt-1">Half-Ironman Complete | Mt. Rainier Hiker</p>
            </div>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              The Local Expert
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="backdrop-blur-sm bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-2 text-gray-900 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-[#AAF0D1]" />
                  The Roots
                </h3>
                <p className="leading-relaxed">
                  Born and raised in Washington State, deeply connected to the Pacific Northwest outdoor lifestyle.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-2 text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#AAF0D1]" />
                  The Academics
                </h3>
                <p className="leading-relaxed">
                  <strong>B.S. in Physiology</strong> from University of Arizona
                  <br />
                  <strong>Doctor of Physical Therapy</strong> from High Point University, NC
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  The Clinical Edge
                </h3>
                <p className="leading-relaxed mb-3">
                  <strong>Orthopedic Residency</strong> at University of Washington
                  <br />
                  <strong>Board-Certified OCS Candidate</strong>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="backdrop-blur-md bg-[#AAF0D1]/20 px-3 py-1.5 rounded-full border border-[#AAF0D1]/40 flex items-center gap-2">
                    <Bike className="w-4 h-4 text-[#AAF0D1]" />
                    <span className="text-sm font-medium text-gray-900">Bike Fitting Certified</span>
                  </div>
                  <div className="backdrop-blur-md bg-[#AAF0D1]/20 px-3 py-1.5 rounded-full border border-[#AAF0D1]/40 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#AAF0D1]" />
                    <span className="text-sm font-medium text-gray-900">TPI Level 1</span>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  The Athlete (Walking the Walk)
                </h3>
                <p className="leading-relaxed">
                  Recently finished a Full Ironman. Avid golfer, hiker, and outdoor enthusiast who understands the demands of performance from personal experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
