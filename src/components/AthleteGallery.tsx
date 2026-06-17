import { useState } from "react";
import AthleteDetailPage from "./AthleteDetailPage";

interface AthleteCard {
    id: string;
    title: string;
    goal: string;
    credentials: string;
    imageUrl: string;
}

const athletes: AthleteCard[] = [
    {
        id: "golf",
        title: "GOLF",
        goal: "Increase Clubhead Speed & Protect Your L5-S1",
        credentials:
            "TPI-certified biomechanics meets CSCS power development for injury-free distance.",
        imageUrl:
            "https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "run",
        title: "RUN",
        goal: "Eliminate Knee Pain & Build Bulletproof Miles",
        credentials:
            "DPT movement analysis plus strength programming to keep you running long-term.",
        imageUrl:
            "https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "bike",
        title: "BIKE",
        goal: "Optimize Position & Unlock More Power",
        credentials:
            "Professional bike fitting combined with PT expertise for comfort and performance.",
        imageUrl:
            "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "strength",
        title: "STRENGTH",
        goal: "Build Resilience & Prevent Future Injuries",
        credentials:
            "Evidence-based prehab and strength training designed by a certified strength coach.",
        imageUrl:
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export default function AthleteGallery() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedAthlete, setSelectedAthlete] = useState<string | null>(null);

    return (
        <>
            <section className="py-24 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                        The Performance Edge
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl">
                        Where clinical expertise meets athletic performance. Four
                        specialized pathways to keep you moving at your peak.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {athletes.map((athlete, index) => (
                            <div
                                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                                    index % 2 === 0 ? "md:mt-0" : "md:mt-16"
                                }`}
                                onClick={() => setSelectedAthlete(athlete.id)}
                            >
                                <div
                                    key={athlete.id}
                                    className={`relative overflow-hidden rounded-2xl cursor-pointer group`}
                                    onMouseEnter={() => setHoveredId(athlete.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="aspect-[4/5] relative">
                                        <img
                                            src={athlete.imageUrl}
                                            alt={athlete.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div
                                            className={`absolute inset-0 bg-[#AAF0D1] mix-blend-multiply transition-opacity duration-500 ${
                                                hoveredId === athlete.id
                                                    ? "opacity-60"
                                                    : "opacity-0"
                                            }`}
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="backdrop-blur-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/30 w-fit mb-4">
                                                <span className="text-white text-sm font-bold tracking-wider">
                                                    {athlete.title}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                                {athlete.goal}
                                            </h3>

                                            <p className="text-white/90 text-base leading-relaxed">
                                                {athlete.credentials}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedAthlete && (
                <AthleteDetailPage
                    athleteId={selectedAthlete}
                    onClose={() => setSelectedAthlete(null)}
                />
            )}
        </>
    );
}
