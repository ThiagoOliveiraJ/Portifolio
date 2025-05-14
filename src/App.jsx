import { Header } from './components/Header/Header'
import MetaBalls from './components/MetalBalls/MetalBalls';

import { Linkedin } from 'lucide-react'



import './global.css'

function App() {


  return (
    <>
      <Header />

      <div className='max-w-6xl mx-auto w-full h-screen flex justify-between'>
        <div className='w-[50%] flex items-center flex-col justify-center'>
          <div className='w-full flex flex-col items-start justify-center '>
            <h3 className='text-6xl font-semibold'>Thiago Oliveira</h3>
            <h4 className='text-3xl text-[#cccc] ml-2 mt-3'>Front end Developer</h4>
          </div>
          <div>
            <p className='mt-5 ml-2 text-start text-[#cccc] text-base'>Olá, me chamo Thiago Oliveira,
              tenho 19 anos e sou apaixonado por tecnologia.
              me formei de desenvolvimento Full Stack.
              Através Programa de formação Full Stack React e Node,
              <a href='https://programadoresdoamanha.org.br/' className='text-white hover:cursor-pointer' target="_blank"> Programadores do Amanhã. </a>
              E atualmente Curso Análise e Desenvolvimento de Sistemas na <a href="https://www.pucminas.br" className='text-white hover:cursor-pointer' target="_blank">PUC Minas</a>.
            </p>
          </div>
          <div className='w-full flex justify-start gap-5 mt-5 ml-2'>
            <a href='https://www.linkedin.com/in/thiagooliveiradev/' className=' flex items-center gap-2 border p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <p className='mt-1 font-semibold'>Linkedin</p>
            </a>
            <a href='https://www.linkedin.com/in/thiagooliveiradev/' className=' flex items-center gap-2 border p-2 rounded-md hover:cursor-pointer hover-scale' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <p className='mt-1 font-semibold'>Linkedin</p>
            </a>
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
      </div >
    </>
  )
}

export default App
