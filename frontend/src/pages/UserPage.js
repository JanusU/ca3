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
       <button onClick={bookStore.addBook(prompt("Add a title","newbook"),prompt("Add info","defaultinfo"))}>Add Book</button>
       <button>Edit Book</button>
       <button onClick={bookStore.deleteBook(prompt("type id of the book"))}>Delete Book</button>
     */
      userData.getData();
    //  this.addNewBook("Leo","Messi","is the kin");

    }

   constructor(){
super();
       this.handleInfo = this.handleInfo.bind(this);
       this.handleTitle = this.handleTitle.bind(this);
       this.handleMoreInfo = this.handleMoreInfo.bind(this);
       this.addNewBook = this.addNewBook.bind(this);
       this.state = {
          nTitle: "",
           nInfo: "",
           nMoreInfo: ""





       }

   }

      addNewBook(){

        var nTitle = this.state.nTitle;


           var nInfo  = this.state.nInfo;


          var nMoreInfo  = this.state.nMoreInfo;




          var newBook = JSON.parse(" {\"title\":\""+nTitle+ "\",\"info\":\""+ nInfo+"\", \"moreInfo\":\"" +nMoreInfo+"\"} ");
        console.log(newBook);
     bookStore.fetchAddNewBook(newBook);

      }


      handleTitle(e) {
          this.setState({ nTitle: e.target.value });
      }
      handleInfo(e) {
          this.setState({ nInfo: e.target.value });
      }

      handleMoreInfo(e) {
          this.setState({ nMoreInfo: e.target.value });
      }



    render() {
      return (
        <div>
          <h2>Users</h2>

<h5>Add new book</h5>
                <label>
                    Title:
                    <input type="text" id="title" onChange={ this.handleTitle }/>
                </label>
                <label>
                    info:
                    <input type="text" onChange={ this.handleInfo} />
                </label>
                <label>
                    More info:
                    <input type="text" onChange={ this.handleMoreInfo }/>
                </label>
                <input type="button" value="Submit" onClick={this.addNewBook} />





        </div>
      )
    }

  }
)
export default UserPage;