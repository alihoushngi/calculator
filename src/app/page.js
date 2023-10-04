import Image from "next/image";
import NumberButton from "./components/NumberButton/NumberButton";
import TopSection from "./components/TopSection/TopSection";
import FuncButton from "./components/FuncButton/FuncButton";

const numbers = [".", "00"];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

const func = ["-", "%", "/", "*"];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-6">
      <h1 className="uppercase font-extrabold text-white">My calculator</h1>
      <div className="bg-[#464455] rounded w-[600px] shadow-all-custom">
        <div className="gap-1 bg-[#1f1a24] p-5 rounded-ss rounded-se">
          <TopSection />
          {/* Screen */}
          <div className="min-w-[80%] min-h-[70px] bg-[#a5a5ac] border-y-8 border-[#706e7d] rounded-xl flex justify-center items-center">
            <div className="bg-[#9ca892] w-[500px] h-[40px] border border-[#969494] rounded"></div>
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
                return <NumberButton number={number} key={index} />;
              })}
            </div>
          </div>
          <div className="w-[35%]">
            <div className="flex gap-4 h-full flex-wrap justify-center">
              {func.map((funcs, index) => {
                return <FuncButton func={funcs} key={index} />;
              })}
              <FuncButton func={"+"} customClass={"h-[100px]"} />
              <FuncButton func={"="} customClass={"h-[50px]"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
