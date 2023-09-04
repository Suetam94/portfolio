const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[70px] bg-background-light-black flex flex-col items-center justify-center rounded-b">
      <span className="font-ibmPlexMono text-sm text-center text-[#9C9C9C]">
        Created by{' '}
        <a
          className="font-bold"
          target="_blank"
          href="https://github.com/Suetam94"
          rel="noreferrer">
          Mateus Vinícius da Silva - {year}
        </a>
      </span>
      <span className="font-ibmPlexMono text-sm text-center text-[#9C9C9C]">
        Design based on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/community/file/1116316830579955404">
          Figma
        </a>
      </span>
    </footer>
  );
};

export default Footer;
