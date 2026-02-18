import classes from "./AboutSection.module.css"
import { MdPhonelink } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { useEffect, useState } from "react";


export const AboutSection = () => {

    const slides = [
        {url: "/public/beach-pics/slide-1.jpg", name: "slide-1"},
        {url: "/public/beach-pics/slide-2.jpg", name: "slide-2"},
        {url: "/public/beach-pics/slide-3.jpg", name: "slide-3"},
        {url: "/public/beach-pics/slide-4.jpg", name: "slide-4"},
        {url: "/public/beach-pics/slide-5.jpg", name: "slide-5"}
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    /* UseEffect to update the Image slider every 5secs */
    useEffect(() => {
        const id = setInterval(() => {
            
            setCurrentSlideIndex(prev => {
                if (prev >= slides.length - 1) {
                    return prev = 0;
                }
                return prev +=1;
            });
        }, 5000);

        return () => clearInterval(id);
    },);

    /* UseEffect to animate elements upon scroll */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("run-animation");
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.4,
        })

        const element = document.querySelectorAll(`.${classes.animate}`);

        element.forEach((el) => observer.observe(el));

        return () => observer.disconnect();

    }, [])


    return (
        <section id="about" className={classes["about-section"]}>
            
            <h4 className={classes.subtitle}>Discover Vilankulos</h4>
            <div className={classes.dash}></div>
            <h1 className={classes["about-heading"]}>About Us</h1>
            <div className={classes["content-container"]}>
                <div className={`${classes["left-container"]} ${classes["animate"]}`}>

                    <p className={classes["left-text"]}>
                        Nestled along the turquoise coastline of Vilankulos, Mozambique,
                        our beach house offers the perfect escape to one of Africa’s
                        most beautiful tropical destinations.
                    </p>

                    <p className={classes["left-text"]}>
                        With soft white sands,
                        breathtaking sunsets, and the gentle rhythm of the Indian Ocean just steps away,
                        Vilankulos is a place where time slows down and memories are made.
                    </p>

                    <p className={classes["left-text"]}>
                        Our family-run holiday home was created with care and comfort in mind,
                        offering guests a relaxed, authentic beach experience whether you’re visiting for adventure,
                        rest, or quality time with loved ones.
                    </p>
                    
                    <p className={classes["left-text"]}>
                        As we begin this journey,
                        we invite you to come and experience the warmth of our home,
                        the beauty of our town, and the magic of a true seaside getaway.
                    </p>

                </div>

                <div className={classes["right-container"]}>
                    
                    <div className={`${classes["upper-container"]} ${classes.animate}`}>                      <img
                            src={slides[currentSlideIndex].url}
                            alt={slides[currentSlideIndex].url}
                            className={classes.images}
                        />
                    </div>

                    <div className={classes["lower-container"]}>
                        <div className={`${classes["cards"]} ${classes.animate}`}>
                            <MdPhonelink size={40} className={classes.icon} />
                            <div className={classes["card-content"]}>
                                <h4 className={classes["card-title"]}>
                                    Best Price Guarantee
                                </h4>
                                <p className={classes["card-text"]}>
                                    Affordable pricing guaranteed to meet any budget.
                                </p>
                            </div>
                        </div>
                        <div className={`${classes["cards"]} ${classes.animate}`}>
                            <GiReceiveMoney size={40} className={classes.icon} />
                            <div className={classes["card-content"]}>
                                <h4 className={classes["card-title"]}>
                                    Easy & Quick Booking
                                </h4>
                                <p className={classes["card-text"]}>
                                    Contact us and get quick & seem-less bookings.
                                </p>
                            </div>
                        </div>
                        <div className={`${classes["cards"]} ${classes.animate}`}>
                            <RiTeamLine size={40} className={classes.icon} />
                            <div className={classes["card-content"]}>
                                <h4 className={classes["card-title"]}>
                                    Best Price Guarantee
                                </h4>
                                <p className={classes["card-text"]}>
                                    affordable prices guaranteed to meet your budget
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={classes.dash2}></div>*/}

        </section>
    )
}