import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiFacebook, SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Mail size={20}/>
                <p className="font-bold text-2xl">Contact me</p>
            </div>
            <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/zachgabriel.estrella/" target="_blank">
                    <SiFacebook size={32}/>
                </a>
                <a href="mailto:zachgabriel.estrella@gmail.com">
                    <SiGmail size={32}/>
                </a>
                <a href="https://github.com/zachgse" target="_blank">
                    <SiGithub size={32}/>
                </a>
                <a href="https://www.linkedin.com/in/zach-estrella/" target="_blank">
                    <FaLinkedin size={32}/>
                </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-white">
                Let’s connect and create something awesome together! Reach out through any of the platforms above—I’d love to hear from you.
            </p>
        </div>
    )
}

export default Contact;