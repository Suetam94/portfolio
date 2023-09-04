import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Spinner from './spinner.tsx';

import data from '../../basicData.json';
import { ITranslate } from '../App.tsx';

const ProjectsSection = ({ translate }: ITranslate) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [visible, setVisible] = useState<boolean>(false);
  const [dataLanguage, setDataLanguage] = useState(data.english);

  useEffect(() => {
    if (!translate) {
      setDataLanguage(data.portuguese)
    } else {
      setDataLanguage(data.english)
    }
  }, [translate]);

  const handleRequest = async (): Promise<AxiosResponse> => {
    return await axios.get('https://api.github.com/search/repositories?q=user%3ASuetam94', {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
  };

  useEffect(() => {
    void (async () => {
      setVisible(true);
      const response = await handleRequest();

      setResponse(response);
      setVisible(false);
    })();
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-[100px] bg-background-black flex flex-col items-center py-20">
      <div className="w-4/6 flex flex-col items-center">
        <div className="mb-16">
          <h2 className="font-raleway font-extrabold text-background-white text-4xl text-center mb-2.5">
            {dataLanguage.projects.title}
          </h2>
          <p className="font-ibmPlexMono text-[#9C9C9C] text-sm">
            {dataLanguage.projects.text}
          </p>
        </div>
        <ul className="list-decimal list-inside self-center text-center">
          {response?.data.items.map(
            (
              item: {
                id: number;
                html_url: string;
                name: string;
                language: string;
              },
              index: number
            ) => {
              if (item && data.repositories.items.includes(item.id)) {
                return (
                  <li className="font-ibmPlexMono text-[#9C9C9C] text-sm mb-1" key={index}>
                    <a className="hover:brightness-150 hover:font-bold duration-500" target="_blank" href={item.html_url} rel="noreferrer">
                      {item.name} - ({item.language})
                    </a>
                  </li>
                );
              }
            }
          )}
        </ul>
      </div>
      {visible && <Spinner />}
    </section>
  );
};

export default ProjectsSection;
