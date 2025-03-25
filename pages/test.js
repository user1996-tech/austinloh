import React from "react";
const items = [
  {
    name: "Olvisholt Lite",
    volume: "330ml",
    price: "479kr",
  },
  {
    name: "Tuborg Classic",
    volume: "500ml",
    price: "409kr",
  },
  {
    name: "Karpackie Pilsner",
    volume: "500ml",
    price: "309kr",
  },
];

const test = () => {
  return (
    <div className="w-full h-min-screen">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
        <p>Some title here</p>
        {items.map((item, index) => {
          return (
            <div className="w-full flex" key={index} id="item">
              <div className="flex-1" id="itemName">
                {item.name}
              </div>
              <div className="flex-1" id="itemVolume">
                {item.volume}
              </div>
              <div className="flex-1" id="itemPrice">
                {item.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className="">Some button here</div>
    </div>
  );
};

export default test;
