export const onLeftClick = (box) => {
  box.classList.contains("black") && box.classList.remove("black");
  box.classList.contains("yellow")
    ? box.classList.remove("yellow")
    : box.classList.add("yellow");
};

export const onRightClick = (box) => {
  box.classList.contains("yellow") && box.classList.remove("yellow");
  box.classList.contains("black")
    ? box.classList.remove("black")
    : box.classList.add("black");
};

const clearBtn = () => {
  const btn = document.querySelector(".resetBtn");
  btn.addEventListener("click", (event) => {
    document.querySelectorAll(".black").forEach((el) => {
      el.classList.remove("black");
    });
    document.querySelectorAll(".yellow").forEach((el) => {
      el.classList.remove("yellow");
    });
  });
};

const reloadBtn = () => {
  const btn = document.querySelector(".reloadBtn");
  btn.addEventListener("click", (event) => {
    location.reload();
  });
};

export const initEvents = () => {
  clearBtn();
  reloadBtn();
};
