import { useState } from 'react';

export function ProjectCard({ projectName, urlImg, description, tags, linksBtns }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => setIsExpanded(!isExpanded);
    const preview = description.slice(0, 100);


    return (
        <div className="w-xs max-h-[28rem] border-1 text-[#1C243A] border-[#1C243A]/30 dark:border-white/30 dark:text-[white] p-3 flex flex-col gap-2 rounded-lg hover:translate-y-2 transition-all duration-400">
            <p className="font-semibold">{projectName}</p>
            <img className="w-full dark:grayscale dark:hover:grayscale-0 rounded-md" src={urlImg} alt="" />

            <p className={`text-xs ${isExpanded ? "min-h-[8rem]" : ""}`}>
                {isExpanded ? description : `${preview}... `}
                <button
                    onClick={toggleDescription}
                    className="text-[#1C243A] dark:text-[#cccc] underline text-xs ml-1 hover:text-[#ccc] hover:cursor-pointer"
                >
                    {isExpanded ? 'Ver menos' : 'Ver mais'}
                </button>
            </p>
            <div className="flex items-start justify-center flex-col gap-3  ">
                <div className="flex items-center gap-1 mt-2">
                    {tags.map((item, index) => (
                        <p key={index} className="border py-1 px-3 text-xs rounded-full">{item}</p>
                    ))}

                </div>
                <div className="flex  items-center justify-end gap-2">
                    <a href={linksBtns[0]} className="flex fill-current justify-center items-center gap-2 border border-[#1C243A] dark:border-white p-2 rounded-md  dark:hover:text-[#ccc] hover:cursor-pointer hover-scale" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a href={linksBtns[1]} className="flex justify-center items-center gap-2 border  border-[#1C243A] dark:border-white p-2 rounded-md dark:hover:text-[#ccc] hover:cursor-pointer hover-scale" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}