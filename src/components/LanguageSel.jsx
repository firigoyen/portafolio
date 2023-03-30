import React from "react";
import { IconContext } from "react-icons";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const LanguageSel = () => {

  const [, i18n] = useTranslation("global");

  const changeLang = (e) => i18n.changeLanguage(`${e.currentTarget.value}`);

  return (
    <div className="flex items-center">
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div>
          <MdLanguage />
        </div>
      </IconContext.Provider>

      <select
        name="lan"
        onChange={changeLang}
        className="ml-2 cursor-pointer bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};
