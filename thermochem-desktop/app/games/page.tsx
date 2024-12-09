"use client";

import { defineStepper } from "@stepperize/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const { useStepper } = defineStepper(
  {
    id: "game1",
  },
  {
    id: "game2",
  },
  {
    id: "title1",
  },
  {
    id: "question1",
  },
  {
    id: "answer1",
  },
  {
    id: "question2",
  },
  {
    id: "answer2",
  },
  {
    id: "question3",
  },
  {
    id: "answer3",
  },
  {
    id: "question4",
  },
  {
    id: "answer4",
  },
  {
    id: "result1",
  },
  {
    id: "question5",
  },
  {
    id: "answer5",
  },
  {
    id: "question6",
  },
  {
    id: "answer6",
  },
  {
    id: "question7",
  },
  {
    id: "answer7",
  },
  {
    id: "question8",
  },
  {
    id: "answer8",
  },
  {
    id: "result2",
  },
  {
    id: "question9",
  },
  {
    id: "answer9",
  },
  {
    id: "question10",
  },
  {
    id: "answer10",
  },
  {
    id: "question11",
  },
  {
    id: "answer11",
  },
  {
    id: "question12",
  },
  {
    id: "answer12",
  },
  {
    id: "result3",
  }
);

// Interface untuk jawaban
interface Answer {
  questionId: string;
  isCorrect: boolean;
  selectedAnswer: string;
}

// Tambahkan interface untuk pilihan jawaban
interface AnswerChoice {
  id: string;
  text: string;
}

const answerLevel = [
  "C",
  "A",
  "B",
  "B",
  //
  "A",
  "B",
  "C",
  "C",
  //
  "A",
  "A",
  "B",
  "C",
];

// Definisikan pilihan jawaban untuk setiap pertanyaan
const questionChoices: { [key: string]: AnswerChoice[] } = {
  question1: [
    {
      id: "A",
      text: "Hanya bergantung pada saat reaksi yang berlangsung lama",
    },
    { id: "B", text: "Hanya bergantung pada keadaan awal saja" },
    { id: "C", text: "Hanya bergantung pada keadaan awal dan akhir reaksi" },
  ],
  question2: [
    { id: "A", text: "1 dan 2" },
    { id: "B", text: "2 dan 3" },
    { id: "C", text: "3 dan 4" },
  ],
  question3: [
    {
      id: "A",
      text: "Reaksinya eksoterm karena kalor lingkungan mengalir ke sistem",
    },
    {
      id: "B",
      text: "Reaksinya eksoterm karena kalor sistem mengalir ke lingkungan",
    },
    {
      id: "C",
      text: "Reaksinya endoterm karena kalor sistem mengalir ke lingkungan",
    },
  ],
  question4: [
    { id: "A", text: "Air" },
    { id: "B", text: "Gelas Kimia" },
    { id: "C", text: "Padatan ammonium klorida" },
  ],
  question5: [
    { id: "A", text: "-42,616 kJ/mol" },
    { id: "B", text: "-10,654 kJ/mol" },
    { id: "C", text: "-32,425 kJ/mol" },
  ],
  question6: [
    { id: "A", text: "a.png" },
    { id: "B", text: "b.png" },
    { id: "C", text: "c.png" },
  ],
  question7: [
    { id: "A", text: "391,2 kJ" },
    { id: "B", text: "46,11 kJ" },
    { id: "C", text: "390,9 kJ" },
  ],
  question8: [
    { id: "A", text: "+ 92 kJ" },
    { id: "B", text: "- 46 kJ" },
    { id: "C", text: "+ 46 kJ" },
  ],
  question9: [
    { id: "A", text: "518,02 kJ" },
    { id: "B", text: "151 kJ" },
    { id: "C", text: "744,62 kJ" },
  ],
  question10: [
    { id: "A", text: "- 530 kJ" },
    { id: "B", text: "-390 kJ" },
    { id: "C", text: "- 578 kJ" },
  ],
  question11: [
    { id: "A", text: "- 33,44  kJ" },
    { id: "B", text: "- 66,88 kJ" },
    { id: "C", text: "- 225,7 kJ" },
  ],
  question12: [
    { id: "A", text: "- 137 kJ" },
    { id: "B", text: "+ 280 kJ" },
    { id: "C", text: "- 135 kJ" },
  ],
};

export default function Games() {
  const router = useRouter();
  const stepper = useStepper();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Fungsi untuk menangani jawaban
  const handleAnswer = (questionNumber: number, selectedAnswer: string) => {
    const questionId = `question${questionNumber}`;
    const correctAnswer = answerLevel[questionNumber - 1];
    const isCorrect = selectedAnswer === correctAnswer;

    setCurrentAnswer(selectedAnswer);
    setShowResult(true);
    setAnswers([...answers, { questionId, isCorrect, selectedAnswer }]);

    setTimeout(() => {
      setShowResult(false);
      setCurrentAnswer(null);
      stepper.next();
    }, 500);
  };

  return (
    <React.Fragment>
      {stepper.switch({
        game1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/game1-page.png')] bg-cover bg-center" />
        ),
        game2: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/game2-page.png')] bg-cover bg-center" />
        ),
        title1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level1/level1-title-page.png')] bg-cover bg-center">
            <button
              className="absolute bottom-[24%] left-[42%]"
              onClick={stepper.next}
            >
              <img
                src="/buttons/btn-next-level.png"
                alt="back"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
          </div>
        ),
        question1: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level1/soal1-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question1.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(1, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[0]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer1: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level1/pembahasan1-page.png')] bg-cover bg-center" />
        ),
        question2: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level1/soal2-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question2.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(2, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[1]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer2: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level1/pembahasan2-page.png')] bg-cover bg-center" />
        ),
        question3: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level1/soal3-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question3.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(3, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[2]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer3: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level1/pembahasan3-page.png')] bg-cover bg-center" />
        ),
        question4: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level1/soal4-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question4.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(4, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[3]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer4: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level1/pembahasan4-page.png')] bg-cover bg-center" />
        ),
        result1: () => {
          const correctCount = answers.filter(
            (answer) => answer.isCorrect
          ).length;

          if (correctCount >= 4) {
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/success-page.png')] bg-cover bg-center">
                <button
                  className="absolute bottom-[24%] left-[42%]"
                  onClick={() => {
                    stepper.next();
                    setAnswers([]);
                  }}
                >
                  <img
                    src="/buttons/btn-next-level.png"
                    alt="next"
                    width={170}
                    height={170}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </button>
              </div>
            );
          } else
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/failed-page.png')] bg-cover bg-center">
                <button
                  className="absolute bottom-[24%] left-[42%]"
                  onClick={() => {
                    stepper.goTo("title1");
                    setAnswers([]);
                  }}
                >
                  <img
                    src="/buttons/btn-retry-level.png"
                    alt="back"
                    width={170}
                    height={170}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </button>
              </div>
            );
        },
        question5: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level2/soal5-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question5.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(5, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[4]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer5: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level2/pembahasan5-page.png')] bg-cover bg-center" />
        ),
        question6: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level2/soal6-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question6.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(6, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[5]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}.{" "}
                  <img
                    src={`/assets/games/level2/answer/${choice.text}`}
                    width={350}
                    alt={choice.text}
                  />
                </Button>
              ))}
            </div>
          </div>
        ),
        answer6: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level2/pembahasan6-page.png')] bg-cover bg-center" />
        ),
        question7: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level2/soal7-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question7.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(7, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[6]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer7: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level2/pembahasan7-page.png')] bg-cover bg-center" />
        ),
        question8: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level2/soal8-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question8.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(8, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[7]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer8: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level2/pembahasan8-page.png')] bg-cover bg-center" />
        ),
        result2: () => {
          const correctCount = answers.filter(
            (answer) => answer.isCorrect
          ).length;

          if (correctCount >= 4) {
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/success-page.png')] bg-cover bg-center">
                <button
                  className="absolute bottom-[24%] left-[42%]"
                  onClick={() => {
                    stepper.next();
                    setAnswers([]);
                  }}
                >
                  <img
                    src="/buttons/btn-next-level.png"
                    alt="next"
                    width={170}
                    height={170}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </button>
              </div>
            );
          } else
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/failed-page.png')] bg-cover bg-center">
                <button
                  className="absolute bottom-[24%] left-[42%]"
                  onClick={() => {
                    stepper.goTo("question5");
                    setAnswers([]);
                  }}
                >
                  <img
                    src="/buttons/btn-retry-level.png"
                    alt="back"
                    width={170}
                    height={170}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </button>
              </div>
            );
        },
        question9: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level3/soal9-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question9.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(9, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[8]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer9: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level3/pembahasan9-page.png')] bg-cover bg-center" />
        ),
        question10: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level3/soal10-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question10.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(10, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[9]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer10: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level3/pembahasan10-page.png')] bg-cover bg-center" />
        ),
        question11: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level3/soal11-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question11.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(11, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[10]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer11: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level3/pembahasan11-page.png')] bg-cover bg-center" />
        ),
        question12: () => (
          <div className="relative min-h-[100dvh] bg-[url('/assets/games/level3/soal12-page.png')] bg-cover bg-center">
            <button
              className="absolute top-5 right-3"
              onClick={stepper.next}
              disabled={showResult}
            >
              <img
                src="/buttons/btn-book.png"
                alt="book"
                width={170}
                height={170}
                className="hover:scale-110 transition-all duration-300"
              />
            </button>
            <div className="absolute bottom-[25%] right-[9%] flex flex-col gap-10 text-start">
              {questionChoices.question12.map((choice) => (
                <Button
                  key={choice.id}
                  variant="answer"
                  size="xl"
                  onClick={() => handleAnswer(12, choice.id)}
                  className={`
                    ${
                      showResult && currentAnswer === choice.id
                        ? choice.id === answerLevel[11]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }
                  `}
                  disabled={showResult}
                >
                  {choice.id}. {choice.text}
                </Button>
              ))}
            </div>
          </div>
        ),
        answer12: () => (
          <div className="min-h-[100dvh] bg-[url('/assets/games/level3/pembahasan12-page.png')] bg-cover bg-center" />
        ),
        result3: () => {
          const correctCount = answers.filter(
            (answer) => answer.isCorrect
          ).length;

          if (correctCount >= 4) {
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/final-page.png')] bg-cover bg-center">
                <div className="absolute bottom-[25%] left-[35.5%] flex gap-40">
                  <button
                    onClick={() => {
                      stepper.next();
                      setAnswers([]);
                    }}
                  >
                    <img
                      src="/buttons/btn-exit.png"
                      alt="next"
                      width={130}
                      height={130}
                      className="hover:scale-110 transition-all duration-300"
                    />
                  </button>
                  <button
                    onClick={() => {
                      router.push("/");
                      setAnswers([]);
                    }}
                  >
                    <img
                      src="/buttons/btn-home.png"
                      alt="next"
                      width={130}
                      height={130}
                      className="hover:scale-110 transition-all duration-300"
                    />
                  </button>
                </div>
              </div>
            );
          } else
            return (
              <div className="relative min-h-[100dvh] bg-[url('/assets/games/failed-page.png')] bg-cover bg-center">
                <button
                  className="absolute bottom-[24%] left-[42%]"
                  onClick={() => {
                    stepper.goTo("question9");
                    setAnswers([]);
                  }}
                >
                  <img
                    src="/buttons/btn-retry-level.png"
                    alt="back"
                    width={170}
                    height={170}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </button>
              </div>
            );
        },
      })}
      <>
        <div className="">
          {stepper.current.id.includes("game") ? (
            <button
              onClick={() => stepper.isFirst ? router.push("/home") : stepper.prev()}
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
          ) : null}
          {stepper.current.id.includes("title") ||
          stepper.current.id.includes("question") ||
          stepper.current.id.includes("result") ? null : (
            <button
              onClick={
                stepper.isLast ? () => router.push("/home") : stepper.next
              }
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
          )}
        </div>
      </>
    </React.Fragment>
  );
}
