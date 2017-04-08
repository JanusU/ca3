import React, { Component } from 'react'
import {observer} from "mobx-react";
import userData from "../stores/adminStore";
import fetcher from "../stores/fetchHelpers";

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
            <a></a>
        </div>
      )
    }

  }
)
export default AdminPage;