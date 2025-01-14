import { Person } from '../../lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileProp {
  profile: Person;
}

const ProfileImage = ({ profile }: ProfileProp) => {
  return (
    <Image
      className="object-cover mx-auto rounded-full h-36 w-36 md:h-32 md:w-32"
      src={`${profile.photo.src}?h=256`}
      alt={`Foto de ${profile.firstName}`}
      width={128}
      height={128}
      placeholder="blur"
      blurDataURL={`${profile.photo.src}?h=50`}
    />
  );
};

const ProfileText = ({ profile }: ProfileProp) => {
  return (
    <h2 className="my-2 text-3xl font-semibold md:text-sm">
      {profile.firstName} {profile.lastName}
    </h2>
  );
};

const StaffCard: React.FC<ProfileProp> = ({ profile }) => {
  return (
    <div className="p-2 text-center transition duration-500 ease-in-out scale-100 hover:scale-110">
      {profile.linkedin ? (
        <Link href={profile.linkedin ?? ''}>
          <a target="_blank" rel="noreferrer">
            {profile.photo.src && <ProfileImage profile={profile} />}
            <ProfileText profile={profile} />
          </a>
        </Link>
      ) : (
        <>
          {profile.photo.src && <ProfileImage profile={profile} />}
          <ProfileText profile={profile} />
        </>
      )}
    </div>
  );
};

export default StaffCard;
