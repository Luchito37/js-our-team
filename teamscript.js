//Milestone 1:
//stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.


const elencoTeam = [
    {
        nome: "Danilo",
        cognome: " Manfredi",
        professione: "CEO & Founder",
        img_src: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Michela",
        cognome: " Rossi",
        professione: "Creative Director",
        img_src: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Massimo",
        cognome: " Moschetto",
        professione: "Designer",
        img_src: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Marta",
        cognome: " Losito",
        professione: "Chief director",
        img_src: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Michael",
        cognome: " Thoms",
        professione: "Web Develoaper",
        img_src: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: " Ranieri",
        professione: "Economic",
        img_src: "barbara-ramos-graphic-designer.jpg"
    },
]



//Milestone 2:
//stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del 
//team un elemento html che conterrà i suoi dati.


const containerTeam = document.querySelector(".team-container");

for (let i = 0; i < elencoTeam.length; i++) {


    containerTeam.innerHTML += `<div class="team-card">
                                    <div class="card-image">
                                        <img src="img/${elencoTeam[i].img_src}" alt="Danilo Manfredi"/>
                                    </div>
                                    <div class="card-text">
                                        <h3>${elencoTeam[i].nome}${elencoTeam[i].cognome}</h3>
                                        <p>${elencoTeam[i].professione}</p>
                                    </div>
                                </div>`
}


