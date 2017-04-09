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
        </div>

        )
  }
}