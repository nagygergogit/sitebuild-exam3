function companyView(company) {
  return `
          <div class="card">
              <h2>${company.title}</h2>
              <p class="sub">${company.sub}</p>
              <p class="text">${company.text}</p>  
            <button>Watch<span class="material-icons arrow">arrow_forward</span>
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
