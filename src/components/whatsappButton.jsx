import React, { useEffect, useState } from "react";
import './style/whatsappButton.css';
import whatsapp from '../assets/whatsapp.png';

export function WhatsappButton() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= docHeight - 50) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="whatsapp">
            <a
                href="https://wa.me/5511945491546?text=Ol%C3%A1!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20dispon%C3%ADveis%2C%20garantia%20e%20valores%3F"
                className={`whatsappButton ${isAtBottom ? 'moveUp' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="whatsappLogo" src={whatsapp} alt="Whatsapp" />
            </a>
        </div>
    );
}