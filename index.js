/* Budeme pracovat s tímto polem */

let auta = [
    { vyrobce: 'Renault', model: 'Megane', rokVyroby: 2006, palivo: 'benzín', barva: 'červená', najetoKm: 58795 },
    { vyrobce: 'Škoda', model: 'Octavia', rokVyroby: 2012, palivo: 'nafta', barva: 'zelená', najetoKm: 159734 },
    { vyrobce: 'Ford', model: 'Mondeo', rokVyroby: 2019, palivo: 'benzín', barva: 'černá', najetoKm: 94322 },
    { vyrobce: 'Renault', model: 'Clio', rokVyroby: 2018, palivo: 'nafta', barva: 'bílá', najetoKm: 12985 },
    { vyrobce: 'Škoda', model: 'Fabia', rokVyroby: 2014, palivo: 'benzín', barva: 'černá', najetoKm: 1385 },
    { vyrobce: 'Škoda', model: 'Favorit', rokVyroby: 1987, palivo: 'nafta', barva: 'modrá', najetoKm: 57985 },
    { vyrobce: 'Honda', model: 'Civic', rokVyroby: 2001, palivo: 'lpg', barva: 'bílá', najetoKm: 239785 },
    { vyrobce: 'Tesla', model: 'Model S', rokVyroby: 2018, palivo: 'elektřina', barva: 'červená', najetoKm: 29785 },
    { vyrobce: 'Volkswagen', model: 'Beetle', rokVyroby: 1964, palivo: 'nafta', barva: 'modrá', najetoKm: 167520 },
    { vyrobce: 'Škoda', model: 'Octavia', rokVyroby: 2009, palivo: 'nafta', barva: 'bílá', najetoKm: 75986 },
    { vyrobce: 'Škoda', model: 'Fabia', rokVyroby: 2011, palivo: 'benzín', barva: 'stříbrná', najetoKm: 4289 },
    { vyrobce: 'Volkswagen', model: 'Passat', rokVyroby: 2019, palivo: 'benzín', barva: 'zelená', najetoKm: 34976 },
    { vyrobce: 'Škoda', model: 'Superb', rokVyroby: 2014, palivo: 'nafta', barva: 'bílá', najetoKm: 134687 },
    { vyrobce: 'Audi', model: 'R8', rokVyroby: 2019, palivo: 'lpg', barva: 'černá', najetoKm: 67545 },
  ];
  


function myFunction(vyrobce, model, rokVyroby, palivo, barva, najetoKm) {
let seznam = document.getElementById("seznam")

let divAuto = document.createElement("div")
divAuto.className = "auto"
seznam.appendChild(divAuto)

  let divVyrobce = document.createElement("div")
  divVyrobce.className = "vyrobce"
  divVyrobce.innerHTML = vyrobce
  divAuto.appendChild(divVyrobce)

  let divModel = document.createElement("div")
  divModel.className = "model"
  divModel.innerHTML = model
  divAuto.appendChild(divModel)

  let divRok = document.createElement("div")
  divRok.className = "rok"
  divRok.innerHTML = rokVyroby
  divAuto.appendChild(divRok)

  let divBarva = document.createElement("div")
  divBarva.className = "barva"
  divBarva.innerHTML = barva
  divAuto.appendChild(divBarva)

  let divNajeto = document.createElement("div")
  divNajeto.className = "najeto"
  divNajeto.innerHTML = najetoKm
  divAuto.appendChild(divNajeto)
  
}

function myAuta(){
 auta.forEach(a => myFunction(a.vyrobce, a.model, a.rokVyroby, a.palivo, a.barva, a.najetoKm));
}

  /*
    HLAVNÍ ÚKOL:
    - vypiš všechna auta do HTML dovnitř prvku s id="seznam"
    - použij šablonu, která je v komentáři v HTML
    - nezapisuj auta do HTML po jednom, ale připrav si celý seznam
      do proměnné a teprve tu pak "plácni" do HTML
      vyzkoušej si innerHTML i document.createElement()
    BONUS:
    - přidej textové pole pro hledání - po kliknutí na tlačítko
      (nebo rovnou při psaní) hledej auta podle výrobce/modelu
    - nepiš kód přímo do hlavního programu, ale používej funkce.
      V hlavním progamu by mělo být pouze volání těchto funkcí.
  */