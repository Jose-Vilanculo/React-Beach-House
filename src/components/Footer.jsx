import classes from './Footer.module.css'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { Copyright } from 'lucide-react';


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About Us", href: "#about"},
    {name: "View House", href: "#house"},
    {name: "Bookings", href: "#booking"},
    {name: "Contact Us", href: "#contact"},
]


export const Footer = () => {
    return (

        <footer>
            <div className={classes["upper-footer"]}>

                <div className={classes["left-section"]}>
                    <h3 className={classes.heading3}>Beach House (Pty) Ltd</h3>
                    <p>
                        23 Beach Rd, Vilankulos<br />
                        Mozambique
                    </p>
                    <p>
                        <span className={classes.bold}>Phone</span>: (+258) 12 345 6789<br />
                        <span className={classes.bold}>Email</span>: holidayhome@gmail.com
                    </p>
                </div>

                <div className={classes["middle-section"]}>
                    <h4 className={classes.heading4}>Links</h4>
                    {navItems.map((e) => (
                        <a
                            href={e.href}
                            className={classes.links}
                        >
                            <span className={classes.bullet}>&gt;</span> {e.name}
                        </a>
                    ))}
                </div>

                <div className={classes["right-section"]}>
                    <h4 className={classes.heading4}>Social Media</h4>

                    <a href="https://www.instagram.com/" target='_blank' className={classes.card}>
                        <Instagram size={18} className={classes.icon} />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.facebook.com/" target='_blank' className={classes.card}>
                        <Facebook size={18} className={classes.icon} />
                        <p>Facebook</p>
                    </a>
                    <a href="https://x.com/" target='_blank' className={classes.card}>
                        <FaXTwitter size={18} className={classes.icon} />
                        <p>X/Twitter</p>
                    </a>
                </div>
            </div>
            <div className={classes["lower-footer"]}>
                <div className={classes.dash}></div>
                <p>
                    <Copyright size={13}/> Copy Right Beach House (Pty) Ltd.
                    @2026 All Rights Reserved<br />
                    Designed by <span className={classes.name}>Jose Vilanculo</span>
                </p>
            </div>
        </footer>
    )
}