const btn = document.querySelector(".btn-open");
const form = document.querySelector(".sharing-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

//load data from supbase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://xullqnagrcpvimidzcva.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "*****",
        authorization:
          "*****",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color:#f84446">${fact.category}</span>
    
</li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
}
