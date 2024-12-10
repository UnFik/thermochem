"use client";

import { defineStepper } from "@stepperize/react";
import React from "react";
import { useRouter } from "next/navigation";

const { useStepper } = defineStepper(
  {
    id: "main1",
  },
  {
    id: "main2",
  },
  {
    id: "energy",
  },
  {
    id: "hke1",
  },
  {
    id: "hke2",
  },
  {
    id: "hke3",
  },
  {
    id: "sistem-lingkungan1",
  },
  {
    id: "sistem-lingkungan2",
  },
  {
    id: "sistem-lingkungan3",
  },
  {
    id: "sistem-lingkungan4",
  },
  {
    id: "sistem-lingkungan5",
  },
  {
    id: "eksotermik",
  },
  {
    id: "endotermik",
  },
  {
    id: "kalorimeter1",
  },
  {
    id: "kalorimeter2",
  },
  {
    id: "penentuan-reaksi",
  },
  {
    id: "persamaan-termokimia",
  },
  {
    id: "jenis-perubahan-entalpi1",
  },
  {
    id: "jenis-perubahan-entalpi2",
  },
  {
    id: "jenis-perubahan-entalpi3",
  },
  {
    id: "hess1",
  },
  {
    id: "hess2",
  },
  {
    id: "hess3",
  },
  {
    id: "energi-ikatan1",
  },
  {
    id: "energi-ikatan2",
  }
);

export default function Home() {
  const router = useRouter();
  const stepper = useStepper();
  return (
    <React.Fragment>
      {stepper.switch({
        main1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/capaian-page.png')] bg-cover bg-center" />
        ),
        main2: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/topik-pembahasan-page.png')] bg-cover bg-center" />
        ),
        energy: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/energi-page.png')] bg-cover bg-center" />
        ),
        hke1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hke1-page.png')] bg-cover bg-center" />
        ),
        hke2: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hke2-page.png')] bg-cover bg-center" />
        ),
        hke3: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hke3-page.png')] bg-cover bg-center" />
        ),
        "sistem-lingkungan1": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/sistem-lingkungan1-page.png')] bg-cover bg-center" />
        ),
        "sistem-lingkungan2": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/sistem-lingkungan2-page.png')] bg-cover bg-center" />
        ),
        "sistem-lingkungan3": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/sistem-lingkungan3-page.png')] bg-cover bg-center" />
        ),
        "sistem-lingkungan4": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/sistem-lingkungan4-page.png')] bg-cover bg-center" />
        ),
        "sistem-lingkungan5": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/sistem-lingkungan5-page.png')] bg-cover bg-center" />
        ),
        eksotermik: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/eksotermik-page.png')] bg-cover bg-center" />
        ),
        endotermik: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/endotermik-page.png')] bg-cover bg-center" />
        ),
        kalorimeter1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/kalorimeter1-page.png')] bg-cover bg-center" />
        ),
        kalorimeter2: () => (
          <div className="min-h-[100dvh] relative bg-[url('/assets/materi/kalorimeter2-page.png')] bg-cover bg-center">
            <div className="absolute right-[9.5rem] bottom-[5.9rem]">
              <iframe
                width="423"
                height="250"
                src="https://www.youtube.com/embed/jix7jSKmTHo?si=64mKceEfFD6Xw9Po"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* <iframe
                src="https://www.youtube.com/watch?v=jix7jSKmTHo"
                frameBorder="0"
                
              /> */}
            </div>
          </div>
        ),
        "penentuan-reaksi": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/penentuan-reaksi-page.png')] bg-cover bg-center" />
        ),
        "persamaan-termokimia": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/persamaan-termokimia-page.png')] bg-cover bg-center" />
        ),
        "jenis-perubahan-entalpi1": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/jenis-perubahan-entalpi1-page.png')] bg-cover bg-center" />
        ),
        "jenis-perubahan-entalpi2": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/jenis-perubahan-entalpi2-page.png')] bg-cover bg-center" />
        ),
        "jenis-perubahan-entalpi3": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/jenis-perubahan-entalpi3-page.png')] bg-cover bg-center" />
        ),
        hess1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hess1-page.png')] bg-cover bg-center" />
        ),
        hess2: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hess2-page.png')] bg-cover bg-center" />
        ),
        hess3: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/hess3-page.png')] bg-cover bg-center" />
        ),
        "energi-ikatan1": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/energi-ikatan1-page.png')] bg-cover bg-center" />
        ),
        "energi-ikatan2": () => (
          <div className="min-h-[100dvh] bg-[url('/assets/materi/energi-ikatan2-page.png')] bg-cover bg-center" />
        ),
        // "typeof-kalorimeter": () => <TypeOfKalorimeter />,
        // instruction: () => <InstructionSection />,
        // information: () => <InformationSection />,
        // objective: () => <ObjectiveSection />,
      })}
      <>
        <div className="">
          {stepper.isFirst ? null : (
            <button
              onClick={stepper.prev}
              className="absolute bottom-[45%] left-10"
            >
              <img
                src="/buttons/btn-back.png"
                alt="back"
                width={100}
                height={100}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
          )}
          <button
            onClick={stepper.isLast ? () => router.push("/home") : stepper.next}
            className="absolute bottom-[45%] right-10"
          >
            <img
              src="/buttons/btn-next.png"
              alt="next"
              width={100}
              height={100}
              className="hover:scale-110 transition-all duration-300"
            />
          </button>
        </div>
      </>
    </React.Fragment>
  );
}
