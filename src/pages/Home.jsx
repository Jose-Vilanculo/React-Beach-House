import { AboutSection } from "@/components/AboutSection"
import { BookingSection } from "@/components/BookingSection"
import { ContactUsSection } from "@/components/ContactUsSection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { HouseSection } from "@/components/HouseSection"
import { Navbar } from "@/components/Navbar"
import { useRef } from "react"


export const Home = () => {

    const bookingRef = useRef(null);

    return (
        <>
        <div>
            { /* Navbar */}
            <Navbar bookingRef={bookingRef}/>

            <main>

                <HeroSection />

                <AboutSection />

                <HouseSection />

                <BookingSection bookingRef={bookingRef}/>

                <ContactUsSection />
                
            </main>

            <Footer />

        </div>
        </>
    )
}