import React, {Component} from "react";

export default class Documentation extends Component{
  render() {
    return(
        <div>
          <h1>CA3 af Yousef og Janus</h1>
          <p>Vi har lavet en bookstore hvor man kan se sine bøger og tilføje flere til en server af bøger der løbende opdaterer dem</p>
          <p>Man kan logge ind som bruger og admin og hver har adgang til lidt mere end standard</p>
          <a href="https://github.com/JanusU/ca3"> Github  </a>
            <p> Vi har formået at lave et rest api der kan hente, tilføje og slette en bog samt opdatere en allerede eksisterende bogs information
            </p>
            <p> Desuden har vi lavet de tilhørede funktioner til alle CRUD operationer i frontend delen(se BookStore.js)</p>
            <p>Derudover nået vi at implementere UI, så man kan se en liste af gemte bøger samt mulighed for at tilføje en ny bog, som så bliver gemt i databasen.
                Dog lykkedes det os ikke, på grund af tidsfristen, at implementere UI så man kan slette eller redigere en bog.(Metoderne er lavet i BookStore,js) </p>


        </div>

        )
  }
}