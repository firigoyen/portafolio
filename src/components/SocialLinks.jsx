import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const SocialLinks = () => {

  const [t] = useTranslation("global");

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/fernando-irigoyen-retamales/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/firigoyen",
    },
    {
      id: 3,
      child: (
        <>
          {t("socialLinks.mail")} <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:irigoyen.retamales@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          {t("socialLinks.resume")} <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "CV_F.IRIGOYEN.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
