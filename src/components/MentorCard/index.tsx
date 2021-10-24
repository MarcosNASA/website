import { Mentor, TimeSlot, Topic } from '../../lib/types';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import TopicBadge from '../TopicBadge';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CalomentorModal from '../CalomentorModal';
import { getMentorTimeSlots } from '@/lib/calomentorApi';
interface MentorCardProps {
  mentor: Mentor;
  topics: Topic[];
  isLogged: boolean;
  openModal: () => void;
}

const MentorCard: React.FC<MentorCardProps> = ({
  mentor,
  topics,
  isLogged,
  openModal,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slots, setSlots] = useState<TimeSlot[] | null>(null);

  const findTopicsName = (id: string) => {
    const topic = topics.find((e) => e._id == id);
    return topic.title;
  };

  const getTimeSlots = async (mentorId: string) => {
    const timeslots: TimeSlot[] = await getMentorTimeSlots(mentorId);
    return setSlots(timeslots);
  };

  const handleContactButton = async () => {
    await getTimeSlots('121437193309782017');
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: mentor.isActive ? 1 : 0.66 }}
        exit={{ y: -100, opacity: 0 }}
        className="flex flex-col w-full p-4 bg-gray-600 rounded-lg space-between"
      >
        <div className="flex justify-between">
          <div className="flex justify-between w-full">
            <div className="text-gray-50">
              <img
                className="object-cover w-24 h-24 mr-2 bg-gray-300 rounded-full"
                src={`${mentor.photo.src}?h=200`}
                alt={`${mentor.name} Avatar`}
              />
            </div>

            <div>
              <div className="mb-4">
                {!mentor.isActive ? (
                  <button className="text-xs uppercase cursor-not-allowed btn btn-secondary">
                    No Disponible
                  </button>
                ) : mentor.isActive && mentor.calendly && isLogged ? (
                  // <Link href={mentor.calendly}>
                  //   <a
                  //     target="_blank"
                  //     className="text-xs uppercase border text-gray-50 border-gray-50 btn hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300"
                  //   >
                  //     <span>Solicitar mentoría</span>
                  //   </a>
                  // </Link>
                  <button
                    onClick={() => handleContactButton()}
                    className="text-xs uppercase border text-gray-50 border-gray-50 btn hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300"
                  >
                    Solicitar mentoría
                  </button>
                ) : (
                  <button
                    onClick={() => openModal()}
                    className="text-xs uppercase border text-gray-50 border-gray-50 btn hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300"
                  >
                    Solicitar mentoría
                  </button>
                )}
              </div>
              <div className="flex mt-2">
                {mentor.web && (
                  <Link href={mentor.web}>
                    <a target="_blank" className="w-8 h-8 text-gray-50">
                      <FontAwesomeIcon className="w-4 h-4" icon={faGlobe} />
                    </a>
                  </Link>
                )}
                {mentor.linkedin && (
                  <Link href={mentor.linkedin}>
                    <a target="_blank" className="w-8 h-8 text-gray-50">
                      <FontAwesomeIcon
                        className="w-4 h-4"
                        icon={faLinkedinIn}
                      />
                    </a>
                  </Link>
                )}
                {mentor.github && (
                  <Link href={mentor.github}>
                    <a target="_blank" className="w-8 h-8 text-gray-50">
                      <FontAwesomeIcon className="w-4 h-4" icon={faGithubAlt} />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-50">
              {mentor.name}
            </h2>
          </div>
          <div className="flex">
            <div>
              <p className="text-xs leading-relaxed text-gray-100 md:min-h-64">
                {mentor.description ? mentor.description : '---'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap my-3 md:justify-start">
            {mentor.topics &&
              mentor.topics?.map((topic) => (
                <TopicBadge
                  key={topic._key}
                  topic={findTopicsName(topic._ref)}
                />
              ))}
          </div>
        </div>
      </motion.div>
      <CalomentorModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        mentor={mentor}
        topics={topics}
        slots={slots}
      />
    </>
  );
};

export default MentorCard;
