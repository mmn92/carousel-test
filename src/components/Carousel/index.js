import React, { useState } from "react";

import "./styles.css";

const divArray = [
  {
    id: 0,
    title: "Item 1",
    itemClass: "first"
  },
  {
    id: 1,
    title: "Item 2",
    itemClass: "second"
  },
  {
    id: 2,
    title: "Item 3",
    itemClass: "third"
  }
];

const Carousel = () => {
  const [active, setActive] = useState(0);
  const items = divArray;

  const rotate = () => {
    const activeItem = document.querySelector(".-active");
    const hiddenItem = document.querySelector(".-hidden");

    activeItem.classList.remove("-active");
    activeItem.classList.add("-fade-out");
    hiddenItem.classList.remove("-hidden");

    setTimeout(() => {
      if (active === items.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, 1000);
  };

  return (
    <div className="container">
      <ul className="item-list">
        <li
          key={items[active].id}
          className={`item ${items[active].itemClass} -active`}
        >
          <span>{items[active].title}</span>
        </li>
        {items[active + 1] ? (
          <li
            key={items[active + 1].id}
            className={`item ${items[active + 1].itemClass} -hidden`}
          >
            <span>{items[active + 1].title}</span>
          </li>
        ) : (
          <li
            key={items[0].id}
            className={`item ${items[0].itemClass} -hidden`}
          >
            <span>{items[0].title}</span>
          </li>
        )}
      </ul>

      <footer className="bar">
        <div className="radio-btns">
          {items.map(item => (
            <span
              onClick={() => setActive(item.id)}
              key={item.id}
              className={`radio-btn ${item.id === active ? "-active" : ""}`}
            ></span>
          ))}
        </div>
        <button onClick={() => rotate()} className="btn next"></button>
      </footer>
    </div>
  );
};

export default Carousel;
