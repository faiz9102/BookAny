import React from "react";

const Bronze = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(254deg, #C58200 1.76%, #8F4916 33.01%, #D7882C 65.41%, #AF611A 104.85%)",
      }}
      className="w-[69px] h-[31px] rounded-[8px] med-14 !text-white flex-center"
    >
      Bronze
    </div>
  );
};

const Gold = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(254deg, #FFF6C6 1.76%, #E1B43F 33.01%, #F1E815 60.29%, #EAC503 104.85%)",
      }}
      className="w-[69px] h-[31px] rounded-[8px] med-14 flex-center"
    >
      Gold
    </div>
  );
};

const Silver = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(254deg, #EEEEEE 1.76%, #D8D8D8 33.01%, #EBEBEB 60.29%, #ADADAD 104.85%)",
      }}
      className="w-[69px] h-[31px] rounded-[8px] med-14 flex-center"
    >
      Silver
    </div>
  );
};

const Platinum = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(254deg, #EEEEEE 1.76%, #D8D8D8 33.01%, #EBEBEB 60.29%, #ADADAD 104.85%)",
      }}
      className="w-[82px] h-[31px] rounded-[8px] med-14 flex-center"
    >
      Platinum
    </div>
  );
};

const Elite = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(254deg, #FFF6C6 1.76%, #E1B43F 33.01%, #F1E815 60.29%, #EAC503 104.85%)",
      }}
      className="w-[69px] h-[31px] rounded-[8px] med-14 bg-blend-color bg-[#FFA8DCBA] flex-center"
    >
      Silver
    </div>
  );
};

export { Bronze, Gold, Silver, Elite, Platinum };
