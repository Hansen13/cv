import Sidebar from "./components/cv/sidebar";
import Education from "./components/sections/education";
import Profile from "./components/sections/profile";
import WorkExperience from "./components/sections/workExperience";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col mx-auto drop-shadow-2xl min-w-[600px] w-screen md:max-w-300 min-h-screen print:h-[calc(2*1140px)]">
      <div className="md:w-96 w-full print:float-left">
        <Sidebar></Sidebar>
      </div>
      <div className="flex flex-col bg-white w-full text-black p-6 gap-4 print:h-auto">
        <Profile></Profile>
        <WorkExperience></WorkExperience>
        <Education></Education>
      </div>
    </div>
  );
}

//
