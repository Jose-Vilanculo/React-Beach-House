import { useToast } from '@/hooks/use-toast';
import classes from './BookingSection.module.css';
import { useEffect, useRef, useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";


export const BookingSection = () => {


    /* useEffect to make element animate once on screen */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("run-animation");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
    })

        const element = document.querySelectorAll(`.${classes.animate}`);

        element.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    /* --- Handles all date selector functionality --- */

    const today = new Date().toISOString().split("T")[0];

    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState();
    const [numberOfGuests, setNumberOfGuests] = useState(0);

    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);


    /* Takes dates entered by user and automates a message to be sent */
    
    const { toast } = useToast();
    const handleSearch = () => {

        if (checkOutDate > today && numberOfGuests > 0) {

            const textField = document.querySelector(`textarea`);

            const message = "Hi there! \n" +
                            `\nI'd like to enquire about the availabilty of your ` +
                            `home from the ${checkInDate} till the ${checkOutDate} for ` +
                            `${numberOfGuests} ${numberOfGuests > 1 ? "people" : "person"}.\n` +
                            `\nKind Regards.`;
            
            textField.value = message;

            /*scroll to contact section*/
            const element = document.getElementById("contact");
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            /* reset state values for bookings */
            setCheckInDate(today);
            setCheckOutDate("");
            setNumberOfGuests(0);

            
        } else {
            console.log("Fill out form");
            toast({
                title: "Invalid form",
                description: "Please ensure that you select your dates and number of guests"
            });
        }
    }

    return (
        <section id="booking" className={classes["booking-section"]}>
            <div className={classes["img-container"]}>

                {/* Background Image */}
                <img
                    src="/beach-pics/about-us-1.jpg"
                    alt="handing-over-keys"
                    className={classes["about-img"]}
                />

                {/* Image Overlay */}
                <div className={classes["img-overlay"]}>
                    <div className={`${classes["text-container"]} ${classes["animate"]}`}>
                        <h1 className={classes.heading}>
                            Let us hand you your<br/>
                            keys to paradise
                        </h1>
                        <p className={classes["img-text"]}>
                            Trust us to accommodate you throughout your stay in Vilankulos<br />
                            Experience moments and make memories
                        </p>
                    </div>

                    <div className={`${classes.calender} ${classes["animate"]}`}>
        
                        {/* Check In container */}
                        <div className={classes["check-in"]} onClick={() => checkInRef.current?.showPicker()}>
                            <div className={classes["check-in-text"]}>
                                CHECK IN<br />
                                {checkInDate ? checkInDate : "Add Date"}

                            </div>
                            <SlCalender size={25} className={classes["check-in-logo"]}/>
                            <input
                                ref={checkInRef}
                                type="date"
                                value={checkInDate}
                                min={today}
                                required
                                onChange={(e) => setCheckInDate(e.target.value)}
                                className={classes["hidden-date-input"]}
                            />
                        </div>

                        {/* Check Out container */}
                        <div className={classes["check-out"]} onClick={() => checkOutRef.current?.showPicker()}>
                            <div className={classes["check-out-text"]}>
                                CHECK OUT<br />
                                {checkOutDate ? checkOutDate : "Add Date"}
                            </div>
                            <SlCalender size={25} className={classes["check-in-logo"]}/>
                            <input
                                ref={checkOutRef}
                                type="date"
                                value={checkOutDate}
                                min={today}
                                required
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                className={classes["hidden-date-input"]}
                            />
                        </div>

                        {/* Guests container */}
                        <div className={classes.guests}>
                            <div className={classes["guests-text"]}>
                                GUESTS<br />
                                {numberOfGuests}
                            </div>
                            <div className={classes["plus-minus"]}>
                                <FiMinusCircle
                                    size={25}
                                    className={classes.minus}
                                    onClick={() => {
                                        if (numberOfGuests <= 0) {
                                            setNumberOfGuests(0)
                                        } else {
                                            setNumberOfGuests((prev) => prev - 1)
                                        }
                                    }} />
                                <GoPlusCircle size={25} className={classes.plus} onClick={() => setNumberOfGuests((prev) => prev + 1)}/ >
                            </div>
                        </div>

                        {/* Search container */}
                        <div
                            className={classes.search}
                            onClick={handleSearch}
                        >
                            <BiSearchAlt size={40} className={classes["search-logo"]}/>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}