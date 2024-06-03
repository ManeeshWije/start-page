import "./style.css";

// [name you want to appear, link]
const links: Map<string, string> = new Map([
    ["syncthing", "http://localhost:8384/"],
    ["railway", "https://railway.app/dashboard"],
    ["reddit", "https://www.reddit.com"],
    ["mail", "https://mail.proton.me"],
    ["vercel", "https://vercel.com/maneeshwijes-projects"],
    ["hacker news", "https://news.ycombinator.com/"],
    ["youtube", "https://www.youtube.com"],
    ["x", "https://www.x.com"],
    ["ebay", "https://www.ebay.ca/"],
    ["github", "https://www.github.com"],
    ["linkedin", "https://www.linkedin.com/feed/"],
    ["amazon", "https://www.amazon.ca/"],
]);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Welcome Maneesh.</h1>
  <div class="cards">
    <div class="card0"></div>
    <div class="card1"></div>
    <div class="card2"></div>
  </div>
`;

let counter = 0;
const cardCount = 3;
const cardElements = [
    document.querySelector(`.card0`),
    document.querySelector(`.card1`),
    document.querySelector(`.card2`),
];

links.forEach((link, name) => {
    const cardIndex = counter % cardCount;
    const card = cardElements[cardIndex];
    let a = document.createElement("a");
    a.innerText = name;
    a.href = link;
    card?.appendChild(a);
    counter += 1;
});
