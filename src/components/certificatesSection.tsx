import { useEffect, useState } from 'react';

import softwareEngineering from '../assets/images/softwareEngineer.png';
import ads1 from '../assets/images/ads1.png';
import ads2 from '../assets/images/ads2.png';
import ads3 from '../assets/images/ads3.png';
import ads4 from '../assets/images/ads4.png';
import ads5 from '../assets/images/ads5.png';
import ads6 from '../assets/images/ads6.png';
import ads7 from '../assets/images/ads7.png';
import data from '../../basicData.json';
import { ITranslate } from '../App.tsx';

const CertificatesSection = ({ translate }: ITranslate) => {
  const imageArray = [softwareEngineering, ads1, ads2, ads3, ads4, ads5, ads6, ads7];
  const [images, setImages] = useState(imageArray.slice(0, 2));

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
      id="certificates"
      className="w-full min-h-[100px] bg-background-white flex flex-col items-center py-20">
      <div className="w-4/6 flex flex-col items-center">
        <h2 className="font-raleway font-extrabold text-4xl mb-2.5">{dataLanguage.certificates.title}</h2>
        <p className="font-ibmPlexMono text-sm text-[#9C9C9C] text-center mb-10">
          {dataLanguage.certificates.text}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7 justify-items-center">
          {images.map((image, index) => (
            <li key={index} className="justify-self-center">
              <img
                src={image}
                alt={
                  image.includes('ads')
                    ? 'System analysis and development certificate'
                    : 'Software engineering proof'
                }
              />
            </li>
          ))}
        </ul>
        <button
          className="w-36 h-10 flex items-center justify-center bg-[#3F8E00] rounded font-ibmPlexMono font-bold text-background-white hover:brightness-125 duration-300"
          type="button"
          onClick={() => setImages(imageArray.slice(0, images.length + 2))}
          style={{
            display: images.length === imageArray.length ? 'none' : ''
          }}>
          {dataLanguage.certificates.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CertificatesSection;
