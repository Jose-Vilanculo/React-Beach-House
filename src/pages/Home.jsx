import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"


export const Home = () => {

    return (
        <>
        <div>
            { /* Navbar */}
            <Navbar />

            <main>
                { /* Landing Page */ }
                <HeroSection />

                { /* About Section */ }
            </main>

            { /* Footer */ }

        </div>
        </>
    )
}