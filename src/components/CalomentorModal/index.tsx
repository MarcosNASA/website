import React, { useEffect, useState } from 'react';
import {
  MentorCalomentor,
  Mentorship,
  MentorshipResponse,
  TimeSlot,
  Topic,
} from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import TopicBadge from '../TopicBadge';
import {
  faMapMarkerAlt,
  faClock,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addMonths } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import es from 'date-fns/locale/es';
import { useSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { createMentorship } from '@/lib/calomentorApi';
registerLocale('es', es);

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  mentor: MentorCalomentor;
  topics: Topic[];
  slots: TimeSlot[];
};

type FormInputs = {
  discordID: string;
  discordUser: string;
  email: string;
  name: string;
  info: string;
};

const _getTimes: (slots: TimeSlot[], date: Date) => Date[] = (
  slots: TimeSlot[],
  date: Date,
) => {
  return slots?.reduce((times, slot) => {
    const slotDate = new Date(slot.date);
    if (slotDate.toDateString() === date.toDateString()) {
      times.push(new Date(slot.date));
    }
    return times;
  }, []);
};

const _getDates: (slots: TimeSlot[]) => Date[] = (slots: TimeSlot[]) => {
  return slots?.map((s) => {
    return new Date(s.date);
  });
};

const CalomentorModal: React.FC<ModalProps> = ({
  isOpen,
  close,
  mentor: { full_name, url_photo, skills, id, about_me },
  topics,
  slots,
}) => {
  const [date, setDate] = useState<Date>();
  const [errorDate, setErrorDate] = useState<boolean>(false);
  const [errorCreate, setErrorCreate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [timesAvailables, setTimesAvailables] = useState<Date[]>(
    _getTimes(slots, startDate),
  );

  const [session] = useSession();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>();

  const findTopicsName = (id: string) => {
    const topic = topics.find((e) => e.value == id);
    return topic.value;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    close();
  };

  const checkDateAvailable = (st, dateSelected) =>
    st?.filter((s) => s.date.toString() === dateSelected?.getTime().toString());

  const onSubmit = async (data: FormInputs) => {
    setErrorDate(false);
    setErrorCreate(false);
    if (checkDateAvailable(slots, date)?.length === 0) {
      return setErrorDate(true);
    }
    setLoading(true);

    const time_slot_id = slots.find(
      (st) => st.date.toString() === date.getTime().toString(),
    );

    if (!time_slot_id.id) {
      return setErrorDate(true);
    }

    const body: Mentorship = {
      mentor_id: id,
      mentee_id: data.discordID,
      mentee_name: data.name,
      mentee_username_discord: data.discordUser,
      mentee_email: data.email,
      info: data.info,
      time_slot_id: time_slot_id.id,
    };
    try {
      await createMentorship(body);
      setLoading(false);
      setSuccess(true);
      return reset();
    } catch (error) {
      setErrorCreate(true);
      return setSuccess(true);
    }
  };

  useEffect(() => {
    setErrorDate(false);
    setErrorCreate(false);
    if (checkDateAvailable(slots, date)?.length === 0) {
      return setErrorDate(true);
    }
  }, [date]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center outline-none lg:p-0 focus:outline-none"
            onClick={handleCloseModal}
            style={{ zIndex: 999 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween' }}
              className="relative w-auto max-w-3xl"
              onClick={handleClick}
            >
              {/* content */}
              <div className="max-h-screen py-4 overflow-y-auto bg-white border rounded-lg shadow-xl outline-none focus:outline-none">
                {/*body*/}
                <div className="absolute right-5">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-6 h-6"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="flex flex-col px-4 sm:flex-row">
                  <div className="flex flex-col flex-1 px-4 my-4 sm:border-r-2 sm:border-gray-300">
                    <div className="flex items-center">
                      <img
                        src={url_photo}
                        alt={full_name}
                        className="w-16 h-16 rounded-full"
                      />
                      <h2 className="pl-3 text-3xl text-green-900">
                        {full_name}
                      </h2>
                    </div>
                    <div className="py-2">
                      {skills &&
                        skills?.map((topic) => (
                          <TopicBadge
                            key={topic}
                            topic={findTopicsName(topic)}
                          />
                        ))}
                      <p className="py-2 text-gray-800">{about_me}</p>
                      <div className="py-8">
                        <div className="flex items-center py-1">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="w-6 h-6"
                          />
                          <span className="pl-2">
                            Discord de FEC - Salas de Mentorías
                          </span>
                        </div>
                        {errorDate ? (
                          <span className="pl-2">
                            Debes seleccionar una fecha y hora que este
                            disponible para le mentoria
                          </span>
                        ) : (
                          date && (
                            <div className="flex items-center py-1">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="w-6 h-6"
                              />
                              <span className="pl-2">
                                {date.toLocaleString()}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 items-center justify-center p-4">
                    <h2>Selecciona una fecha para tu mentoría</h2>
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date) => {
                        setTimesAvailables(_getTimes(slots, date));
                        setDate(date);
                        return setStartDate(date);
                      }}
                      includeDates={_getDates(slots)}
                      includeTimes={
                        timesAvailables?.length > 0 ? timesAvailables : []
                      }
                      locale="es"
                      showTimeSelect
                      className="custom_input"
                      minDate={new Date()}
                      dateFormat="dd/MM/yyyy HH:mm"
                      timeIntervals={15}
                    />
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col w-full bg-white rounded"
                    >
                      <input
                        type="text"
                        defaultValue={(session && session.user.id) || ''}
                        readOnly
                        hidden
                        {...register('discordID', { required: true })}
                      />
                      <div className="px-5 mb-4">
                        <label className="block mb-2 text-lg font-bold md:text-1xl">
                          Usuario de Discord
                        </label>
                        <div className="relative">
                          <input
                            className="w-full px-3 py-3 text-sm leading-tight text-gray-700 placeholder-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Ingresa tu usuario de Discord"
                            autoComplete="off"
                            defaultValue={(session && session.user.name) || ''}
                            readOnly
                            {...register('discordUser', {
                              required: 'El usuario es requerido',
                            })}
                          />
                        </div>
                      </div>
                      <div className="px-5 mb-4">
                        <label className="block mb-2 text-lg font-bold md:text-1xl">
                          Email
                        </label>
                        <input
                          className="w-full px-3 py-3 text-sm leading-tight text-gray-700 placeholder-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                          type="email"
                          placeholder="Ingresa tu email"
                          autoComplete="off"
                          readOnly
                          defaultValue={(session && session.user.email) || ''}
                          {...register('email', { required: true })}
                        />
                        {errors.email && (
                          <p className="pl-1 text-sm text-red-600">
                            Email es requerido
                          </p>
                        )}
                      </div>
                      <div className="px-5 mb-4">
                        <label className="block mb-2 text-lg font-bold md:text-1xl">
                          Nombre*
                        </label>
                        <input
                          className="w-full px-3 py-3 text-sm leading-tight text-gray-700 placeholder-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Ingresa tu nombre"
                          autoComplete="off"
                          {...register('name', { required: true })}
                        />
                        {errors.name && (
                          <p className="pl-1 text-sm text-red-600">
                            Nombre es requerido
                          </p>
                        )}
                      </div>
                      <div className="px-5 mb-4">
                        <label className="block mb-2 text-lg font-bold md:text-1xl">
                          Contanos*
                        </label>
                        <textarea
                          className="w-full px-3 py-3 text-sm leading-tight text-gray-700 placeholder-gray-700 border border-gray-500 rounded appearance-none focus:outline-none focus:shadow-outline"
                          placeholder="Ingresa tu nombre"
                          autoComplete="off"
                          {...register('info', { required: true })}
                          maxLength={450}
                        />
                        {errors.info && (
                          <p className="pl-1 text-sm text-red-600">
                            Nombre es requerido
                          </p>
                        )}
                      </div>

                      {!success ? (
                        <div
                          className={
                            errorCreate
                              ? 'flex justify-between'
                              : 'flex justify-end'
                          }
                        >
                          {errorCreate && (
                            <div>
                              <span>
                                Hubo un error al registrar tu mentoría.
                              </span>
                            </div>
                          )}
                          <div className="flex items-center justify-end p-2 rounded-b">
                            <button
                              className="px-6 py-2 text-lg text-white border-0 rounded bg-primary focus:outline-none hover:bg-primarydark"
                              type="submit"
                              style={{ transition: 'all .15s ease' }}
                              disabled={errorDate}
                            >
                              {loading ? (
                                <div className=" flex justify-center items-center px-9 py-1 text-lg text-white border-0 rounded bg-primary">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                </div>
                              ) : (
                                'Confirmar'
                              )}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span>
                            Tu mentoría se ha registrado correctamente, para
                            confirmar la mentoría se te enviará un mail.
                          </span>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            style={{ zIndex: 500 }}
            className="fixed inset-0 w-screen h-screen bg-black opacity-30"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CalomentorModal;
