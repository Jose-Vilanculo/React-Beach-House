import classes from './HouseSection.module.css';
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import { Plus } from 'lucide-react';


export const HouseSection = () => {


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("run-animation");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.8,
        })

        const element = document.querySelectorAll(`.${classes.animate}`);

        element.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    return (
        <section id="house" className={classes["house-section"]}>

            {/* heading */}
            <h4 className={classes.subtitle}>Welcome Home</h4>
            <div className={classes.dash}></div>
            <h1 className={classes["about-heading"]}>View House</h1>
            <div className={`${classes["content-container"]} ${classes["animate"]}`}>

                <div className={classes["upper-container"]}>

                    <div className={classes["left-container"]}>
                        <img
                            src="/house-pics/bed-room.jpg"
                            alt="bedroom photo"
                            className={classes.images}
                        />
                        <div className={classes["img-overlay"]}>
                            <div className={classes.more}>
                                <Plus size={15} className={classes.plus} />
                                <p className={classes.title}>View More</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes["right-container"]}>

                        <div className={classes["right-upper-container"]}>
                            <img
                                src="/house-pics/bed-room-3.jpg"
                                alt="bedroom photo"
                                className={classes.images}
                            />
                            <div className={classes["img-overlay"]}>
                                <div className={classes.more}>
                                    <Plus size={15} className={classes.plus} />
                                    <p className={classes.title}>View More</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes["right-lower-container"]}>
                            <img
                                src="/house-pics/bed-room-2.jpg"
                                alt="bedroom photo"
                                className={classes.images}
                            />
                            <div className={classes["img-overlay"]}>
                                <div className={classes.more}>
                                    <Plus size={15} className={classes.plus} />
                                    <p className={classes.title}>View More</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className={classes["lower-container"]}>
                    <div className={classes["description-container"]}>
                        <div className={classes["text-container"]}>
                            <p>
                                3 Bedroom 3 Bathroom house in <span className={classes.bold}>Vilankulos</span>{" "}
                                <span className={classes.hidden}>| 23 Beach rd, Vilankulos, <span className={classes.bold}>Mozambique</span></span>
                            </p>
                            <CiLocationOn className={classes.location} size={27} color='rgba(239, 148, 57, 1)'/>
                        </div>
                        <div className={classes["icons-container"]}>
                            <IoBedOutline size={25} opacity={0.7}/><p className={classes.bold}>3</p>
                            <LiaBathSolid size={25} opacity={0.7}/><p className={classes.bold}>3</p>
                            <IoCarSportOutline size={25} opacity={0.7}/><p className={classes.bold}>1</p>
                            <RxDimensions size={25} opacity={0.7}/><p className={classes.bold}>80m²</p>
                        </div>
                    </div>
                    <a href="#booking" className={classes.button}>
                        Enquire Now
                    </a>
                </div>
            </div>
        </section>
    )
}