import { AboutSection } from "@/components/AboutSection"
import { BookingSection } from "@/components/BookingSection"
import { ContactUsSection } from "@/components/ContactUsSection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { HouseSection } from "@/components/HouseSection"
import { HouseSectionOverlay } from "@/components/HouseSectionOverlay"
import { Navbar } from "@/components/Navbar"
import { useRef } from "react"
import { useState, useEffect } from "react";



export const Home = () => {

    const bookingRef = useRef(null);

        const [isOverlayOpen, setIsOverlayOpen] = useState(false);

        /* useEffect to lock scrolling while menu is open */
        useEffect(() => {
        const html = document.documentElement;
    
            if (isOverlayOpen) {
                html.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.querySelector('nav').style.display = 'none';
            } else {
                html.style.overflow = "";
                document.body.style.overflow = "";
                document.querySelector('nav').style.display = '';
            }
    
            return () => {
                html.style.overflow = "";
                document.body.style.overflow = "";
            };
        }, [isOverlayOpen]);

    return (
        <>
        <div>
            { /* Navbar */}
            <Navbar/>

            {isOverlayOpen && (
                <HouseSectionOverlay setIsOverlayOpen={setIsOverlayOpen} bookingRef={bookingRef}/>
            )}

            <main>

                <HeroSection />

                <AboutSection />

                <HouseSection setIsOverlayOpen={setIsOverlayOpen} />

                <BookingSection bookingRef={bookingRef}/>

                <ContactUsSection />
                
            </main>

            <Footer />

        </div>
        </>
    )
}