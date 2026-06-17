import { useState } from "react";
import { X } from "lucide-react";

interface AthleteDetail {
    id: string;
    title: string;
    goal: string;
    credentials: string;
    imageUrl: string;
    description: string;
    keyBenefits: string[];
    services: {
        name: string;
        description: string;
    }[];
    commonIssues: string[];
    testimonial?: {
        quote: string;
        author: string;
    };
}

const athleteDetails: Record<string, AthleteDetail> = {
    golf: {
        id: "golf",
        title: "GOLF",
        goal: "Increase Clubhead Speed & Protect Your L5-S1",
        credentials:
            "TPI-certified biomechanics meets CSCS power development for injury-free distance.",
        imageUrl:
            "https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Golf demands precision, power, and stability. Our specialized golf performance program combines thorough biomechanical analysis with targeted strength training to maximize your swing while protecting your spine.",
        keyBenefits: [
            "Increased clubhead speed (5-15+ mph improvements documented)",
            "Reduced back pain and L5-S1 stress",
            "Enhanced rotation and flexibility",
            "Improved consistency and accuracy",
            "Injury prevention for long-term play",
        ],
        services: [
            {
                name: "Golf Swing Biomechanics Assessment",
                description:
                    "Video analysis of your swing to identify movement dysfunctions limiting power or causing injury risk.",
            },
            {
                name: "TPI-Based Power Development",
                description:
                    "Targeted exercises improving hip mobility, thoracic rotation, and core stability specific to the golf swing.",
            },
            {
                name: "Spinal Protection Program",
                description:
                    "Strengthen and stabilize the L5-S1 joint to prevent injury and increase load tolerance.",
            },
            {
                name: "Sport-Specific Conditioning",
                description:
                    "Endurance, explosive power, and stability training designed for 18-hole performance.",
            },
        ],
        commonIssues: [
            "Low back pain (L5-S1 strain)",
            "Limited hip rotation",
            "Poor thoracic mobility",
            "Weak core stability",
            "Shoulder mobility restrictions",
        ],
        testimonial: {
            quote:
                "After working with the team, my swing speed increased by 12 mph and my back pain completely disappeared. I'm confident playing 36 holes without discomfort.",
            author: "Mike H., Scratch Golfer",
        },
    },
    run: {
        id: "run",
        title: "RUN",
        goal: "Eliminate Knee Pain & Build Bulletproof Miles",
        credentials:
            "DPT movement analysis plus strength programming to keep you running long-term.",
        imageUrl:
            "https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Running injuries are often preventable. Our comprehensive program uses motion capture and biomechanical analysis to identify the root causes of pain, then builds strength and movement patterns that keep you healthy and fast.",
        keyBenefits: [
            "Eliminate knee, hip, and ankle pain",
            "Improve running efficiency and speed",
            "Reduce injury recurrence by 80%+",
            "Build strength for longer distances",
            "Return to running faster after injury",
        ],
        services: [
            {
                name: "Gait Analysis & Movement Screening",
                description:
                    "Advanced analysis of your running mechanics to identify compensations causing pain.",
            },
            {
                name: "Injury-Specific Rehabilitation",
                description:
                    "Targeted protocol for runner's knee, IT band syndrome, plantar fasciitis, and more.",
            },
            {
                name: "Strength & Power Development",
                description:
                    "Build the glute, hip, and calf strength necessary for efficient, pain-free running.",
            },
            {
                name: "Return to Running Protocol",
                description:
                    "Graduated progression from recovery to full training load.",
            },
        ],
        commonIssues: [
            "Runner's knee (patellofemoral pain)",
            "IT band syndrome",
            "Plantar fasciitis",
            "Hip impingement",
            "Achilles tendinopathy",
        ],
        testimonial: {
            quote:
                "I was sidelined for 6 months with knee pain. In 8 weeks of targeted PT, I was back to running marathons pain-free.",
            author: "Sarah J., Marathon Runner",
        },
    },
    bike: {
        id: "bike",
        title: "BIKE",
        goal: "Optimize Position & Unlock More Power",
        credentials:
            "Professional bike fitting combined with PT expertise for comfort and performance.",
        imageUrl:
            "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Proper bike fit is foundational, but it's not enough without the mobility and strength to maintain that position. We combine professional fitting with targeted conditioning to maximize power output and eliminate discomfort.",
        keyBenefits: [
            "Professional bike fitting optimized to your body",
            "Improved power transfer and efficiency",
            "Eliminated neck, shoulder, and knee pain",
            "Enhanced aerobic capacity",
            "Customized training protocols",
        ],
        services: [
            {
                name: "Professional Bike Fitting",
                description:
                    "Precision fitting using biomechanical assessment to find your optimal position.",
            },
            {
                name: "Mobility & Flexibility Work",
                description:
                    "Improve hip, thoracic, and ankle mobility to maintain aero positions comfortably.",
            },
            {
                name: "Power Development Training",
                description:
                    "Build the glute and quad strength necessary for efficient pedaling and climbing.",
            },
            {
                name: "Overuse Injury Prevention",
                description:
                    "Address movement dysfunctions that cause knee, neck, and shoulder pain.",
            },
        ],
        commonIssues: [
            "Knee pain from poor fit",
            "Neck and shoulder tension",
            "Lower back discomfort",
            "Power loss from inefficient position",
            "Overuse injuries from repetitive stress",
        ],
    },
    strength: {
        id: "strength",
        title: "STRENGTH",
        goal: "Build Resilience & Prevent Future Injuries",
        credentials:
            "Evidence-based prehab and strength training designed by a certified strength coach.",
        imageUrl:
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Whether you're recovering from injury or looking to bulletproof your body, our strength programs build resilience and prevent future problems. We focus on functional movement patterns and real-world strength.",
        keyBenefits: [
            "Increased muscular strength and endurance",
            "Improved movement quality and stability",
            "Reduced injury risk by 50%+",
            "Enhanced athletic performance",
            "Long-term health and resilience",
        ],
        services: [
            {
                name: "Movement Screening & Assessment",
                description:
                    "Identify movement limitations and imbalances affecting your performance.",
            },
            {
                name: "Customized Strength Programs",
                description:
                    "Sport-specific and injury-prevention protocols tailored to your goals.",
            },
            {
                name: "Prehab & Injury Prevention",
                description:
                    "Proactive conditioning to prevent common injuries before they happen.",
            },
            {
                name: "Rehabilitation from Injury",
                description:
                    "Structured progression from injury to full return to sport.",
            },
        ],
        commonIssues: [
            "General weakness and instability",
            "Poor posture and movement patterns",
            "Muscle imbalances",
            "Limited range of motion",
            "Recovery from surgery or serious injury",
        ],
    },
};

interface AthleteDetailPageProps {
    athleteId: string;
    onClose: () => void;
}

export default function AthleteDetailPage({
    athleteId,
    onClose,
}: AthleteDetailPageProps) {
    const athlete = athleteDetails[athleteId];

    if (!athlete) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-40 overflow-y-auto">
            <div className="min-h-screen bg-white">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="fixed top-8 right-8 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Hero Section */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <img
                        src={athlete.imageUrl}
                        alt={athlete.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/30 w-fit mb-4">
                            <span className="text-white text-sm font-bold tracking-wider">
                                {athlete.title}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {athlete.goal}
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    {/* Overview */}
                    <div className="mb-16">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {athlete.description}
                        </p>
                        <p className="text-lg text-gray-600 mt-4 font-semibold">
                            {athlete.credentials}
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Key Benefits
                        </h2>
                        <ul className="space-y-3">
                            {athlete.keyBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-[#AAF0D1] font-bold mr-3 text-lg">
                                        ✓
                                    </span>
                                    <span className="text-gray-700 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Our Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {athlete.services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
                                >
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Common Issues */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Common Issues We Address
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {athlete.commonIssues.map((issue, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center p-4 bg-[#AAF0D1]/10 rounded-lg"
                                >
                                    <span className="text-[#AAF0D1] font-bold mr-3">
                                        •
                                    </span>
                                    <span className="text-gray-700">{issue}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    {athlete.testimonial && (
                        <div className="mb-16 bg-gradient-to-r from-[#AAF0D1]/20 to-blue-50 p-8 rounded-lg border-l-4 border-[#AAF0D1]">
                            <p className="text-lg italic text-gray-700 mb-4">
                                "{athlete.testimonial.quote}"
                            </p>
                            <p className="font-semibold text-gray-900">
                                — {athlete.testimonial.author}
                            </p>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="bg-gray-900 text-white p-8 md:p-12 rounded-lg text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Optimize Your Performance?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Schedule a consultation with our team to discuss how we can help you reach your goals.
                        </p>
                        <button className="bg-[#AAF0D1] hover:bg-[#90E0B8] text-gray-900 font-bold py-3 px-8 rounded-lg transition">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
