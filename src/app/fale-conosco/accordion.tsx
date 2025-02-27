'use client'
import { useState } from "react"

type AccordionProps = {
  pergunta: string
  resposta: string
}

export default function Accordion({ pergunta, resposta } : AccordionProps){
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="p-5 rounded mb-5 border odd:bg-violet-100 border-violet-300">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className=" flex justify-between w-full"
      >
        <span className="font-bold text-xl cursor-pointer text-start">
          {pergunta}
        </span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "grid-rows-1 opacity-100" : "grid-rows-0 opacity-0"
        }`}
      >
        <div
          className={`${
            accordionOpen ? "block" : "hidden"
          }  mt-5 text-gray-500`}
        >
          {resposta}
        </div>
      </div>
    </div>
  );
}
