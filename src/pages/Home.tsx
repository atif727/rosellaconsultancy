import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import HomePageAccordian from "../components/homePageAccordian";
import FlagBanner from "../components/flagBanner";

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      {/* //* banner */}
      <div className="h-[75vh] flex justify-center items-center">
        <div>
          <h1 className="text-center font-extrabold text-8xl mb-6 ">
            DESTINATION <br />
            ANYWHERE YOU WANT
          </h1>
          <div className="text-center text-3xl">
            <h1 className="mb-6 font-bold text-amber-100 p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-400">
              WE HELP YOU WITH WHATEVER YOU NEED TO REACH YOUR DREAM DESTINATION
            </h1>

            <h1>APPLY NOW FOR JOB/STUDENT VISAS ABROAD !!</h1>
            {/* <Button className="mt-5" size="large" variant="solid" color="cyan">
              APPLY NOW
            </Button> */}
            <button
              onClick={() => navigate("apply")}
              className="border-0 active:bg-cyan-200 active:text-black active:border-0 cursor-pointer hover:bg-cyan-700 text-2xl px-4 py-3 rounded-2xl bg-cyan-400 text-white mt-4"
            >
              APPLY NOW
            </button>
            <button
              onClick={() => navigate("countrys")}
              className="border-0 ml-5 active:bg-fuchsia-400 active:text-black active:border-0 cursor-pointer hover:bg-fuchsia-700 text-2xl px-4 py-3 rounded-2xl bg-fuchsia-400 text-white mt-4"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* //* Flag banner */}

      <FlagBanner />

      {/* //* statistics */}

      <div className="mt-30 text-center">
        <div className="text-6xl mb-10 font-bold">
          OUR SUCCESS RATE IS <span className="text-fuchsia-600">UN</span>
          <span className="text-cyan-500">MATCHED</span>
        </div>
        <div className="xl:flex xl:justify-around text-center py-10">
          <div className="">
            <h2 className="text-9xl font-bold">800+</h2>
            <p className="mt-2 text-5xl font-medium">
              PEOPLE SENT
              <br />
              AND COUNTING
            </p>
          </div>
          <div className="max-xl:mt-16">
            <h2 className="text-9xl font-bold">100%</h2>
            <p className="mt-2 text-5xl font-medium">
              HAPPY AND
              <br />
              SUCCESSFUL CLIENTS
            </p>
          </div>
          <div className="max-xl:mt-16">
            <h2 className="text-9xl font-bold">24/7</h2>
            <p className="mt-2 text-5xl font-medium">
              CONTACT AND
              <br />
              HELP SUPPORT
            </p>
          </div>
        </div>
      </div>

      {/* //* ajaira banner */}

      <div className="mt-20 bg-gradient-to-r from-cyan-500 to-fuchsia-400 h-[40vh] flex justify-center items-center">
        <div className="text-center font-bold">
          <h1 className="text-7xl">
            ENJOY TO YOUR FULLEST
            <br />
            WITH <span className="text-fuchsia-600">NO </span>
            <span className="text-amber-300">WORRIES</span>
          </h1>
          <h1 className="text-5xl mtman-8">
            WE GUARENTEE <span className="text-white">100%</span> SAFETY AND
            GUIDANCE
          </h1>
        </div>
      </div>

      {/* //* The 3 services */}
      <div className="my-30 flex justify-between items-center px-52">
        <div
          onClick={() => navigate("/labourvisa")}
          className="transition-transform duration-500 ease-out scale-100 hover:scale-110 text-center cursor-pointer"
        >
          <img className="w-xs" src="./src/assets/forced-labour.png" alt="" />
          <h1 className="mt-16 text-3xl">LABOUR VISA</h1>
        </div>
        <Divider
          style={{ borderColor: "cyan", height: "400px" }}
          variant="solid"
          type="vertical"
        />
        <div
          onClick={() => navigate("/studentvisa")}
          className="transition-transform duration-500 ease-out scale-100 hover:scale-110 text-center cursor-pointer"
        >
          <img className="w-xs" src="./src/assets/graduate.png" alt="" />
          <h1 className="mt-16 text-3xl">STUDENT VISA</h1>
        </div>
        <Divider
          style={{ borderColor: "cyan", height: "400px" }}
          variant="solid"
          type="vertical"
        />
        <div
          onClick={() => navigate("/touristvisa")}
          className="transition-transform duration-500 ease-out scale-100 hover:scale-110 text-center cursor-pointer"
        >
          <img className="w-xs" src="./src/assets/tourism.png" alt="" />
          <h1 className="mt-16 text-3xl">TOURIST VISA</h1>
        </div>
      </div>

      <div className="mb-28 py-16 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-center text-7xl font-bold mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="flex justify-center items-center">
            <HomePageAccordian />
          </div>
        </div>
      </div>

      <footer className="h-[full] bg-cyan-400 px-24 py-14">
        <div className="flex justify-around items-center mb-7">
          <img className="w-1/8" src="./src/assets/rosella.jpg" alt="" />
          <div className="text-3xl">
            ROSELLA CONSULTANCY
            <br />
            EMAIL: rosellaconsultancy2025@gmail.com
            <br />
            PHONE: +8801611092258
            <br />
            ADDRESS: MOTIJHEEL STATION
          </div>
          <div className="text-3xl">
            OPENS FROM 10 AM TILL 8 PM
            <br />
            OPEN ON SATURDAY TO THURSDAY
            <br />
            <Button type="link">
              <p className="text-2xl">CONTACT US</p>
            </Button>
          </div>
        </div>
        <h1 className="text-center text-2xl text-gray-800">
          © 2025 Rosella Consultancy. All Rights Reserved.
        </h1>
      </footer>
    </section>
  );
}
export default Home;
