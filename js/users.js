const robotsAgents = [
  {
    id: 1,
    name: "Leanne Graham",
    role: "Team Lead, MyOwnCompany"
  },
  {
    id: 2,
    name: "Erwin Howell",
    role: "Project Manager, MyOwnCompany"
  },
  {
    id: 3,
    name: "Clementine Batch",
    role: "Project Lead, MyOwnCompany"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    role: "Manager, MyOwnCompany"
  }
];

class NewAgent {
  constructor(robotsAgents) {
    (this.id = robotsAgents.id),
      (this.name = robotsAgents.name),
      (this.role = robotsAgents.role);
  }
}

const firstBot = new NewAgent(robotsAgents[0]);
const secondBot = new NewAgent(robotsAgents[1]);
const thirdBot = new NewAgent(robotsAgents[2]);
const forthBot = new NewAgent(robotsAgents[3]);

function addNewPerson(agent) {
  const roboAgents = document.getElementById("roboAgents");
  const itemContainer = document.createElement("div");

  itemContainer.innerHTML = `<div class="col-lg-10 reference-user">
<img src="https://robohash.org/${agent.id}?size=180x180"
  alt="Agent X"
  class="img-circle user-image"
/>
<h2>${agent.name}</h2>
<p>${agent.role}</p>
<div class="row reference-user-row">
  <div class="col-lg-4">
    <img
      class="img-circle"
      src="./assets/Social Media/facebook.png"
      alt="Facebook"
    />
  </div>
  <div class="col-lg-4">
    <img
      class="img-circle"
      src="./assets/Social Media/twitter.png"
      alt="Twitter"
    />
  </div>
  <div class="col-lg-4">
    <img
      class="img-circle"
      src="./assets/Social Media/google-plus.png"
      alt="Google Plus"
    />
  </div>
</div>
</div>`;

  roboAgents.appendChild(itemContainer);
}

window.onload = addNewPerson(firstBot);
window.onload = addNewPerson(secondBot);
window.onload = addNewPerson(thirdBot);
window.onload = addNewPerson(forthBot);
