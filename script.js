function companyView(company) {
  return `
          <div class="card">
              <div class="sub"><p>${company.sub}</p></div>
              <h2 class="title">${company.title}</h2>
              <p class="text">${company.text}</p>
            <button>Visit<span class="material-icons arrow">arrow_forward</span>
          </button>   
          </div>
          
      `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");
  for (let i = 0; i < data.length; i++) {
    const company = data[i];
    mainElement.insertAdjacentHTML("beforeend", companyView(company, i));
  }
}

window.addEventListener("load", loadEvent);
