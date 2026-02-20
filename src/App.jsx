1
import { useState } from "react";
import { useTranslation } from "react-i18next";


import { Header } from './components/Header/Header'

import Carousel from './components/Carousel/Carousel';
import MetaBalls from './components/MetalBalls/MetalBalls';


import { AcademicItem } from './components/AcademicItem/AcademicItem';
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { ExperienceItem } from "./components/ExperienceItem/ExperienceItem";

import { Linkedin } from 'lucide-react'



import './global.css'

function App() {
  const { t } = useTranslation();

  const academicItems = t("academic_items", { returnObjects: true });

  const projectItems = t("project_items", { returnObjects: true });
  const experienceItems = t("experience_items", { returnObjects: true });

  const [gradientColor, setGradientColor] = useState('#0A0A0A')
  const [metaColor, setMetaColor] = useState("#ffffff");

  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    const isCurrentlyDark = html.classList.contains("dark");

    if (isCurrentlyDark) {
      html.classList.remove("dark");
      setIsDarkMode(false);
      setMetaColor("#1C243A");
      setGradientColor("white")
    } else {
      html.classList.add("dark");
      setIsDarkMode(true);
      setMetaColor("#ffffff");
      setGradientColor("#0A0A0A")

    }
  };


  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0A0A0A] dark:text-[white]">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className='mx-auto w-[95%] h-screen flex flex-col justify-between  lg:flex-row 2xl:w-full  2xl:max-w-6xl mx-auto'>
        <div className='w-full mt-30  flex items-center flex-col justify-center lg:w-[50%]'>
          <div className='w-full flex flex-col items-start justify-center '>
            <h3 className='text-4xl font-semibold text-[#1C243A] dark:text-[white] md:text-6xl'>Thiago Oliveira</h3>
            <h4 className='text-xl text-[#1C243A] dark:text-[#cccc] lg:ml-2 mt-3'>{t("role")}</h4>
          </div>
          <div>
            <p className='mt-5  text-start text-[#0A0A0A] dark:text-[#cccc] text-base lg:ml-2' dangerouslySetInnerHTML={{ __html: t("intro") }} />
          </div>
          <div className='w-full flex flex-wrap justify-start items-center gap-5 mt-5 lg:ml-2'>
            <a href='https://www.linkedin.com/in/thiagooliveiradev/' className=' flex flex-1 justify-center items-center gap-2 border-1 border-[#1C243A] dark:border-1 dark:border-[white] dark:text-[white] p-2 rounded-md dark:hover:text-[#ccc] hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <p className='mt-1 font-semibold'>Linkedin</p>
            </a>
            <a href='https://github.com/ThiagoOliveiraJ' className=' flex  flex-1 justify-center items-center gap-2 border-1 border-[#1C243A] dark:border-1 dark:border-[white] dark:text-[white] p-2 rounded-md dark:hover:text-[#ccc] hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <p className='mt-1 font-semibold'>GitHub</p>
            </a>
            <a href='public/Curriculo_Thiago_Oliveira.pdf' download='Curriculo_Thiago_Oliveira.pdf' className=' flex  flex justify-center items-center gap-2 border-1 border-[#1C243A] dark:border-1 dark:border-[white] dark:text-[white] dark:hover:text-[#ccc] p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
              <p className='mt-1 font-semibold'>CV</p>
            </a>
            <span className='flex gap-2 flex-2 dark:text-[white]'>
              <div className='relative'>
                <div className='animate-ping absolute inline-flex h-[20px] w-[20px] rounded-full bg-[#1C243A]  dark:bg-white  opacity-75'></div>
                <div className='relative inline-flex rounded-full size-5 bg-[#1C243A] dark:bg-white'></div>
              </div>

              Open to work!
            </span>
          </div>
        </div >
        <div className='w-full h-full overflow-visible relative lg:w-[50%]' >
          <div className='absolute inset-0'>
            <MetaBalls
              color={metaColor}
              cursorBallColor={metaColor}
              cursorBallSize={2}
              ballCount={12}
              animationSize={40}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </div>
        </div>
      </main >

      <section className='mt-10 mb-20 2xl:max-w-6xl mx-auto ' >
        <h4 className='text-3xl font-bold my-10 text-[#1C243A] dark:text-[white] lg:text-4xl text-center'>{t("technologiesTitle")}</h4>
        <Carousel gradientColor={gradientColor} />
      </section>

      <section className="w-[95%] flex flex-col items-center justify-center my-40  lg:items-start 2xl:max-w-6xl mx-auto">
        <h4 className='text-3xl text-center font-bold my-10 text-[#1C243A] dark:text-white lg:text-4xl lg:text-start'>{t("projetctsTitle")}</h4>
        <div className="flex justify-center items-center gap-5 flex-wrap ">

          {projectItems.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                projectName={item.projectName}
                urlImg={item.urlImg}
                description={item.description}
                tags={item.tags}
                linksBtns={item.linksBtns}
                t={t}
              />
            )
          })}

        </div>
      </section>

      <section className='w-[95%] mt-40 text-[#1C243A] dark:text-white 2xl:w-full 2xl:max-w-6xl mx-auto'>
        <h4 className='text-3xl text-center font-bold my-10  lg:text-start lg:text-4xl'>{t("experienceTitle")}</h4>
        <div className='flex flex-col gap-y-12 mb-20'>
          {experienceItems.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                linkImg={item.linkImg}
                urlImg={item.urlImg}
                CorporationName={item.CorporationName}
                role={item.role}
                status={item.status}
                ExperienceDate={item.ExperienceDate}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      
      <section className='w-[95%] mt-40 text-[#1C243A] dark:text-white 2xl:w-full 2xl:max-w-6xl mx-auto'>
        <h4 className='text-3xl text-center font-bold my-10  lg:text-start lg:text-4xl'>{t("academicTitle")}</h4>
        <div className='flex flex-col gap-y-12 mb-20'>
          {academicItems.map((item, index) => {
            return (
              <AcademicItem
                key={index}
                linkImg={item.linkImg}
                urlImg={item.urlImg}
                collegeName={item.collegeName}
                courseName={item.courseName}
                status={item.status}
                graduationDate={item.graduationDate}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <footer className='mt-40 border-t py-15 border-zinc-800'>
        <div className='flex flex-col items-center lg:flex-row justify-between dark:text-[#ccc] text-[#515151] text-sm 2xl:max-w-6xl mx-auto'>
          <p>All rights reserved © 2025</p>
          <p>{t("footer_dev")} <a className='text-[#1C243A] dark:text-[#ffff] hover:cursor-pointer' href='https://www.linkedin.com/in/thiagooliveiradev/'>Thiago Oliveira</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
