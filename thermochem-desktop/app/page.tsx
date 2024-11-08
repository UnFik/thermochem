"use client";

import { defineStepper } from "@stepperize/react";
import React from "react";
import WelcomeSection from "@/app/_sections/overview/welcome";
import IntroductionSection from "@/app/_sections/overview/introduction";
import InstructionSection from "@/app/_sections/overview/instruction";
import InformationSection from "@/app/_sections/overview/information";
import ObjectiveSection from "@/app/_sections/overview/objective";
import ShinyButton from "@/components/ui/shiny-button";
import { useRouter } from "next/navigation";

const { useStepper } = defineStepper(
  {
    id: "welcome",
    title: "Welcome",
    description: "Welcome to the ThermoChem",
  },
  {
    id: "introduce",
    title: "Introduce",
    description: "Introduce to our ThermoChem",
  },
  {
    id: "instruction",
    title: "Instruction",
    description: "Instruction to play the game",
  },
  { id: "information", title: "Information", description: "Information" },
  { id: "objective", title: "Objective", description: "Objective" }
);

export default function Home() {
  const router = useRouter();
  const stepper = useStepper();
  return (
    <React.Fragment>
      {stepper.switch({
        welcome: () => <WelcomeSection />,
        introduce: () => <IntroductionSection />,
        instruction: () => <InstructionSection />,
        information: () => <InformationSection />,
        objective: () => <ObjectiveSection />,
      })}
      {stepper.isFirst ? (
        <ShinyButton
          onClick={stepper.next}
          className="shadow-2xl absolute bottom-1/3 right-[42.2%] px-20 py-6 rounded-3xl transition-all duration-300 bg-[#a1c5c4]"
        >
          Lets Play
        </ShinyButton>
      ) : (
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
      )}
    </React.Fragment>
  );
}
