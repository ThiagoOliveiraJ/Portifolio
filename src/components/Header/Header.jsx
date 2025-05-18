import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";



export function Header({ isDarkMode, toggleTheme }) {
    const [isHidden, setIsHidden] = useState(true);
    const { i18n } = useTranslation();

    
    const toggleHidden = () => {
        setIsHidden(prev => !prev);
    };

    const handleLanguageSelect = (lang) => {
        i18n.changeLanguage(lang);
        setIsHidden(true);
    };



    return (
        <header className="fixed w-full text-[#1C243A] dark:text-[white] bg-[#ffffff60] dark:bg-[#0a0a0ac9] backdrop-blur-md flex items-center py-6 md:px-16 px-6 border-b border-zinc-800/50 dark:border-zinc-800 z-50 ">
            <div className="max-w-6xl mx-auto w-full flex justify-between ">
                <span className="flex items-center gap-[1px]">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"></path></svg>
                    <h4 className="hover:cursor-pointer">Thiago Oliveira</h4>
                </span>
                <ul className="flex gap-2 relative">
                    <li className=" hover:cursor-pointer hover-scale transition-all duration-400" onClick={toggleTheme}>
                        <svg className={`${isDarkMode ? "block" : "hidden"}`} aria-hidden="true" focusable="false" height="22" role="presentation" viewBox="0 0 24 24" width="22"><g fill="currentColor"><path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path><path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path></g></svg>
                        
                        <svg className={`${isDarkMode ? "hidden" : "block"}`}  focusable="false" height="22" role="presentation" viewBox="0 0 24 24" width="22"><path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" fill="currentColor"></path></svg>
                    </li>
                    <li className="hover:cursor-pointer hover-scale" onClick={toggleHidden}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clip-rule="evenodd"></path></svg>
                    </li>
                    <li className={`${isHidden ? "hidden" : ""} xl:absolute xl:top-6 xl:left-8`}>
                        <p className="hover:cursor-pointer" onClick={() => handleLanguageSelect("en")}>English</p>
                        <p className="hover:cursor-pointer" onClick={() => handleLanguageSelect("pt")}>Português</p>

                    </li>
                </ul>
            </div>
        </header>
    )
}