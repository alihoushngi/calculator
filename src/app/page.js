"use client";

import NumberButton from "./components/NumberButton/NumberButton";
import TopSection from "./components/TopSection/TopSection";
import FuncButton from "./components/FuncButton/FuncButton";
import { useState } from "react";

const numbers = [".", "00"];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

const functions = ["-", "%", "/", "*"];

export default function Home() {
  const [number, setNumber] = useState("");
  const [func, setFunc] = useState("");

  const onFuncHandler = (fn) => {
    setFunc(fn);
    setNumber(number + fn);
  };

  const onButtonHandler = (value) => {
    if (value === "clear") {
      clearLastCharacter();
    } else {
      setNumber(number + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const result = eval(number);
      setNumber(result.toString());
    } catch (error) {
      setNumber("Error");
    }
  };

  const clearFunc = () => {
    setNumber("");
    setFunc("");
  };

  const clearLastCharacter = () => {
    setNumber(number.slice(0, -1)); // Remove the last character from the 'number' state
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-6">
      <h1 className="uppercase font-extrabold text-white">My calculator</h1>
      <div className="bg-[#464455] rounded w-[600px] shadow-all-custom">
        <div className="gap-1 bg-[#1f1a24] p-5 rounded-ss rounded-se">
          <TopSection />
          {/* Screen */}
          <div className="min-w-[80%] min-h-[70px] bg-[#a5a5ac] border-y-8 border-[#706e7d] rounded-xl flex justify-center items-center">
            <div className="bg-[#9ca892] w-[500px] h-[40px] border border-[#969494] rounded">
              <input
                className="w-full h-full bg-transparent p-1 font-custom text-4xl tracking-widest placeholder-gray-500 select-none outline-0 cursor-default"
                value={number}
                readOnly
                placeholder="000000000000000000000000"
              />
            </div>
          </div>
        </div>
        <div className="h-full p-5 flex">
          <div className="w-[65%] flex flex-col items-center">
            <div className="flex gap-1 w-[70%] justify-around mb-5 rounded-xl inner-shadow-custom">
              <div className="w-[40%] h-[25px]">
                <div className="w-4 h-full bg-[#1f1a24] outer-shadow-custom rounded-md"></div>
              </div>
              <div className="w-[40%] h-[25px]">
                <div className="w-4 h-full bg-[#1f1a24] outer-shadow-custom rounded-md"></div>
              </div>
            </div>
            <div className="flex gap-4 h-full flex-wrap-reverse justify-center">
              {numbers.map((number, index) => {
                return (
                  <NumberButton
                    number={number}
                    key={index}
                    onClick={(value) => onButtonHandler(value)}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-[35%]">
            <div className="flex gap-4 h-full flex-wrap justify-center">
              {functions.map((funcs, index) => {
                return (
                  <FuncButton
                    func={funcs}
                    key={index}
                    onClick={(value) => onFuncHandler(value)}
                  />
                );
              })}
              <FuncButton
                func={"+"}
                onClick={(value) => onFuncHandler(value)}
              />
              <FuncButton func={"="} onClick={() => evaluateExpression()} />
              <FuncButton
                func={"Clear"}
                customClass={"h-[50px] w-[200px] basis-[70%]"}
                onClick={() => clearFunc()}
              />
              <FuncButton
                func={"Backspace"}
                customClass={"h-[50px] w-[200px] basis-[70%] text-sm"}
                number="clear"
                onClick={() => onButtonHandler("clear")}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
