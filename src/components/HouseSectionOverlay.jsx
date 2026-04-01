import { X } from 'lucide-react';
import classes from './HouseSectionOverlay.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useState } from 'react';
import { IoBedOutline, IoCarSportOutline } from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';
import { RxDimensions } from 'react-icons/rx';


export const HouseSectionOverlay = ({setIsOverlayOpen}) => {

    const houseImages = [
        {url: "/house-pics/bathroom-2.jpg", name: "bathroom-2"},
        {url: "/house-pics/bathroom.jpg", name: "bathroom"},
        {url: "/house-pics/bed-room-2.jpg", name: "bed-room-2"},
        {url: "/house-pics/bed-room-3.jpg", name: "bed-room-3"},
        {url: "/house-pics/bed-room.jpg", name: "bed-room"},
        {url: "/house-pics/drone-view.jpg", name: "drone-view"},
        {url: "/house-pics/kitchen.jpg", name: "kitchen"},
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleRight = () => {
        if (currentSlideIndex >= houseImages.length - 1) {
            setCurrentSlideIndex(0);
        } else {
            setCurrentSlideIndex((prev) => prev + 1);
        }
    }

    const handleLeft = () => {
        if (currentSlideIndex == 0) {
            setCurrentSlideIndex(houseImages.length - 1);
        } else {
            setCurrentSlideIndex((prev) => prev - 1);
        }
    }
    
    return (
        <>
        {/* View More about house */}
            <section
                className={classes["view-house"]}
                onClick={() => setIsOverlayOpen((prev) => !prev)}
            >
                <div 
                    className={classes["view-house-container"]}
                    onClick={() => setIsOverlayOpen((prev) => !prev)} // to undo previous onclick
                >
                    <div className={classes.header}>
                        <a
                            href="#booking"
                            className={classes.enquire}
                            onClick={() => setIsOverlayOpen((prev) => !prev)}
                        >
                            Book Now
                        </a>
                        <a
                            className={classes.close}
                            onClick={() => setIsOverlayOpen((prev) => !prev)}
                        >
                            Close
                            <X size={30} />
                        </a>
                    </div>

                    <div className={classes.gallery}>

                        <button
                            className={classes.arrows}
                            onClick={handleLeft}
                        >
                            <FaChevronLeft size={17} />
                        </button>

                        <div className={classes["img-box"]}>
                            <img
                                src={houseImages[currentSlideIndex].url}
                                alt="background-beach-image"
                                className={classes.images}
                            >
                            </img>
                        </div>

                        <button
                            className={classes.arrows}
                            onClick={handleRight}
                        >
                            <FaChevronRight size={17} />
                        </button>

                    </div>

                    <div className={classes.counter}>
                        {currentSlideIndex + 1}/{houseImages.length}
                    </div>

                    <div className={classes["info-card"]}>

                        <p>Starting from <span className={classes.big}> R 1000.00</span> <span className={classes.italic}>PER NIGHT</span></p>
                        <p>
                            <span className={classes.bold}>3 Bedroom Beach House situated in Vilankulos</span>{" "}
                        </p>

                        <p>
                            22 Beach rd, Vilankulos, <span className={classes.bold}>Mozambique</span>
                        </p>

                        <a className={classes.link} href='#contact' onClick={() => setIsOverlayOpen((prev) => !prev)}>
                            Contact for more information
                        </a>

                        <div className={classes["icons-container"]}>
                            <IoBedOutline size={20} opacity={0.7}/><p className={classes.bold}>3</p>
                            <LiaBathSolid size={20} opacity={0.7}/><p className={classes.bold}>3</p>
                            <IoCarSportOutline size={20} opacity={0.7}/><p className={classes.bold}>1</p>
                            <RxDimensions size={20} opacity={0.7}/><p className={classes.bold}>80m²</p>
                        </div>
                    </div>

                    <div className={classes["info-card"]}>
                        <p className={classes.bold}>
                            Guest Facilities and experience
                        </p>
                        <p>
                            Designed with the ultimate guest experience in mind, Vilanculo Airport Bay Lodge features two comfortable en-suite guest rooms with queen beds for ultimate comfort and restful sleep.
                        </p>
                        <p>
                            Both rooms boast well-appointed bathrooms with showers and toilets, large windows to capture the ocean breeze, double sliding doors, and private verandas on the seaside.
                            A coffee and tea table can be provided for added convenience. A third bedroom offers versatility as a single guestroom or children's bedroom, where a bunk bed can be set up.
                        </p>
                        <p>
                            The main house is equipped with a fully functional kitchen for personal meals, a communal lounge with TV for relaxation, and a full bathroom with bath, shower, washing basin, and separate toilet.
                            The lounge extends to a spacious veranda for shared moments among family and friends. Similarly, the kitchen extends to a large veranda suitable for indoor cooking and braaiing.
                        </p>
                        <p>
                            For security and peace of mind, all verandas are fully enclosed and secured by lockable gates. Main windows are fitted with burglar bars.
                            Additionally, bright spotlights and motion-sensing lights surround the property for added security.
                        </p>
                        <p>
                            Although this house is currently work-in-progress, do not let its exterior appearance deceive you: unparalleled comfort awaits you within!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
