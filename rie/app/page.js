import NavLayout from "./components/Navbar/NavLayout";
import Martin from './images/Martine1.jpg'
import Nick from './images/nick1.jpg'
import Bethuel from './images/Bethuel.jpg'
import ClimateAiMl from './images/cc.png'
import VirtualCoWorker from './images/virtual-coworkers.jpg'
import Image from "next/image";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <NavLayout>
      <section className="w-full">
        <video>
        </video>
        <div className="text-center">
          <h1 className="text-3xl">Research and Innovators Ecosystem</h1>
          <p>Education | Research</p>
        </div>
      </section>
      <section className="bg-gray-100 p-4" id="project">
        <h1 className="mb-4 text-2xl text-center font-semibold">Project Description</h1>
        <div className="flex flex-col md:flex-row w-full gap-7">
          <div className="h-[300px] w-full">
            <Image src={VirtualCoWorker} alt="" className="h-full w-full object-cover rounded-md" />
          </div>
          <div className="w-full">
            <h1 className="text-xl font-medium text-blue-500">Research and Innovators Ecosystem</h1>
            <p>The Research and Innovators Ecosystem is an inclusive platform that facilitate collaboration and resource sharing among researchers, scholars, students, and innovators worldwide. The platform has unique AI-powered partner recommendation that help researchers and innovators acquires partners to collaborate with in a project.
            </p>
            <div className="mt-3">
              <h1 className="text-blue-500 underline">Key Features</h1>
              <ol>
                <li>1. AI-powered recommendation</li>
                <li>2. News, Hackathon and Job Posting</li>
                <li>3. Direct messaging</li>
                <li>4. Chatroom and conference room</li>
                <li>5. User profile</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-semibold text-blue-500">Benefits & Impacts</h1>
          <div className="w-[110px] h-[3px] bg-black"></div>
          <div className="flex flex-col md:flex-row w-full gap-7">
            <div className="w-full">
              <ol className="mt-3">
                <li>1. Global collaboration and knowledge sharing on the trending global issues.</li>
                <li>2. Increased innovation and creativity as a result of the diverse project collaboration.</li>
                <li>3. Increased success rate of project implementation</li>
                <li>4. Reduced Project implementation time.</li>
              </ol>
            </div>
            <div className="w-full h-[350px]">
              <Image src={ClimateAiMl} alt="" className="h-full w-full object-cover rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold text-blue-500">System Users</h1>
            <div className="w-[90px] h-[3px] bg-black"></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-10 justify-center">
            <div className="rounded p-2 w-[400px] bg-white hover:shadow-lg">
              <h1 className="text-blue-500">1. University students</h1>
              <ul className="ml-4">
                <li>. To get project partners (Inter-departmental, inter-university partnership).</li>
                <li>. Share resources and join discussion groups.</li>
                <li>. Check on the trending world-problems that requires innovative solutions.</li>
                <li>. Receive job notifications and hackathon</li>
              </ul>
            </div>
            <div className="bg-white rounded p-2 w-[400px] hover:shadow-lg">
              <h1 className="text-blue-500">2. Researchers and Innovators</h1>
              <ul className="ml-4">
                <li>. To get project partners.</li>
                <li>. Share resources and join discussion groups.</li>
                <li>. Check on the trending world-problems that requires innovative solutions.</li>
                <li>. Receive job notifications and Upcoming Conferences</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-center mt-3 text-blue-500">
            <h1>3. Universities and colleges</h1>
            <h1>4. Research and development centers</h1>
          </div>
        </div>
      </section>
      <section id="team">
        <p className="text-center text-2xl my-3 font-semibold">About the Team</p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 border p-2">
            <div class="bg-gray-200 h-36 w-36 rounded-full mx-auto">
              <Image src={Martin} alt="" className="h-full w-full object-cover rounded-full" />
            </div>
            <div className="mt-3">
              <h1 className="font-bold">Kungu Martine</h1>
              <h3 className="text-[10px] text-blue-600">Machine Learning Expert | Software Developer</h3>
              <p className="text-[13px] mt-2">Research and Publisher of <Link href='https://twitter.com/KunguMartine' className="text-blue-400">Art of Tech NewsLetter</Link></p>
            </div>
            <div className="flex gap-3 mt-3">
              <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
              <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
              <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border xl:w-1/4 p-2">
            <div class="bg-gray-200 h-36 w-36 rounded-full mx-auto">
              <Image src={Nick} alt="" className="h-full w-full object-cover rounded-full" />
            </div>
            <div className="mt-3">
              <h1 className="font-bold">Muholo Nicodemus</h1>
              <h3 className="text-[10px] text-blue-600">Software Developer | Graphic Designer</h3>
              <p className="text-[13px] mt-2">The co-founder of N-TECH Solutions</p>
            </div>
            <div className="flex gap-3 mt-3">
              <Link href="https://www.linkedin.com/in/nicodemus-muholo-b9731b210/"><FaLinkedin /></Link>
              <Link href="https://twitter.com/MuholoNicodemus"><FaXTwitter /></Link>
              <Link href="https://github.com/Nickodee"><FaGithubSquare /></Link>
            </div>
          </div>
          <div class="w-full sm:w-1/2 border md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <div class="bg-gray-200 h-36 w-36 rounded-full mx-auto">
              <Image src={Bethuel} alt="" className="h-full w-full object-cover rounded-full" />
            </div>
            <div className="mt-3">
              <h1 className="font-bold">Bethuel Govoga</h1>
              <h3 className="text-[10px] text-blue-600">Software Developer | Cloud  Engineer</h3>
              <p>The coo</p>
            </div>
            <div className="flex gap-3 mt-3">
              <Link href="https://www.linkedin.com/in/bethuel-govoga-02b95523a/"><FaLinkedin /></Link>
              <Link href="https://twitter.com/MuholoNicodemus"><FaXTwitter /></Link>
              <Link href="https://github.com/Nickodee"><FaGithubSquare /></Link>
            </div>
          </div>
        </div>


      </section>
    </NavLayout>
  );
}
