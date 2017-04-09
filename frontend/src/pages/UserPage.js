import React, { Component } from 'react'
import { observer } from "mobx-react";
import userData from "../stores/userStore";
import bookStore from "../stores/BookStore";

const UserPage = observer(
  class UserPage extends Component {

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
          <h2>Users</h2>
          <p>This message is fetched from the server if you are properly logged in</p>
          <div className="msgFromServer">
            {userData.messageFromServer}
          </div>
          <h4 style={{ color: "red" }}>{userData.errorMessage}</h4>

            <button onClick={bookStore.addBook(prompt("Add a title","newbook"),prompt("Add info","defaultinfo"))}>Add Book</button>
            <button>Edit Book</button>
            <button onClick={bookStore.deleteBook(prompt("type id of the book"))}>Delete Book</button>
        </div>
      )
    }

  }
)
export default UserPage;