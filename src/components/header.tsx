import { GithubLogo, LinkedinLogo, List, WhatsappLogo } from '@phosphor-icons/react';
import data from '../../basicData.json';
import { ITranslate } from '../App.tsx';
import { useEffect, useState } from 'react';
import HeaderMobile from './headerMobile.tsx';

const Header = ({ translate, setTranslate }: ITranslate) => {
  const [dataLanguage, setDataLanguage] = useState(data.english);
  const [language, setLanguage] = useState<string>('Versão em português');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!translate) {
      setLanguage('English version');
      setDataLanguage(data.portuguese);
    } else {
      setLanguage('Versão em português');
      setDataLanguage(data.english);
    }
  }, [translate]);

  const handleChangeLanguage = () => {
    if (setTranslate) {
      setTranslate(!translate);
    }
  };

  const handleWhatsAppLink = (): string => {
    const whatsAppMsgObj: { baseUrl: string; myNumber: string; message: string } = {
      baseUrl: 'https://wa.me',
      myNumber: import.meta.env.VITE_MY_PHONE,
      message: `Hello, I've come from your portfolio website.`
    };

    const message = `${whatsAppMsgObj.baseUrl}/${whatsAppMsgObj.myNumber}?text=${whatsAppMsgObj.message}`;

    return encodeURI(message);
  };

  return (
    <header className="w-full xl:w-3/4 min-h-[70px] bg-background-light-black flex items-center rounded-b">
      <List
        onClick={() => setShow(true)}
        className="block sm:block md:block lg:block xl:hidden 2xl:hidden pl-2.5"
        size={56}
        color="#9C9C9C"
        weight="light"
      />
      <nav className="w-full hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block">
        <ul className="w-full px-24 flex items-center justify-between font-ibmPlexMono text-sm color text-[#9C9C9C]">
          {dataLanguage.header.menu.map((menu, index) => {
            return (
              <li key={index}>
                <a className="capitalize hover:brightness-150 duration-500" href={`#${menu.ref}`}>
                  {menu.item}
                </a>
              </li>
            );
          })}
          <li
            onClick={handleChangeLanguage}
            className="capitalize hover:brightness-150 duration-500 cursor-pointer">
            {language}
          </li>
          <li className="min-w-[100px]">
            <div className="flex w-full items-center justify-between">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:brightness-150 duration-500"
                href="https://www.linkedin.com/in/mateus-vin%C3%ADcius-da-silva-8156301a5/">
                <LinkedinLogo size={20} color="#9C9C9C" weight="light" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:brightness-150 duration-500"
                href="https://github.com/Suetam94">
                <GithubLogo size={20} color="#9C9C9C" weight="light" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:brightness-150 duration-500"
                href={handleWhatsAppLink()}>
                <WhatsappLogo size={20} color="#9C9C9C" weight="light" />
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <HeaderMobile
        dataLanguage={dataLanguage}
        handleChangeLanguage={handleChangeLanguage}
        handleWhatsAppLink={handleWhatsAppLink}
        language={language}
        show={show}
        setShow={setShow}
      />
    </header>
  );
};

export default Header;
