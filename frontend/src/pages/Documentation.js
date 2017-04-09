import React, {Component} from "react";

export default class Documentation extends Component{
  render() {
    return(
        <div>
          <h1>CA3 af Yousef og Janus</h1>
          <a>Vi har lavet en bookstore hvor man kan se sine bøger og tilføje flere til en server af bøger der løbende opdaterer dem</a>
          <a>Man kan logge ind som bruger og admin og hver har adgang til lidt mere end standard</a>
          <a href="https://github.com/JanusU/ca3"> Github  </a>
          <a href="ret"> Digital Ocean  </a>
            <p> Vi har formået at lave et rest api der kan hente bøgerne, slette en bestemt bog og opdatere en bogs information eller tilføje en ny bog
            </p>
            <p> Vi har lavet de tilhørede funktioner til alle CRUD operationer i front end</p>
        </div>

        )
  }
}