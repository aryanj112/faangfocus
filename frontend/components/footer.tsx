import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center border-t mx-auto text-center gap-[2rem] py-[2rem]">
            <p className="text-lg">
                Hey everyone! I'm Aryan and I made Faang Focus to make the interview process a better place.
                Feel free to connect with me and reach out with any suggestions or bugs :)
            </p>
            <div className="flex flex-row gap-[1rem]">
                <a
                    href="https://www.linkedin.com/in/aryanjain06/"
                    target="_blank"
                    className="hover:scale-110 transition duration-550 ease-in-out"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="w-[3.5rem] h-[3.5rem]" />
                </a>
                <a
                    href="mailto:2006aryanj@gmail.com"
                    target="_blank"
                    className="hover:scale-110 transition duration-550 ease-in-out"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="w-[3.5rem] h-[3.5rem]" />
                </a>
                <a
                    href="https://www.instagram.com/aryan_jain_n/"
                    target="_blank"
                    className="hover:scale-110 transition duration-550 ease-in-out"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} className="w-[3.5rem] h-[3.5rem]" />
                </a>
            </div>
        </footer>
    )
}

export default Footer