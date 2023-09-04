import emailjs from '@emailjs/browser';

import Input from './input.tsx';
import Textarea from './textarea.tsx';
import { FormEvent, useEffect, useState } from 'react';
import EmailModal from './emailModal.tsx';
import Spinner from './spinner.tsx';
import { ITranslate } from '../App.tsx';
import data from '../../basicData.json';


const GetInTouchSection = ({ translate }: ITranslate) => {
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const [dataLanguage, setDataLanguage] = useState(data.english);

  useEffect(() => {
    if (!translate) {
      setDataLanguage(data.portuguese)
    } else {
      setDataLanguage(data.english)
    }
  }, [translate]);

  const handleChange = (value: string, param: string) => {
    switch (param) {
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setNumber(value);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };

  const handleEmailSend = async (e: FormEvent) => {
    e.preventDefault();

    if (email && number && message) {
      setVisible(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email_from: email,
          number: number,
          message: message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setVisible(false);
      setIsOpen(true);
    }
  };

  return (
    <section id="get-in-touch" className="w-full relative min-h-[100px] bg-background-black flex flex-col items-center py-20">
      <h2 className="font-raleway font-extrabold text-background-white text-4xl text-center mb-2.5">
        {dataLanguage.getInTouch.title}
      </h2>
      <p className="font-ibmPlexMono text-[#9C9C9C] text-sm">
        {dataLanguage.getInTouch.text}
      </p>
      <form
        onSubmit={(e) => void handleEmailSend(e)}
        className="w-4/6 py-10 flex flex-col justify-start items-center">
        <Input
          id="email"
          inputType="text"
          placeholder={dataLanguage.getInTouch.labels.input.email.placeholder}
          labelTitle={dataLanguage.getInTouch.labels.input.email.title}
          onChange={handleChange}
        />
        <Input
          onChange={handleChange}
          id="mobile"
          inputType="text"
          placeholder={dataLanguage.getInTouch.labels.input.number.placeholder}
          labelTitle={dataLanguage.getInTouch.labels.input.number.title}
        />
        <Textarea
          onChange={handleChange}
          id="message"
          labelTitle={dataLanguage.getInTouch.labels.textArea.message.title}
          placeholder={dataLanguage.getInTouch.labels.textArea.message.placeholder}
        />
        <button
          className="rounded w-80 h-10 mt-6 bg-[#3F8E00] border-2 border-[#62BA1B] text-background-white font-bold text-sm hover:brightness-125 duration-300"
          type="submit">
          Submit {'>'}
        </button>
      </form>
      <EmailModal setIsOpen={setIsOpen} isOpen={isOpen} />
      {visible && <Spinner />}
    </section>
  );
};

export default GetInTouchSection;
