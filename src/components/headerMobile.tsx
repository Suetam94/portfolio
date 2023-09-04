import { Offcanvas } from 'react-bootstrap';
import { GithubLogo, LinkedinLogo, WhatsappLogo, XCircle } from '@phosphor-icons/react';

import data from '../../basicData.json';

interface IHeaderMobile {
  dataLanguage: typeof data.english;
  handleChangeLanguage: () => void;
  handleWhatsAppLink: () => string;
  language: string;
  show: boolean;
  setShow: (value: boolean) => void;
}
const HeaderMobile = ({
  dataLanguage,
  handleChangeLanguage,
  language,
  handleWhatsAppLink,
  show,
  setShow
}: IHeaderMobile) => {
  return (
    <>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header className="flex justify-center text-[#9C9C9C]">
          <Offcanvas.Title className="w-full flex justify-between items-center font-bold font-ibmPlexMono color text-[#9C9C9C]">
            <div>Menu</div>
            <XCircle onClick={() => setShow(false)} size={40} color="#9C9C9C" weight="light" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="w-full h-full">
            <ul className="w-full h-full px-24 flex flex-col justify-around items-center font-ibmPlexMono text-sm color text-[#9C9C9C]">
              {dataLanguage.header.menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize hover:brightness-150 duration-500"
                      href={`#${menu.ref}`}>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderMobile;
