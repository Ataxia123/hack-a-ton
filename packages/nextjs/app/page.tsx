import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to the</span>
            <span className="block text-4xl font-bold">NERD COHERENCE TESTING LAB</span>
          </h1>
          <p className="text-center text-lg">
            This is a testing lab for the NERD COHERENCE project. <br />
            The purpose of this project is to test the coherence of the kEngram data.
          </p>
          <div className="h-[150px] w-[150px] border-2 rounded-full animate-pulse backdrop-hue-rotate-90 text-center cursor-pointer">
            GO
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Upload your kEngram data in the{" "}
                <Link href="/debug" passHref className="link">
                  kEngram Page
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Talk to the hacker Brain{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Brain
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
