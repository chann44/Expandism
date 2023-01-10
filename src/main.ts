import "./style.css";

const divs = document.getElementsByClassName(
  "img"
) as HTMLCollectionOf<HTMLElement>;

const arr = Array.from(divs);

arr.forEach((pannle) => {
  pannle.addEventListener("click", () => {
    removeActiveClasses();
    pannle.classList.add("active");
  });
});

function removeActiveClasses() {
  arr.forEach((panel) => {
    panel.classList.remove("active");
  });
}
