"use client";
import { minus, planeRight, plus, search } from "@/consonants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Calender from "./Calender";
import { ContextSearch } from "./MainStateSearchBar/MainStateSearchBar";

function SearchBar({ setopenedSearch }) {
  const { departState, setdepartState, returnState, setreturnState } =
    useContext(ContextSearch);
  const [cl1, setcl1] = useState(new Date());
  const [cl2, setcl2] = useState(
    new Date(cl1.getFullYear(), cl1.getMonth() + 1)
  );
  const router = useRouter();
  const [selectedState, setselectedState] = useState(null);

  const [passengers, setpassengers] = useState([
    { name: "Adults", age: "Age 12 or above", val: 0 },
    { name: "Children", age: "Ages 2 - 12", val: 0 },
    { name: "Infant", age: "Under 2", val: 0 },
  ]);

  const [airClass, setairClass] = useState({
    "Economy Class": false,
    "Premium Economy": false,
    "Business Class": false,
    "First Class": false,
  });
  const [travelClass, settravelClass] = useState(false);

  const [type, settype] = useState("Passenger");

  const [searchData, setsearchData] = useState({
    from: "Karachi(KHI)",
    to: "Islambad(ISB)",
  });

  useEffect(() => {
    let travelers = "";
    let addTraveler = false;
    let travelerCount = 0;
    passengers.forEach((it) => {
      if (addTraveler && it.val) {
        travelerCount += it.val;
        travelers = "";
        travelers = travelerCount + " " + "Travelers";
      } else if (it.val) {
        let name = "";
        it.name === "Adults" && (name = it.name.slice(0, -1));
        it.name === "Children" && (name = "Child");
        it.name === "Infant" && (name = "Infant");
        travelerCount += it.val;
        addTraveler = true;
        travelers = it.val + " " + (it.val > 1 ? it.name : name);
      }
    });

    for (let key in airClass) {
      airClass[key] && (travelers = travelers + " " + key.slice(0, 3));
    }
    settravelClass(travelers);
  }, [airClass, passengers]);

  useEffect(() => {
    if (selectedState === 3) {
      setselectedState(null);
      setTimeout(() => {
        setselectedState(4);
      }, 230);
    } else if (selectedState > 1) {
      setselectedState(3);
    }
  }, [departState, returnState]);

  const ComponentsChild = {
    0: {
      component: (
        <ul className="flex flex-col">
          {[
            "Karachi (KHI)",
            "Islamabad (ISB)",
            "Multan (MLT)",
            "Peshawar (PES)",
            "Gawadar (GAW)",
          ].map((it, i) => {
            return (
              <li
                key={i}
                onClick={(event) => {
                  event.stopPropagation();
                  setsearchData((e) => ({ ...e, from: it }));
                  setselectedState((e) => e + 1);
                }}
                className="flex hover:-bg--devide-line-clr items-center w-full gap-4 h-[77px] px-2.5 rounded-[20px]"
              >
                <span className="w-[56px] flex-center h-[56px] rounded-[16px] -bg--light-gray">
                  {planeRight}
                </span>
                <div className="flex flex-col ">
                  <span className="text-[18px] leading-[23px] font-[500] -text--primary-black">
                    {it}
                  </span>
                  <span className="text-[14px] font-[400] leading-[18px] -text--primary-black">
                    Jinnah International Airport
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ),
      index: 1,
      width: 441,
    },
    1: {
      component: (
        <ul className="flex flex-col">
          {[
            "Karachi (KHI)",
            "Islamabad (ISB)",
            "Multan (MLT)",
            "Peshawar (PES)",
            "Gawadar (GAW)",
          ].map((it, i) => {
            return (
              <li
                key={i}
                onClick={(event) => {
                  event.stopPropagation();
                  setsearchData((e) => ({ ...e, to: it }));
                  setselectedState(null);
                  setTimeout(() => {
                    setselectedState(2);
                  }, 230);
                }}
                className="flex hover:-bg--devide-line-clr items-center w-full gap-4 h-[77px] px-2.5 rounded-[20px]"
              >
                <span className="w-[56px] flex-center h-[56px] rounded-[16px] -bg--light-gray">
                  {planeRight}
                </span>
                <div className="flex flex-col ">
                  <span className="text-[18px] leading-[23px] font-[500] -text--primary-black">
                    {it}
                  </span>
                  <span className="text-[14px] font-[400] leading-[18px] -text--primary-black">
                    Jinnah International Airport
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ),
      index: 2,
      translateX: 236,
      width: 441,
    },
    2: {
      component: (
        <CalenderBig
          cl1={cl1}
          setcl1={setcl1}
          cl2={cl2}
          setcl2={setcl2}
          selectedDate={departState}
          setselectedDate={setdepartState}
          departDate={departState}
          returnDate={returnState}
        />
      ),
      index: 3,
      rounded: "16px",
      height: "417px",
      width: "857px",
      translateX: -30,
      opacityNoAnim: true,
    },
    3: {
      component: (
        <CalenderBig
          cl1={cl1}
          setcl1={setcl1}
          cl2={cl2}
          setcl2={setcl2}
          selectedDate={returnState}
          setselectedDate={setreturnState}
          departDate={departState}
          returnDate={returnState}
          returnSelected={true}
        />
      ),
      index: 4,
      rounded: "16px",
      height: "417px",
      width: "857px",
      translateX: -30,
    },
    4: {
      component: (
        <div className="flex flex-col px-4 py-3">
          <div className="relative rounded-full flex-center border -border--devide-line-clr -bg--light-gray h-[48px] gap-1">
            <motion.button
              initial={{ left: 4.5 }}
              animate={{ left: type === "Passenger" ? 4.5 : 4.5 + 150 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-[140px] h-[40px] shadow-md rounded-[40px] absolute left-1 top-[3px] text-[14px] font-[400] leading-[18px] bg-white border -text--primary-black -border--devide-line-clr "
            >
              {type}
            </motion.button>
            <button
              onClick={() => settype("Passenger")}
              className="text-[14px] w-[140px] h-[40px] font-[400] leading-[18px] -text--primary-gray"
            >
              Passenger
            </button>
            <button
              onClick={() => settype("Cabin Class")}
              className="text-[14px] w-[140px] h-[40px] font-[400] leading-[18px] -text--primary-gray"
            >
              Cabin Class
            </button>
          </div>

          {type === "Passenger" ? (
            <Passengers passengers={passengers} setpassengers={setpassengers} />
          ) : (
            <Cabin airClass={airClass} setairClass={setairClass} />
          )}
        </div>
      ),
      height: "335px",
      width: "358px",
      index: 5,
      rounded: "16px",
      translateX: 0,
    },
  };

  return (
    <div className="w-full py-5 border-b flex-center -border--devide-line-clr">
      <div
        style={{ boxShadow: "0px 4.68px 17.95px 0px #0000000D" }}
        className={`w-[1126px] h-[66px] rounded-[16px]  border flex -border--devide-line-clr items-center relative shadow-sm ${
          selectedState > -1 ? "bg-[#2222221A]" : ""
        }`}
      >
        <AnimatePresence>
          {selectedState !== null && (
            <Dialog
              {...ComponentsChild[selectedState]}
              setselectedState={setselectedState}
              selectedState={selectedState}
            >
              {ComponentsChild[selectedState]?.component}
            </Dialog>
          )}
        </AnimatePresence>
        <ComponentSearch
          maxW={"236px"}
          text={"From"}
          place={searchData.from}
          setselectedState={setselectedState}
          selectedState={selectedState}
          index={0}
        />
        <hr className="w-0.5 h-[32px] -bg--devide-line-clr" />
        <ComponentSearch
          maxW={"236px"}
          text={"Going to"}
          place={searchData.to}
          setselectedState={setselectedState}
          selectedState={selectedState}
          index={1}
        />
        <hr className="w-0.5 h-[32px] -bg--devide-line-clr" />
        <ComponentSearch
          maxW={"175px"}
          text={"Depart"}
          place={departState ? departState.dateString : "Search Date"}
          setselectedState={setselectedState}
          selectedState={selectedState}
          index={2}
          op={true}
        />
        <hr className="w-0.5 h-[32px] -bg--devide-line-clr" />
        <ComponentSearch
          maxW={"175px"}
          text={"Return"}
          place={returnState ? returnState.dateString : "Search Date"}
          setselectedState={setselectedState}
          selectedState={selectedState}
          index={3}
        />
        <hr className="w-0.5 h-[32px] -bg--devide-line-clr" />
        <div
          id="btn-controls-5"
          onClick={async () => {
            setselectedState(null);
            setTimeout(() => {
              setselectedState(4);
            }, 230);
          }}
          className={`flex relative justify-between items-center max-w-[304px] w-full pr-2 hover:-bg--light-gray cursor-pointer rounded-[18px] ${
            selectedState === 4 ? "hover:bg-white bg-white" : ""
          }`}
        >
          <ComponentSearch
            maxW={"max-content"}
            text={"Travlar & Class"}
            place={travelClass ? `${travelClass}` : "Select Type"}
            selectedState={selectedState}
            setselectedState={setselectedState}
            index={4}
            op={true}
          />
          <motion.button
            animate={{
              width: selectedState !== null ? 120 : 48,
              justifyContent:
                selectedState !== null ? "flex-start" : "flex-start",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            id="btn-controls-child-5"
            onClick={(e) => {
              e.stopPropagation();
              router.push("/search");
              setopenedSearch(false);
            }}
            className={`-bg--brand-clr [&_path]:fill-white w-[48px] h-[48px] rounded-full flex-center px-[16px] relative  `}
          >
            {search}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                x: selectedState !== null ? "-35%" : "0%",
                opacity: selectedState !== null ? 1 : 0,
                y: "-50%",
              }}
              id="btn-controls-child-5"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-[50%] text-white leading-[20px] text-[16px] font-[500] text-center left-[50%] "
            >
              Search
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

const ComponentSearch = ({
  maxW,
  text,
  place,
  setselectedState,
  index,
  selectedState,
  op,
}) => {
  return (
    <div
      style={{ maxWidth: maxW }}
      onClick={() => {
        if (!op) {
          setselectedState && setselectedState(index);
        } else {
          setselectedState(null);
          setTimeout(() => {
            setselectedState(index);
          }, 230);
        }
      }}
      id={`btn-control-${index}`}
      className={`max-w-[${maxW}] w-full ${
        selectedState === index ? "hover:bg-white bg-white " : ""
      } flex-col flex px-6 hover:-bg--light-gray h-[64px] justify-center rounded-[16px] cursor-pointer select-none `}
    >
      <span
        id={`btn-control-child-${index}`}
        className="text-[14px] font-[500] leading-[18px] -text--primary-black "
      >
        {text}
      </span>
      <p
        id={`btn-control-child-${index}`}
        className={`text-[16px] font-[400] leading-[16px] -text--primary-black ${
          selectedState === index ? "font-[500]" : ""
        }`}
      >
        {place}
      </p>
    </div>
  );
};

const Dialog = ({
  children,
  setselectedState,
  index,
  width,
  height,
  rounded,
  translateX,
  selectedState,
}) => {
  const dialogRef = useRef();
  // useEffect(() => {
  //   const clickFunc = (e) => {
  //     if (
  //       dialogRef.current &&
  //       !dialogRef.current?.contains(e.target) &&
  //       e.target.id !== `btn-control-child-${index}` &&
  //       e.target.id !== `btn-control-${index}` &&
  //       !e.target.id.includes("btn-control-child") &&
  //       !e.target.id.includes("btn-control")
  //     ) {
  //       setselectedState(null);
  //     }
  //   };

  //   window.addEventListener("click", clickFunc);

  //   return () => window.removeEventListener("click", clickFunc);
  // }, [dialogRef.current]);

  return (
    <motion.div
      initial={{ opacity: 0, x: translateX && translateX }}
      animate={{
        opacity: 1,
        x: translateX && translateX,
        left: selectedState > 1 ? "unset" : 0,
        right: selectedState > 1 ? 0 : "unset",
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      ref={dialogRef}
      style={{
        boxShadow: "0px 4.68px 17.95px 0px #0000000D",
        width: width,
        height: height,
      }}
      className={`w-[441px] h-[414px] flex flex-col absolute left-0 top-[90px] ${
        rounded ? "rounded-[16px]" : "rounded-[27px]"
      }  gap-1 border -border--devide-line-clr py-3 bg-white px-3`}
    >
      {children}
    </motion.div>
  );
};

const Passengers = ({ passengers, setpassengers }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col mt-9 h-[201px] justify-between items-center"
    >
      {passengers?.map((it, index) => (
        <Fragment key={index}>
          <PassengerCounter
            AddFunc={() => {
              setpassengers((e) => {
                console.log("entered");
                e[index] = {
                  ...e[index],
                  val: e[index].val + 1,
                };
                return [...e];
              });
            }}
            MinusFunc={() => {
              let tempPassengers = passengers;
              tempPassengers[index] = {
                ...tempPassengers[index],
                val: tempPassengers[index].val - 1,
              };
              if (tempPassengers[0].val === 0) {
                tempPassengers.forEach((it, index) => {
                  tempPassengers[index].val = 0;
                });
              }
              if (tempPassengers[2].val > tempPassengers[0].val) {
                tempPassengers[2].val = tempPassengers[0].val;
              }
              setpassengers([...tempPassengers]);
            }}
            age={it.age}
            name={it.name}
            val={it.val}
            passengers={passengers}
          />
          {index !== passengers.length - 1 && (
            <hr className="w-full -bg--devide-line-clr" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
};

const PassengerCounter = ({
  name,
  age,
  val,
  AddFunc,
  MinusFunc,
  passengers,
}) => {
  let tTravelers = 0;
  passengers.forEach((it) => {
    tTravelers += it.val;
  });
  return (
    <div className="flex items-center justify-between w-full h-[39px] select-none">
      <div className="flex flex-col">
        <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
          {name}
        </p>
        <span className="text-[12px] font-[400] leading-[15px] -text--primary-gray">
          {age}
        </span>
      </div>
      <div className="flex w-[96px] h-[28px] justify-between items-center">
        <button
          onClick={(e) => {
            MinusFunc();
          }}
          disabled={val === 0}
          className={`flex-center w-[28px] h-[28px] cursor-pointer rounded-full border -border--devide-line-clr disabled:cursor-not-allowed ${
            val === 0 ? "[&_svg]:-fill--devide-line-clr" : ""
          } `}
        >
          {minus}
        </button>
        <span className="text-[14px] -text--primary-black leading-[18px] w-[20px] text-center">
          {val}
        </span>
        <button
          onClick={(e) => {
            AddFunc();
          }}
          className={`flex-center w-[28px] h-[28px] cursor-pointer rounded-full border -border--devide-line-clr ${
            name === "Infant" && name !== "Adults" && passengers[0].val <= val
              ? "[&_svg]:-fill--devide-line-clr disabled:cursor-not-allowed"
              : ""
          } ${
            name === "Children" && name !== "Adults" && passengers[0].val === 0
              ? "[&_svg]:-fill--devide-line-clr disabled:cursor-not-allowed"
              : ""
          } ${
            tTravelers >= 9
              ? "[&_svg]:-fill--devide-line-clr disabled:cursor-not-allowed"
              : ""
          } `}
          disabled={
            tTravelers >= 9 ||
            (name === "Infant"
              ? name !== "Adults" && passengers[0].val <= val
              : name !== "Adults" && passengers[0].val === 0)
          }
        >
          {plus}
        </button>
      </div>
    </div>
  );
};

const Cabin = ({ airClass, setairClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-between mt-8 h-[198px]"
    >
      {Object.keys(airClass).map((it, index) => (
        <Fragment key={index}>
          <CabinCard
            name={it}
            val={airClass[it]}
            clickFunc={() =>
              setairClass((e) => {
                Object.keys(e).forEach((k) => {
                  e[k] = false;
                });
                e[it] = true;
                return { ...e };
              })
            }
          />
          {index !== Object.keys(airClass).length - 1 && (
            <hr className="w-full -bg--devide-line-clr" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
};

const CabinCard = ({ name, val, clickFunc }) => {
  return (
    <div
      onClick={clickFunc}
      className="flex h-[24px] items-center justify-between w-full"
    >
      <p className="text-[16px] leading-[20px] font-[500] -text--primary-black">
        {name}
      </p>
      <CheckBtn clickFunc={clickFunc} val={val} />
    </div>
  );
};

const CheckBtn = ({ val, clickFunc }) => {
  return (
    <button
      onClick={() => clickFunc && clickFunc()}
      className={`w-[20px] h-[20px] hover:-border--primary-black rounded-full -border--devide-line-clr border ${
        val ? "border-[6px] -border--primary-black" : ""
      }`}
    ></button>
  );
};

const CalenderBig = ({
  selectedDate,
  setselectedDate,
  departDate,
  returnDate,
  returnSelected,
  cl1,
  setcl1,
  cl2,
  setcl2,
}) => {
  const [hoverDate, sethoverDate] = useState(false);
  const tempDate = new Date();

  const prevFunc = () => {
    if (tempDate.getMonth() === cl1.getMonth() - 1) {
      setcl1(
        (e) => new Date(e.getFullYear(), e.getMonth() - 1, tempDate.getDate())
      );
      setcl2((e) => new Date(e.getFullYear(), e.getMonth() - 1));
    } else {
      setcl1((e) => new Date(e.getFullYear(), e.getMonth() - 1));
      setcl2((e) => new Date(e.getFullYear(), e.getMonth() - 1));
    }
  };

  const nextFunc = () => {
    setcl1((e) => new Date(e.getFullYear(), e.getMonth() + 1));
    setcl2((e) => new Date(e.getFullYear(), e.getMonth() + 1));
  };

  return (
    <div className="flex items-center justify-between w-full h-full px-12 py-10">
      <Calender
        left={true}
        right={false}
        givenDate={cl1}
        nextFunc={nextFunc}
        prevFunc={prevFunc}
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
        departDate={departDate}
        returnDate={returnDate}
        returnSelected={returnSelected}
        hoverDate={hoverDate}
        sethoverDate={sethoverDate}
      />
      <Calender
        left={false}
        right={true}
        givenDate={cl2}
        nextFunc={nextFunc}
        prevFunc={prevFunc}
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
        departDate={departDate}
        returnDate={returnDate}
        returnSelected={returnSelected}
        hoverDate={hoverDate}
        sethoverDate={sethoverDate}
      />
    </div>
  );
};

export { CheckBtn };
