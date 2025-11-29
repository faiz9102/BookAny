import { chevronleft, chevronright, chevronRight } from "@/consonants";
import React, { useEffect, useLayoutEffect, useState } from "react";

function Calender({
  left,
  right,
  givenDate,
  nextFunc,
  prevFunc,
  selectedDate,
  setselectedDate,
  departDate,
  returnDate,
  returnSelected,
  hoverDate,
  sethoverDate,
}) {
  const tempDate = new Date();

  const [date, setdate] = useState(givenDate);

  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [Prevdates, setPrevdates] = useState([]);
  const [NextDays, setNextDays] = useState([]);

  const getpreviousDays = () => {
    let tempdate = new Date(date.getFullYear(), date.getMonth());
    return tempdate.getDay();
  };

  useEffect(() => {
    if (date) {
      let prevDays = getpreviousDays();
      let tempPrevDates = [];
      let d = date.getDate();
      for (let i = 1; i <= d; i++) {
        tempPrevDates[i + prevDays - 1] = i;
      }
      setPrevdates([...tempPrevDates]);
      console.log(tempPrevDates);
      tempPrevDates = [];
      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();

      for (let i = lastDay; i >= d; i--) {
        tempPrevDates[i - 1 - d] = i;
      }
      console.log(tempPrevDates);
      setNextDays([...tempPrevDates]);
    }
  }, [date]);

  useLayoutEffect(() => {
    setdate(givenDate);
  }, [givenDate]);

  useEffect(() => {
    console.log(hoverDate);
  }, [hoverDate]);

  return (
    date && (
      <div className="w-[354px] h-[317px] flex flex-col ">
        <div className="flex items-center justify-between">
          <span
            onClick={() => {
              if (
                tempDate.getMonth() === date.getMonth() &&
                tempDate.getFullYear() === date.getFullYear()
              ) {
              } else {
                prevFunc();
              }
            }}
            className={`${left ? "" : "[&_svg]:hidden"} w-[15px] ${
              tempDate.getMonth() === date.getMonth() &&
              tempDate.getFullYear() === date.getFullYear()
                ? "cursor-not-allowed [&_path]:-fill--disable-clr"
                : ""
            }`}
          >
            {chevronleft}
          </span>
          <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
            {months[date.getMonth()]} {date.getFullYear()}
          </span>
          <span
            onClick={() => {
              nextFunc();
            }}
            className={`${right ? "" : "[&_svg]:hidden"} w-[15px]`}
          >
            {chevronright}
          </span>
        </div>
        <div className="grid grid-cols-7 px-1 mt-1">
          {weekDays.map((it, index) => (
            <span
              key={index}
              className="text-[12px] w-[46px] flex-center h-[46px] font-[500] -text--primary-gray "
            >
              {it}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 px-1 h-[46px] gap-y-[2px] w-full">
          {Prevdates.map((it, index) => {
            const dateForCondition = new Date(
              date.getFullYear(),
              date.getMonth(),
              it
            );
            return (
              <span
                onPinterEnter={() => {
                  if (
                    date.getMonth() === tempDate.getMonth() &&
                    date.getFullYear() === tempDate.getFullYear()
                  ) {
                  } else {
                    console.log("added");
                    sethoverDate(
                      new Date(date.getFullYear(), date.getMonth(), it)
                    );
                  }
                }}
                onPointerLeave={() => {
                  sethoverDate(false);
                }}
                key={index}
                onClick={(e) => {
                  if (
                    date.getMonth() === tempDate.getMonth() &&
                    date.getFullYear() === tempDate.getFullYear()
                  ) {
                  } else {
                    setselectedDate({
                      date: it,
                      month: date.getMonth(),
                      year: date.getFullYear(),
                      dateObj: new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        it
                      ),
                      dateString: `${it} ${months[date.getMonth()].slice(
                        0,
                        3
                      )},${date.getFullYear()}`,
                    });
                  }
                }}
                className={`text-[15px] w-[46px] flex-center h-[46px] cursor-pointer font-[500] rounded-full ${
                  it === date.getDate() &&
                  date.getDate() === tempDate.getDate() &&
                  date.getMonth() === tempDate.getMonth() &&
                  date.getFullYear() === tempDate.getFullYear()
                    ? "!-text--brand-clr"
                    : date.getMonth() === tempDate.getMonth() &&
                      date.getFullYear() === tempDate.getFullYear()
                    ? "line-through -text--disable-clr"
                    : "border border-transparent hover:border-black"
                } ${
                  departDate?.date === it &&
                  departDate?.month === date.getMonth() &&
                  departDate?.year === date.getFullYear()
                    ? "!bg-black !text-white !rounded-full"
                    : ""
                } ${
                  returnDate?.date === it &&
                  returnDate?.month === date.getMonth() &&
                  returnDate?.year === date.getFullYear()
                    ? "!bg-black !text-white !rounded-full"
                    : ""
                }${
                  dateForCondition < returnDate?.dateObj &&
                  dateForCondition > departDate?.dateObj
                    ? "!bg-[#00000007] !rounded-none hover:border-black border h-[50px] w-full"
                    : ""
                } ${
                  dateForCondition.getDay() === 0 ||
                  dateForCondition.getDay() === 6
                    ? "-text--error-1 pointer-events-none"
                    : ""
                }   ${
                  returnSelected && dateForCondition < departDate?.dateObj
                    ? "line-through !-text--disable-clr cursor-not-allowed hover:border-none pointer-events-none"
                    : ""
                }`}
                style={{ pointerEvents: it === undefined && "none" }}
              >
                {it}
              </span>
            );
          })}

          {NextDays.map((it, index) => {
            const dateForCondition = new Date(
              date.getFullYear(),
              date.getMonth(),
              it
            );
            return (
              <span
                key={index}
                onPointerEnter={() => {
                  sethoverDate(
                    new Date(date.getFullYear(), date.getMonth(), it)
                  );
                }}
                onPointerLeave={() => {
                  sethoverDate(false);
                }}
                onClick={() => {
                  setselectedDate({
                    date: it,
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    dateObj: new Date(date.getFullYear(), date.getMonth(), it),
                    dateString: `${it} ${months[date.getMonth()].slice(
                      0,
                      3
                    )},${date.getFullYear()}`,
                  });
                }}
                className={`text-[15px] w-full flex-center h-[50px] cursor-pointer font-[500] -text--primary-black rounded-full border border-transparent hover:border-black 
                  ${
                    departDate?.date === it &&
                    departDate?.month === date.getMonth() &&
                    departDate?.year === date.getFullYear()
                      ? "!bg-black !text-white !rounded-full"
                      : ""
                  } ${
                  returnDate?.date === it &&
                  returnDate?.month === date.getMonth() &&
                  returnDate?.year === date.getFullYear()
                    ? "!bg-black !text-white !rounded-full"
                    : ""
                } 
               ${
                 (dateForCondition < returnDate?.dateObj &&
                   dateForCondition > departDate?.dateObj) ||
                 (departDate &&
                   hoverDate &&
                   dateForCondition < hoverDate &&
                   dateForCondition > departDate?.dateObj)
                   ? "!bg-[#00000007] !rounded-none hover:border-none "
                   : ""
               }
             ${
               returnSelected && dateForCondition < departDate?.dateObj
                 ? "line-through !-text--disable-clr cursor-not-allowed hover:border-none pointer-events-none"
                 : ""
             } ${
                  dateForCondition.getDay() === 0 ||
                  dateForCondition.getDay() === 6
                    ? "!-text--error-1 pointer-events-none"
                    : ""
                }
              `}
              >
                <span
                  className={` ${
                    dateForCondition < returnDate?.dateObj &&
                    dateForCondition > departDate?.dateObj
                      ? "flex-center rounded-full border border-transparent h-full w-full hover:border-black "
                      : ""
                  }`}
                >
                  {it}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    )
  );
}

export default Calender;
