import React from "react";
import style from "./socials.module.css";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

const Socials = () => {
    const socials = [
        {
            id: "1",
            name: "Facebook",
            link: "https://www.facebook.com/AlejandraHidalgoZavala",
            icon: <FaFacebook />,
        },
        {
            id: "2",
            name: "Instagram",
            link: "https://www.instagram.com/alejandrahidalgozavala/",
            icon: <FaInstagram />,
        },
        {
            id: "3",
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCn8UL6SjT77jkrlnARBusjw",
            icon: <FaYoutube />,
        },
        {
            id: "4",
            name: "Tiktok",
            link: "https://www.tiktok.com/@alejandrahidalgozavala",
            icon: <FaTiktok />,
        },
    ];

    return (
        <address className={style.socials}>
            {socials.map((social) => (
                <a
                    className={style.social}
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </address>
    )
}

export default Socials;