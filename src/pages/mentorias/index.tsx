import { GetStaticProps } from 'next';

import MentorList from '../../components/MentorList';
import Layout from '../../components/Layout';

import { Mentor, Topic } from '../../lib/types';
import { getAllMentors, getMentoringTopics, getSettings } from '@/lib/api';
import { mentorsQuery, mentorsTopicsQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import SectionHero from '@/components/SectionHero';

type MentorshipsPageProps = {
  mentors: Mentor[];
  topics: Topic[];
  preview?: boolean;
};

const MentorshipsPage: React.FC<MentorshipsPageProps> = ({
  topics: topicsData,
  mentors: mentorsData,
  preview,
}) => {
  const { data: mentors } = usePreviewSubscription(mentorsQuery, {
    initialData: mentorsData,
    enabled: preview,
  });

  const { data: topics } = usePreviewSubscription(mentorsTopicsQuery, {
    initialData: topicsData,
    enabled: preview,
  });

  return (
    <Layout
      title="Mentorías"
      description="El programa de mentorías de FrontendCafé  busca servirte de guía en este camino, conectándote con profesionales y referentes capacitados en los múltiples y diversos temas que engloba el universo de las tecnologías de la información."
      preview={preview}
    >
      <SectionHero
        title="Mentorías"
        paragraph="Conéctate con profesionales y referentes capacitados en los múltiples y diversos temas que engloba el universo de las tecnologías de la información."
        cta="https://frontend.cafe/docs/guia-para-realizar-mentorias"
      />
      <MentorshipsSteps />
      <MentorList topics={topics} mentors={mentors} />
    </Layout>
  );
};

const MentorshipsSteps: React.FC = () => {
  return (
    <section className="text-coolGray-100 body-font">
      <div className="px-5 py-32 lg:px-0">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center mb-6 text-center md:p-4 md:w-1/3 md:mb-0 ">
            <div className="mb-6 text-left md:mb-0">
              <div className="flex items-center mb-2 font-title">
                <div className="flex items-center justify-center w-10 h-10 p-3 mr-2 text-2xl font-semibold rounded-full font-title text-coolGray-900 bg-greenFec">
                  1
                </div>
                <h2 className="text-2xl font-medium font-title">
                  Inicia sesión
                </h2>
              </div>
              <p className="text-lg md:text-xl text-coolGray-400">
                Recuerda que para solicitar una mentoría debes ser parte del
                servidor de Discord de FrontendCafé.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 text-center md:p-4 md:w-1/3 md:mb-0">
            <div className="mb-6 text-left md:mb-0">
              <div className="flex items-center mb-2 font-title">
                <div className="flex items-center justify-center w-10 h-10 p-3 mr-2 text-2xl font-semibold rounded-full font-title text-coolGray-900 bg-greenFec">
                  2
                </div>
                <h2 className="text-2xl font-medium font-title">
                  Encuentra un mentor
                </h2>
              </div>
              <p className="text-lg md:text-xl text-coolGray-400">
                Encuentra un mentor cuyo perfil se ajuste a tus intereses y
                sientas que pueda ayudarte en lo que necesites.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 text-center md:p-4 md:w-1/3 md:mb-0 ">
            <div className="mb-6 text-left md:mb-0">
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center w-10 h-10 p-3 mr-2 text-2xl font-semibold rounded-full font-title text-coolGray-900 bg-greenFec">
                  3
                </div>
                <h2 className="text-2xl font-medium font-title">
                  Agenda la mentoría
                </h2>
              </div>
              <p className="text-lg md:text-xl text-coolGray-400">
                Contacta al mentor a través de su agenda virtual y reserva una
                fecha y hora entre las disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const mentors = await getAllMentors(preview);
  const topics = await getMentoringTopics(preview);
  const settings = await getSettings(preview);

  return {
    props: { mentors, topics, preview, settings },
    revalidate: 1,
  };
};

export default MentorshipsPage;
