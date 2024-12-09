import React from "react";


export default function HomePage() {

  return (
    <div className="min-h-[100dvh] bg-[url('/assets/home-page.png')] bg-cover bg-center">
      <div className="grid grid-cols-2 place-items-center space-x-8 absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <a className="hover:cursor-pointer" href="/materi">
          <img
            src="/buttons/btn-materi.png"
            alt="games"
            width={380}
            height={380}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>
        <a className="hover:cursor-pointer" href="/games">
          <img
            src="/buttons/btn-games.png"
            alt="games"
            width={380}
            height={380}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>
        <a className="hover:cursor-pointer col-span-2 mt-10" href="/assets/contoh-soal/Kumpulan Soal Termokimia_Media.pdf" download>
          <img
            src="/buttons/btn-soal.png"
            alt="games"
            width={380}
            height={380}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>
      </div>
      
    </div>
  );
}
