import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center w-full h-full">
        <main className="flex flex-col w-full h-full">
          <div className="h-[40%] text-white w-full flex flex-col items-center justify-between p-4 rounded-b-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
            <p className="mb-5 text-xl opacity-70"> Your Result</p>
            <div className="mb-3 w-[120px] h-[120px] flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-[#4E21CA]/60 to-[#2421CA]/30">
              <p className="mb-2 text-5xl">76</p>
              <p className="text-xs opacity-70">of 100</p>
            </div>
            <p className="mb-2 text-2xl">Great</p>
            <p className="px-5 mb-3  opacity-70">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="h-[59%] flex flex-col  w-full  p-6">
            <h3 className="mb-4"> Summary</h3>
            <div className="h-full flex flex-col gap-3">
              <div className="flex h-[20%]  items-center justify-between bg-rose-200 bg-opacity-20 rounded-md p-2">
                <div className="flex ">
                  <i className="w-5 mx-2">lol</i>
                  <p className="w-fit mx-2">Reaction</p>
                </div>
                <p className="w-fit ">80 / 100</p>
              </div>

              <div className="flex h-[20%] items-center justify-between bg-yellow-100 rounded-md p-2">
                <div className="flex">
                  <i className="w-5 mx-2">lol</i>
                  <p className="w-fit mx-2">Memory </p>
                </div>
                <p className="w-fit ">92 / 100</p>
              </div>

              <div className="flex h-[20%] items-center justify-between bg-lime-100 rounded-md p-2">
                <div className="flex">
                  <i className="w-5 mx-2">lol</i>
                  <p className="w-fit mx-2">Verval </p>
                </div>
                <p className="w-fit ">61 / 100</p>
              </div>

              <div className="flex h-[20%] items-center justify-between bg-indigo-100 rounded-md p-2">
                <div className="flex">
                  <i className="w-5 mx-2">lol</i>
                  <p className="w-fit mx-2">Visual </p>
                </div>
                <p className="w-fit ">72 / 100</p>
              </div>
              <a
                href="#"
                className="h-[50px] flex text-white justify-center items-center bg-[#303B5A] rounded-full p-2"
              >
                Continue
              </a>
            </div>
          </div>
        </main>

        <footer className="flex flex-col text-xs h-fit w-full mb-2 items-center">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by{" "}
            <a
              href="https://github.com/ReneOsvaldoCamachoFernandez"
              target="_blank"
            >
              Rene Osvaldo Camacho Fernandez
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
