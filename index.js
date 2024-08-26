document.addEventListener("DOMContentLoaded", function () {
  const hr = document.querySelector(".hour");
  const min = document.querySelector(".minute");
  const sec = document.querySelector(".second");

  let darkMode = false;
  const updateTime = () => {
    const time = new Date();
    let hour = time.getHours();
    if (hour == 0 || hour == 12) {
      hour = 12;
    } else {
      hour = hour % 12;
    }
    hr.textContent = String(hour).padStart(2, "0");
    min.textContent = String(time.getMinutes()).padStart(2, "0");
    sec.textContent = String(time.getSeconds()).padStart(2, "0");

    if ((hour >= 18 || hour < 6) && darkMode) {
      document.body.classList.add("dark-mode");
    } else if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    if (darkMode) {
      darkMode = false;
    } else {
      darkMode = true;
    }
  });

  setInterval(() => {
    updateTime();
  }, 1000);
});
