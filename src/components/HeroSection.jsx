import classes from './HeroSection.module.css'

export const HeroSection = () => {
    return (
        <section id="hero" className={classes["hero-section"]}>
            <img
                src="/public/beach-pics/cropped-bg-image.jpg"
                alt="background-beach-image"
                className={classes["bg-image"]}
            />

            <div className={classes["hero-container"]}>
                <div className={classes["hero-content"]}>
                    <h1 className={classes["hero-text"]}>
                        <span className={classes["delay-1"]}>Discover Mozambique</span><br />
                        <span className={classes["delay-2"]}>With Our Guide</span>
                    </h1>
                    <p className={classes["delay-3"]}>
                        Come stay in the heart of Vilankulos, Mozambique<br />
                        Where you can experience the Tropical life, Ocean views and Sunsets.<br />
                        Let us make your experience a memorable one.
                    </p>
                    <a href="#booking" className={classes["hero-button"]}>
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    )
}