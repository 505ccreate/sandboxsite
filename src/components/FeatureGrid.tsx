import React from 'react';

const features = [
    {
        title: "Neural Architect",
        description: "Design and visualize complex AI architectures with real-time feedback.",
        icon: (
            <svg className="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Quantum Compiler",
        description: "Optimize your models using groundbreaking quantum computing algorithms.",
        icon: (
            <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Synapse Sync",
        description: "Collaborate across multiple AI agents in a unified, high-speed environment.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
];

const FeatureGrid = () => {
    return (
        <section className="py-24 px-4 bg-nexus-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Future AI Tools</h2>
                    <p className="text-white/60 max-w-xl mx-auto">Experiment with the next generation of artificial intelligence interfaces.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group cursor-pointer"
                        >
                            <div className="mb-6 p-3 w-fit rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>

                            <div className="mt-8 flex items-center text-accent-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                EXPLORE MODULE
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
