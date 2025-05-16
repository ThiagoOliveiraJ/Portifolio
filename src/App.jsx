import { useTranslation } from "react-i18next";

import { Header } from './components/Header/Header'

import Carousel from './components/Carousel/Carousel';
import MetaBalls from './components/MetalBalls/MetalBalls';


import { AcademicItem } from './components/AcademicItem/AcademicItem';

import { Linkedin } from 'lucide-react'



import './global.css'

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main className='max-w-6xl mx-auto w-full h-screen flex justify-between'>
        <div className='w-[50%] flex items-center flex-col justify-center'>
          <div className='w-full flex flex-col items-start justify-center '>
            <h3 className='text-6xl font-semibold'>Thiago Oliveira</h3>
            <h4 className='text-3xl text-[#cccc] ml-2 mt-3'>{t("role")}</h4>
          </div>
          <div>
            <p className='mt-5 ml-2 text-start text-[#cccc] text-base'  dangerouslySetInnerHTML={{ __html: t("intro") }}/>
          </div>
          <div className='w-full flex  justify-start items-center gap-5 mt-5 ml-2'>
            <a href='https://www.linkedin.com/in/thiagooliveiradev/' className=' flex flex-1 justify-center items-center gap-2 border p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <p className='mt-1 font-semibold'>Linkedin</p>
            </a>
            <a href='https://github.com/ThiagoOliveiraJ' className=' flex  flex-1 justify-center items-center gap-2 border p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <p className='mt-1 font-semibold'>GitHub</p>
            </a>
            <a href='./src/assets/Curriculo_Thiago_Oliveira.pdf' download='Curriculo_Thiago_Oliveira.pdf' className=' flex  flex justify-center items-center gap-2 border p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
              <p className='mt-1 font-semibold'>CV</p>
            </a>
            <span className='flex gap-2 flex-2'>
              <div className='relative'>
                <div className='animate-ping absolute inline-flex h-[20px] w-[20px] rounded-full bg-white  opacity-75'></div>
                <div className='relative inline-flex rounded-full size-5 bg-white'></div>
              </div>

              Open to work!
            </span>
          </div>
        </div >
        <div className='w-[50%] overflow-visible relative' >
          <div className='absolute inset-0'>
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
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

      <section className='max-w-6xl mx-auto mt-10 mb-20' >
        <h4 className='text-4xl font-bold my-10 text-center '>{t("technologies_title")}</h4>
        <Carousel />
      </section>


      <section className='max-w-6xl mx-auto mt-40'>
        <h4 className='text-4xl font-bold my-10 text-start'>{t("academic_title")}</h4>
        <div className='flex flex-col gap-y-12 mb-20'>
          <AcademicItem
            linkImg="https://www.pucminas.br/PucVirtual/Graduacao/Paginas/Analise-e-Desenvolvimento-de-Sistemas-Tecnologo.aspx"
            urlImg="./src/assets/img/logo_puc.png"
            collegeName="Puc Minas"
            courseName="Análise e Desenvolvimento de Sistemas"
            status="Cursando"
            graduationDate="2025-02-18 - 2027-09-18"
            description="Atualmente, curso Análise e Desenvolvimento
            de Sistemas na PUC Minas, onde estou aprofundando meus 
            conhecimentos em lógica de programação, estruturas de dados, 
            desenvolvimento web, banco de dados e engenharia de software. 
            A formação combina teoria e prática, preparando-me para atuar 
            de forma crítica e inovadora no setor de tecnologia, com foco 
            em soluções eficientes e alinhadas às demandas do mercado."

          />

          <AcademicItem
            linkImg="https://programadoresdoamanha.org.br/pt"
            urlImg="./src/assets/img/logo_pda.jpeg"
            collegeName="Programadores do Amanhã"
            courseName="Desenvolvimento Web FullStack"
            status="Concluido"
            graduationDate="2023-10-20 - 2024-10-20"
            description="Completei o curso de Desenvolvimento
            Web Full Stack, com duração de 1 ano e carga horária
            de 720 horas. Durante o curso, desenvolvi habilidades 
            técnicas em programação front-end e back-end, além de 
            aprimorar meu inglês e soft skills, como comunicação, 
            trabalho em equipe e resolução de problemas. Essa 
            formação me preparou para atuar de forma completa 
            no desenvolvimento de aplicações web, unindo conhecimentos 
            técnicos e competências interpessoais essenciais para o 
            mercado de tecnologia."

          />




          <AcademicItem
            linkImg="https://sistemadivinaprovidencia.org/"
            urlImg="./src/assets/img/logo_SDP.jpeg"
            collegeName="Cetaí Santo André Apóstolo."
            courseName="Róbotica"
            status="Concluido"
            graduationDate="2019-02-02 - 2024-07-12"
            description="Iniciei minha trajetória em programação
            através do curso de Robótica, onde aprendi os fundamentos 
            de robótica e desenvolvi habilidades práticas em Python e C++. 
            Esse primeiro contato com lógica de programação e a integração 
            entre hardware e software foi essencial para consolidar meu 
            interesse na área de tecnologia e desenvolvimento."

          />

        </div>
      </section>

      <footer className='mt-40 border-t py-15 border-zinc-800'>
        <div className='max-w-6xl mx-auto flex justify-between text-[#cccc] text-sm'>
          <p>All rights reserved © 2024</p>
          <p>{t("footer_dev")} <a className='text-[#ffff] hover:cursor-pointer' href='https://www.linkedin.com/in/thiagooliveiradev/'>Thiago Oliveira</a></p>
        </div>
      </footer>
    </>
  )
}

export default App
