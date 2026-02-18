import { AboutSection } from "@/components/AboutSection"
import { BookingSection } from "@/components/BookingSection"
import { ContactUsSection } from "@/components/ContactUsSection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { HouseSection } from "@/components/HouseSection"
import { Navbar } from "@/components/Navbar"


export const Home = () => {

    return (
        <>
        <div>
            { /* Navbar */}
            <Navbar />

            <main>

                <HeroSection />

                <AboutSection />

                <HouseSection />

                <BookingSection />

                <ContactUsSection />
                
            </main>

            <Footer />

        </div>
        </>
    )
}