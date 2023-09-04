import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralInfoSection from './components/generalInfoSection.tsx';
import ResumeSection from './components/resumeSection.tsx';
import ProjectsSection from './components/projectsSection.tsx';
import CertificatesSection from './components/certificatesSection.tsx';
import GetInTouchSection from './components/getInTouchSection.tsx';
import Footer from './components/footer.tsx';
import { useState } from 'react';

export interface ITranslate {
  translate: boolean;
  setTranslate?: (value: boolean) => void;
}

function App() {
  const [translate, setTranslate] = useState<boolean>(true);

  return (
    <>
      <GeneralInfoSection translate={translate} setTranslate={setTranslate} />
      <ResumeSection translate={translate} />
      <ProjectsSection translate={translate} />
      <CertificatesSection translate={translate} />
      <GetInTouchSection translate={translate} />
      <Footer />
    </>
  );
}

export default App;
