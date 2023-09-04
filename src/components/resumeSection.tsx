import fineasy from '../assets/images/fineasytech.png';
import webart from '../assets/images/webart.png';
import uoou from '../assets/images/uoou.webp';
import data from '../../basicData.json';
import { ITranslate } from '../App.tsx';
import { useEffect, useState } from 'react';

const ResumeSection = ({ translate }: ITranslate) => {
  const [dataLanguage, setDataLanguage] = useState(data.english);

  useEffect(() => {
    if (!translate) {
      setDataLanguage(data.portuguese)
    } else {
      setDataLanguage(data.english)
    }
  }, [translate]);

  return (
    <section id="resume" className="w-full min-h-[100px] flex flex-col items-center py-20">
      <div className="w-4/6 flex flex-col items-center justify-center mb-14">
        <h2 className="font-raleway font-extrabold text-4xl mb-2.5">{dataLanguage.resume.title}</h2>
        <p className="font-ibmPlexMono text-sm text-[#9C9C9C] text-center">{dataLanguage.resume.text}</p>
      </div>
      <div className="w-4/6">
        <h4 className="font-raleway font-extrabold text-sm mb-2.5">{dataLanguage.resume.subtitle}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 content-center">
          <div className="flex flex-col items-start">
            <a
              target="_blank"
              className="w-16 h-6 my-5 bg-[#FFF6E9] text-[#FFA217] text-xs font-ibmPlexMono font-bold rounded-lg flex items-center justify-center"
              href="https://www.fineasytech.com/"
              rel="noreferrer">
              Fineasy
            </a>
            <span className="font-raleway font-extrabold text-2xl mb-2.5">
              Full Stack Developer (2022 - present)
            </span>
            <ul className="list-disc list-inside text-justify">
              {dataLanguage.experience.fineasy.map((item, index) => (
                <li key={index} className="font-ibmPlexMono text-sm text-[#9C9C9C] mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-center">
            <img src={fineasy} alt="Fineasy Tech" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 content-center my-20">
          <div className="justify-self-center">
            <img src={webart} alt="Webart Group" />
          </div>
          <div className="flex flex-col items-start">
            <a
              target="_blank"
              className="w-16 h-6 my-5 bg-[#D0E6FF] text-[#000AFF] text-xs font-ibmPlexMono font-bold rounded-lg flex items-center justify-center"
              href="https://www.wapstore.com.br/"
              rel="noreferrer">
              webart
            </a>
            <span className="font-raleway font-extrabold text-2xl mb-2.5">
              Front End Developer (2021 - 2022)
            </span>
            <ul className="list-disc list-inside text-justify">
              {dataLanguage.experience.webart.map((item, index) => (
                <li key={index} className="font-ibmPlexMono text-sm text-[#9C9C9C] mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 content-center">
          <div className="flex flex-col items-start">
            <a
              target="_blank"
              className="w-16 h-6 my-5 bg-[#E0FFF8] text-[#2AB090] text-xs font-ibmPlexMono font-bold rounded-lg flex items-center justify-center"
              href="https://www.uoou.com.br/"
              rel="noreferrer">
              Uoou
            </a>
            <span className="font-raleway font-extrabold text-2xl mb-2.5">
              Back End Developer Trainee (2020 - 2021)
            </span>
            <ul className="list-disc list-inside text-justify">
              {dataLanguage.experience.uoou.map((item, index) => (
                <li key={index} className="font-ibmPlexMono text-sm text-[#9C9C9C] mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-center">
            <img src={uoou} alt="Uoou Solutions" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
