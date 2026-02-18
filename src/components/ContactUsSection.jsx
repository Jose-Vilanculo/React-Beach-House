import { useToast } from '@/hooks/use-toast';
import classes from './ContactUsSection.module.css'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';


export const ContactUsSection = () => {

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
            threshold: 0.5,
    })

        const element = document.querySelectorAll(`.${classes.animate}`);

        element.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);

    const sumbitHandler = (e) => {
        e.preventDefault()

        setIsSending(true);

        setTimeout(() => {

            toast({
                title: "Message Sent!",
                description: `Thanks for your message ${e.target.name.value}. We'll get back to you as soon as possible.`
            });

            setIsSending(false);

            /* reset form */
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";

        }, 1500);
    };

    return (
        <section id="contact" className={classes["contact-section"]}>

            <div className={`${classes["lets-talk"]} ${classes["animate"]}`}>
                <h4 className={classes.heading4}>Contact Us</h4>
                <h2 className={classes.heading2}>Let's Talk</h2>
                <p className={classes.text}>
                    Reach out for enquiries, bookings, or<br />
                    just to say Hi. We're eager to connect.
                </p>
                <div className={classes["contact-cards"]}>
                    <div className={classes.card}>
                        <Mail size={20} className={classes.icon} />
                        <p>holidayhome@gmail.com</p>
                    </div>
                    <div className={classes.card}>
                        <Phone size={20} className={classes.icon} />
                        <p>(+258) 12 345 6789</p>
                    </div>
                    <div className={classes.card}>
                        <Instagram size={20} className={classes.icon} />
                        <p>Instagram</p>
                    </div>
                </div>
            </div>

            <div className={`${classes.form} ${classes["animate"]}`} onSubmit={sumbitHandler}>
                <form>

                    <div className={classes["contact-details"]}>

                        <div className={classes.name}>
                            <label>NAME</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                placeholder='Your name'
                                className={classes["contact-input"]}
                            >
                            </input>
                        </div>

                        <div className={classes.email}>
                            <label>EMAIL</label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                required
                                placeholder='Your email'
                                className={classes["contact-input"]}
                            >
                            </input>
                        </div>

                    </div>
                    <div className={classes.message}>
                        <label>MESSAGE</label>
                        <textarea
                            type='text'
                            id='message'
                            name='message'
                            required
                            placeholder='Type something here...'
                            className={classes["message-input"]}
                        >
                        </textarea>
                        <button
                            type='submit'
                            className={classes.button}
                        >
                            {isSending ? "Sending..." : "Send Message"}

                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}