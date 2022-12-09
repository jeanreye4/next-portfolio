import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import anime_logo from "../public/anime-logo.png";
import Tic_Tac_Toe from "../public/Tic_Tac_Toe.png";
import MARIO from "../public/MARIO.png";
import League_of_Legends from "../public/League_of_Legends.png";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const handleClickMail = () => {
    window.open("malito:reyesjean3068@gmail.com");
  };

  const handleClickGithub = () => {
    window.open("https://github.com/jeanreye4", "_blank");
  };

  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jean-reyes-3027951b8/", "_blank");
  };

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jean Reyes React-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-100">Jean Reyes</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-100"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                  href="https://docs.google.com/document/d/1hsQIq363c7ZCVUBiAQ-Y92-j_I94AGRn/edit#heading=h.gjdgxs"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jean Reyes
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer
            </h3>
          </div>
          <p className="text-gray-900 dark:text-gray-100 text-2xl text-center py-6 ">
            How to get in contact with me
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-900 dark:text-gray-100 cursor-pointer ">
            <AiFillGithub onClick={handleClickGithub} />
            <AiFillLinkedin onClick={handleClickLinked} />
            <a href="malito:ReyesJean3068@gmail.com">
              <AiFillMail />
            </a>
          </div>
          <div>
            <h5 className="text-5xl dark:text-white mt-7 underline text-center">
              About Me
            </h5>
            <div>
              <p className="text-xl py-4 dark:text-white">I am adept at handling multiple design projects in a fast paced environment. Excellent at time management, organization, problem solving and meeting deadlines.</p>
              <p className="dark:text-white text-xl">I have 3 months of experience with frontend, backend, and fullstack web development.  </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">
              What I do when I'm not coding
            </h3>
            <div className="basis-1/3 flex-1">
              <div className="py-5 ">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-white text-xl">
                  My personal interest:
                </p>
                <li className="text-2xl dark:text-white">
                  I am a very Big into traveling the world seeing new cultures
                  and trying new things.
                </li>
                <li className="text-2xl dark:text-white">
                  I am outdoorsy I love playing sports, going on hikes and
                  trying new activities.
                </li>
              </div>
            </div>
          </div>

          <div className="py-3">
            <div className="lg:flex gap-10 ">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <h3 className="text-lg font-medium pt-8 pb-2">BACKEND</h3>
                <p className="py-2">Some random words to take up space</p>
                <h4 className="py-4 text-deal-600">Languages I have used</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Django</p>
                <p className="text-gray-800 py-1">CSS</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <h3 className="text-lg font-medium pt-8 pb-2">FRONTEND</h3>
                <p className="py-2">Some random words to take up space</p>
                <h4 className="py-4 text-deal-600">Languages I have used</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">CSS</p>
                <p className="text-gray-800 py-1">Javascript</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1 ">
              <Image
                src={anime_logo}
                className="rounded-lg object-cover "
                layout="responsive"
              />
              <ul className="flex justify-between">
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none"
                    href="https://github.com/jeanreye4/fullstack-anime-api"
                  >
                    CODE
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none float-right"
                    href="https://fullstack-anime.netlify.app"
                  >
                    WEBSITE
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={Tic_Tac_Toe}
                className="rounded-lg object-cover"
                layout="responsive"
              />
              <ul className="flex justify-between">
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none"
                    href="https://github.com/jeanreye4/tic-tac-toe"
                  >
                    CODE
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none float-right"
                    href="https://frontend-tic-tac-toe-game.netlify.app/"
                  >
                    WEBSITE
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-1/3 flex-1 ">
              <Image
                src={MARIO}
                className="rounded-lg object-cover "
                layout="responsive"
              />
              <ul className="flex justify-between">
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none"
                    href="https://github.com/jeanreye4/Mario-ui-project"
                  >
                    CODE
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none float-right"
                    href="https://api-project-jr.netlify.app/"
                  >
                    WEBSITE
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={League_of_Legends}
                className="rounded-lg object-cover "
                layout="responsive"
              />
              <ul className="flex justify-between">
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none"
                    href="https://github.com/jeanreye4/Legendary-Slayers-FE"
                  >
                    CODE
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 dark:text-gray-300 cursor-pointer list-none float-right "
                    href="https://legendsofleague.netlify.app/"
                  >
                    WEBSITE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
