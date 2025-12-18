import { Link } from 'react-router';

export default function FinalCTA() {
    return (
        <section className="relative z-20 bg-background py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* White card matching Label UI design system */}
                <div
                    className="relative rounded-[10px] p-12 sm:p-16 text-center overflow-hidden bg-card shadow-premium-white"
                >
                    {/* Subtle noise texture overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Start Exploring
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            Login, Signup, Dashboard Templates - One Click Away
                        </p>

                        <Link
                            to="/docs"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-[10px] shadow-premium-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold"
                        >
                            Browse Templates
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
