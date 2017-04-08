import React, { Component } from 'react'
import {observer} from "mobx-react";
import userData from "../stores/adminStore";
import adminStore from "../stores/adminStore";

const AdminPage = observer(
  class AdminPage extends Component {

    componentWillMount() {
      /*
      This will fetch data each time you navigate to this route
      Move to constructor, if only required once, or add "logic" to determine when data should be "refetched"
      */
      userData.getData();
    }

    render() {
      return (
        <div>
          <h2>Here you can see a list of all the users</h2>
            <a>{adminStore.getData()}</a>

            /*mangler metode*/
            <button>Add a new User</button>
        </div>
      )
    }

  }
)
export default AdminPage;