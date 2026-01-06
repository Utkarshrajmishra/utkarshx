import Image from 'next/image';
import SpotifyLogo from '../svgs/Spotify';

const Spotify = () => {
  return (
    <section className="mt-8 gap-3 bg-[#131313] rounded-md border border-neutral-700 flex items-center p-3 h-fit w-full">
     
      <Image
        src="/assets/linking-park.jpg"
        alt="Spotify"
        width={50}
        height={50}
        className="size-14 rounded-md border border-neutral-400 shrink-0"
      />

      <div className="flex flex-col justify-center gap-1">
        <div className="flex items-center gap-2 text-sm leading-none">
          <SpotifyLogo className="size-4.5  bg-green-400 rounded-sm" />
          <p className="text-[0.8rem] text-neutral-400">Last Played</p>
        </div>

        <div className="flex mt-1 flex-col leading-tight">
          <p className="font-semibold text-[0.91rem] transition-all ease-in-out hover:text-green-400 hover:underline cursor-pointer">In The End</p>
          <p className="mt-0.5 text-[0.8rem] text-neutral-400">by Linking Park</p>
        </div>
      </div>
    </section>
  );
};

export default Spotify;
