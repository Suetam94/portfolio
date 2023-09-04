import Header from './header.tsx';

import avatar from '../assets/images/perfil.png';
import nodejs from '../assets/images/nodejs.png';
import react from '../assets/images/react.png';
import sql from '../assets/images/sql.png';
import api from '../assets/images/api.png';
import ts from '../assets/images/ts.png';
import data from '../../basicData.json';
import { ITranslate } from '../App.tsx';
import { useEffect, useState } from 'react';

const GeneralInfoSection = ({ translate, setTranslate }: ITranslate) => {
  const [dataLanguage, setDataLanguage] = useState(data.english);

  useEffect(() => {
    if (!translate) {
      setDataLanguage(data.portuguese)
    } else {
      setDataLanguage(data.english)
    }
  }, [translate]);

  return (
    <section
      id="home"
      className="w-full min-h-[100px] bg-background-black flex flex-col items-center pb-10">
      <Header translate={translate} setTranslate={setTranslate}/>
      <div className="lg:w-4/6 flex items-center justify-around gap-20 mt-20 mb-14 lg:flex-row flex-col-reverse sm:w-full px-20 lg:px-0">
        <div className="lg:w-1/2 min-h-[247px] flex flex-col lg:items-start justify-between sm:w-full sm:items-center">
          <h1 className="font-raleway text-background-white font-extrabold text-4xl">
            Mateus Vinícius da Silva
          </h1>
          <p className="font-ibmPlexMono text-[#9C9C9C] text-justify text-sm mt-2.5 mb-8">
            {dataLanguage.presentation.text}
          </p>
          <a
            href="#resume"
            className="w-80 h-16 flex items-center justify-center bg-btn-border-light-green border-btn-border-green rounded text-background-white font-ibmPlexMono text-base font-bold hover:brightness-110 duration-300">
            Let{"'"}s get started {'>'}
          </a>
        </div>
        <div className="w-80">
          <img
            className="w-80 h-80 rounded-full object-cover"
            src={avatar}
            alt="Foto de Mateus Vinícius da Silva"
          />
        </div>
      </div>
      <div className="w-4/6">
        <h3 className="text-background-white font-ibmPlexMono text-sm mb-5">Worked with</h3>
        <div className="flex items-center justify-between">
          <div className="w-40 h-[60px] flex items-center justify-center border-2 border-[#1B1B1B] rounded">
            <img className="h-3/4" src={nodejs} alt="NodeJS" />
          </div>
          <div className="w-40 h-[60px] flex items-center justify-center border-2 border-[#1B1B1B] rounded">
            <img className="h-3/4" src={ts} alt="TypeScript" />
          </div>
          <div className="w-40 h-[60px] flex items-center justify-center border-2 border-[#1B1B1B] rounded">
            <img className="h-3/4" src={sql} alt="Structured Query Language" />
          </div>
          <div className="w-40 h-[60px] flex items-center justify-center border-2 border-[#1B1B1B] rounded">
            <img className="h-3/4" src={react} alt="React" />
          </div>
          <div className="w-40 h-[60px] flex items-center justify-center border-2 border-[#1B1B1B] rounded">
            <img className="h-3/4" src={api} alt="Application Programming Interface" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;
