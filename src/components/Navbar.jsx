import { Menu, X } from 'lucide-react';
import classes from './Navbar.module.css'
import { FaUikit } from "react-icons/fa";
import { useEffect, useState } from 'react';


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About Us", href: "#about"},
    {name: "View House", href: "#gallery"},
    {name: "Contact Us", href: "#contact"}
]


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    /* Use effect to listen for scrolling */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(scrollY > 30)
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    return (
        <nav className={isScrolled ? classes["scrolled-navbar"] : classes["navbar"]}>

            {/* Nav Logo */}
            <a href="#hero" className={classes["logo-link"]}>
                <div className={classes.logo}>
                    <FaUikit size={40} color='rgba(255, 255, 255, 0.7)'/>
                    <h1 className={classes["logo-text"]}>Vila Beach House</h1>
                </div>
            </a>

            {/* Desktop Nav */}
            <div className={classes["nav-items"]}>
                {navItems.map((item, key) => (
                    <a
                    key={key}
                    href={item.href}
                    className={classes["nav-text"]}
                    >
                        {item.name}
                    </a>
                ))}

                {/* Booking Button */}
                <a href="#booking" className={classes["button"]}>
                    Start Booking
                </a>
            </div>

            {/* Mobile Nav */}
            <button
                className={classes["menu-button"]}
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <Menu size={25} />
            </button>

            {isMenuOpen && (
                <div className={classes["menu-overlay"]}>
                    <button
                        className={classes["x-button"]}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <X size={30} />
                    </button>

                    <div className={classes["mobile-nav-items"]}>
                        {navItems.map((item, key) => (
                            <a
                            key={key}
                            href={item.href}
                            className={classes["mobile-nav-text"]}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            className={classes["mobile-nav-text"]}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            Book Now
                        </a>
                    </div>
                </div>)
            }       
            
        </nav>
    )
}