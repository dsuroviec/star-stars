import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  SparklesIcon,
  SunIcon,
  PaperAirplaneIcon,
  VideoCameraIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import Logo from "../components/Logo";

const Home: NextPage = (p) => {
  interface CharacterProfile {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    birth_year: string;
    starships: string[];
    films: string[];
    species: string[];
  }

  const [searchedValue, setSearchedValue] = useState<string>("");
  const [characterProfile, setCharacterProfile] =
    useState<CharacterProfile | null>(null);
  const [showError, setShowError] = useState(false);
  const {
    name,
    height,
    mass,
    hair_color,
    birth_year,
    starships,
    films,
    species,
  } = characterProfile || {};

  // controls dark/light mode, and favicon to match up with mode
  const { theme, setTheme } = useTheme();
  const [fav, setFav] = useState(theme === "dark" ? "/vader.ico" : "/yoda.ico");

  return (
    <>
      <button
        className={`absolute top-1 right-1 p-2 ${
          theme === "dark" ? "hover:text-yellow-300" : "hover:text-indigo-500"
        }`}
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
            setFav("/yoda.ico");
          } else {
            setTheme("dark");
            setFav("/vader.ico");
          }
        }}
        aria-label="Change theme"
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <SparklesIcon className="w-6 h-6" />
        )}
      </button>

      <Head>
        <title>Star Scout</title>
        <link rel="icon" href={fav} />
      </Head>
      <div className="max-w-[600px] flex flex-col mx-auto justify-center h-screen relative p-2 ">
        <header className="block mb-10">
          <Logo />
        </header>
        <main>
          <section id="Character" className="relative">
            <div className=" bg-green-500 dark:bg-red-600 rounded-lg absolute -inset-1.5  blur"></div>
            <div className="bg-green-300 relative rounded-xl p-4 dark:bg-[#161617] ">
              <h1 className="text-center relative h-10 font-extrabold text-3xl">
                {name}
              </h1>
              <div className="flex gap-10 min-h-[350px] p-8">
                <div className="basis-1/2">
                  <h2 className="underline ">About Me</h2>
                  <ul className="">
                    <li className="flex items-center">
                      <UserIcon className="mr-2 h-3 w-3" />
                      Height:&nbsp;{height}cm
                    </li>
                    <li className="flex items-center">
                      <UserIcon className="mr-2 h-3 w-3" />
                      Weight:&nbsp;{mass}kg
                    </li>
                    <li className="flex items-center">
                      <UserIcon className="mr-2 h-3 w-3" />
                      Hair Color:&nbsp;{hair_color}
                    </li>
                    <li className="flex items-center">
                      <UserIcon className="mr-2 h-3 w-3" />
                      Born:&nbsp;{birth_year}
                    </li>

                    <li className="flex items-center">
                      <UserIcon className="mr-2  h-3 w-3 flex" />
                      Species:&nbsp;
                    </li>
                    <ul className="block list-disc ml-8">
                      {species?.map((species, index) => (
                        <li key={index}>{species}</li>
                      ))}
                    </ul>
                  </ul>
                </div>
                <div className=" basis-1/2 flex flex-col  h-unset ">
                  <div className=" basis-1/2">
                    <h2 className="underline">Appeared In</h2>
                    <ul className="">
                      {films?.map((film, index) => (
                        <li key={index} className="flex items-center">
                          <VideoCameraIcon className="mr-2 animate-pulse h-3 w-3" />
                          {film}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="basis-1/2">
                    <h2 className="underline">Starships&nbsp;Flown</h2>
                    <ul className="">
                      {starships?.map((starship, index) => (
                        <>
                          <li key={index} className="flex items-center">
                            <PaperAirplaneIcon className="mr-2 animate-spin h-3 w-3" />
                            {starship}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <form
            className="mt-10 block sm:flex"
            onSubmit={(e) => {
              e.preventDefault();
              // Get the the searched character
              const characterProfile = fetch(
                `/api/profile?search=${searchedValue}`
              )
                .then((response) => {
                  if (!response.ok) {
                    throw new Error();
                  }
                  return response.json();
                })
                .then(setCharacterProfile)
                .catch(() => setShowError(true));
            }}
          >
            <Input
              className="mr-2 w-full sm:grow"
              placeholder="Enter the name of a character..."
              value={searchedValue}
              onChange={(e) => {
                setShowError(false);
                setSearchedValue(e.target.value);
              }}
              aria-label="Search"
            ></Input>
            <Button
              disabled={searchedValue ? false : true}
              className="w-full mt-4 sm:mt-0 sm:w-fit"
              aria-label="Search Input"
            >
              Lookup&nbsp;Character
            </Button>
          </form>
          {showError && (
            <p className="mt-2 text-red-700">
              No match found, please try something else
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
