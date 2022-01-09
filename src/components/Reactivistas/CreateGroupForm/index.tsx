import Link from 'next/link';
import emailjs from 'emailjs-com';
import { signIn, useSession } from 'next-auth/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ToastNotification from '../../ToastNotification/ToastNotification';

const CreateGroupForm: React.FC = () => {
  const [session] = useSession();

  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const resetState = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    let result: Response;
    try {
      result = await fetch('/api/create-react-group', {
        method: 'POST',
        body: JSON.stringify({ group: data, captain: session.user }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    if (result.ok) {
      setIsSuccess(true);
      reset();
      emailjs
        .send(
          'fec_gmail',
          'new_reactivistas',
          {},
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        )
        .catch((error) => console.error(error));
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      {session ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full grid-cols-2 gap-5 p-4 border-2 rounded border-coolGray-600 text-coolGray-300 sm:px-8 sm:pt-6 sm:pb-8 md:grid bg-coolGray-900 "
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              Nombre del grupo*
            </label>
            <input
              className="input focus:outline-none focus:ring"
              type="text"
              placeholder="Nombre del grupo"
              required
              {...register('name', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              User de Discord
            </label>
            <div className="relative">
              <input
                className="input focus:outline-none focus:ring"
                type="text"
                placeholder="Ingresa tu usuario de Discord"
                value={session.user.name}
                required
                readOnly
                pattern="(.*)#(\d{4})"
                {...register('teamCaptain.id', { required: true })}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Tema*</label>
            <input
              className="input focus:outline-none focus:ring"
              type="text"
              placeholder="Ingresa el tema"
              required
              {...register('topic', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              Material de estudio*
            </label>
            <input
              className="input focus:outline-none focus:ring"
              type="url"
              placeholder="Ingresa un link al material de estudio seleccionado"
              required
              {...register('studyMaterial', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              Estilo de reuniones (incluir horarios)*
            </label>
            <textarea
              rows={5}
              className="input focus:outline-none focus:ring"
              placeholder="Ingresa la dinámica que se va a utilizar en su grupo de estudio"
              required
              {...register('meetings', { required: true })}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              Plan de estudio
            </label>
            <textarea
              rows={5}
              className="input focus:outline-none focus:ring"
              placeholder="Ingresa como va a ser el plan de estudio"
              {...register('plan')}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">
              Fecha tentativa de inicio
            </label>
            <input
              className="input focus:outline-none focus:ring"
              name="startDate"
              type="date"
              {...register('startDate')}
            />
          </div>
          <div className="pt-8">
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar propuesta'}
              </button>
            </div>
            {isSuccess && (
              <ToastNotification type="success" onDidDismiss={resetState}>
                <p>Propuesta enviada ¡Muchas gracias! </p>
              </ToastNotification>
            )}
            {isError && (
              <ToastNotification type="error" onDidDismiss={resetState}>
                <p>Ocurrió un error al enviar la propuesta</p>
              </ToastNotification>
            )}
          </div>
        </form>
      ) : (
        <div className="p-6 border-2 border-gray-600 rounded-md text-coolGray-200">
          Para poder crear un nuevo grupo de Reactivistas es necesario que
          inicies sesión con Discord. <br />
          <br />
          <Link href="/reactivistas">
            <button
              onClick={() =>
                signIn('discord', {
                  callbackUrl: `${window.location.origin}/reactivistas`,
                })
              }
              className="text-xs btn btn-primary md:text-md"
            >
              Iniciar sesión
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CreateGroupForm;
