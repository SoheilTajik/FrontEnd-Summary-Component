import "./App.css";
import SkillList from "./Components/SkillList";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue">
      <div className="bg-white w-[450px] h-[330px] rounded-3xl flex">
        <aside className="px-4 bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-1/2 rounded-3xl flex flex-col justify-between items-center gap-4 py-8">
          <div className="text-pale-blue text-sm">Your Results</div>
          <div className="text-white flex flex-col justify-center items-center gap-2 w-28 h-28 rounded-full bg-gradient-to-b from-violet-blue to-slate-blue-dark">
            <span className="text-4xl font-bold"> 76 </span>
            <span className="text-xs text-gray-400">of 100</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-white">Great</div>
            <div className="text-pale-blue text-center text-xs">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </aside>
        <div className="px-4 py-8 flex flex-col justify-between w-1/2">
          <h1>Summary</h1>

          <ul className="flex flex-col gap-2">
            <SkillList
              skillName="Reaction"
              currentScore={80}
              maxScore={100}
              bgColor={"bg-orangey-yellow/10"}
            />
            <SkillList
              skillName="Memory"
              currentScore={68}
              maxScore={100}
              bgColor={"bg-green-teal/10"}
            />
            <SkillList
              skillName="Verbal"
              currentScore={94}
              maxScore={100}
              bgColor={"bg-coblat-blue/10"}
            />
            <SkillList
              skillName="Visual"
              currentScore={85}
              maxScore={100}
              bgColor={"bg-light-red/10"}
            />
          </ul>

          <button className="bg-dark-gray-blue px-4 py-2 text-pale-blue rounded-3xl w-full text-sm">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
