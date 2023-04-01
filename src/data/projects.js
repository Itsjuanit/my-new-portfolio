import Caja from "../images/caja.png";
import Courflix from "../images/courflix.png";
import Gramapp from "../images/gramapp.png";
import Poke from "../images/poke.png";
import Puertapp from "../images/puertapp.png";
import Quienes from "../images/quienes.png";
import Snake from "../images/snake.png";
import Todo from "../images/todo.png";
import Voice from "../images/voice.png";

const apiUrl = "https://api.github.com/user/repos";
const token = "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";

fetch(apiUrl, {
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    console.log(data); // Ver la respuesta de la API de GitHub
  })
  .catch((error) => {
    console.error(error);
  });

export const projectsData = [
  {
    id: 1,
    title: "Vet App",
    category: "Web Application",
    img: Caja,
  },
  {
    id: 2,
    title: "Phoenix Digital Agency",
    category: "Mobile Application",
    img: Courflix,
  },
  {
    id: 3,
    title: "Project Management UI",
    category: "UI/UX Design",
    img: Gramapp,
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: Poke,
  },
  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application",
    img: Puertapp,
  },
  {
    id: 6,
    title: "Apple Design System",
    category: "Web Application",
    img: Quienes,
  },
  {
    id: 7,
    title: "Apple Design System",
    category: "Web Application",
    img: Todo,
  },
  {
    id: 8,
    title: "Apple Design System",
    category: "Web Application",
    img: Voice,
  },
  {
    id: 8,
    title: "Apple Design System",
    category: "Web Application",
    img: Snake,
  },
];
