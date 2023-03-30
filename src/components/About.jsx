import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {

  const [t] = useTranslation("global");

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t("about.title")}</p>
        </div>
        <p className="text-xl mt-20 pr-2">
          {t("about.fisrtParagraph")}
        </p>
        <br />
        <p className="text-xl">
          {t("about.secondParagraph")}  
        </p>
      </div>
    </div>
  );
};

export default About;
