import React from "react";

export default function WelcomeSection() {
  return (
    <div className="min-h-screen bg-[url('/assets/main-background.png')] relative bg-bottom bg-cover">
      <div
        id="title-welcome"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src="/assets/title-welcome.png"
          alt="rey"
          width={600}
          height={600}
          className="mx-auto"
        />
      </div>

      <div
        id="butterfly"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between w-11/12"
      >
        <img
          src="/assets/butterfly-left.png"
          alt="butterfly"
          width={300}
          height={300}
        />
        <img
          src="/assets/butterfly-right.png"
          alt="butterfly"
          width={300}
          height={300}
        />
      </div>

      <div
        id="mascots"
        className="flex flex-row justify-between items-center w-7/12 absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col">
          <img src="/mascots/rey.png" alt="rey" width={250} height={250} />
        </div>
        
        <div className="flex flex-col">
          <img
            src="/mascots/vanila.png"
            alt="vanila"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
