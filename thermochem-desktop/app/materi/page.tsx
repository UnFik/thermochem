"use client";

import { defineStepper } from "@stepperize/react";
import React from "react";
import MainMaterialPage from "@/app/_sections/material/main";
import IntroductionSection from "@/app/_sections/overview/introduction";
import InstructionSection from "@/app/_sections/overview/instruction";
import InformationSection from "@/app/_sections/overview/information";
import ObjectiveSection from "@/app/_sections/overview/objective";
import ShinyButton from "@/components/ui/shiny-button";
import { useRouter } from "next/navigation";
import TypeOfKalorimeter from "../_sections/material/typeof-kalorimeter";

const { useStepper } = defineStepper(
  {
    id: "main",
    title: "Main",
    description: "Main page",
  },
  {
    id: "typeof-kalorimeter",
    title: "Type of Kalorimeter",
    description: "Type of Kalorimeter",
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
        main: () => <MainMaterialPage />,
        "typeof-kalorimeter": () => <TypeOfKalorimeter />,
        instruction: () => <InstructionSection />,
        information: () => <InformationSection />,
        objective: () => <ObjectiveSection />,
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
