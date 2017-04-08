import React, {Component} from "react";
import bookStore from "../stores/BookStore";
import {observer} from "mobx-react"

@observer export default class Documentation extends Component{
    render() {
       var books = bookStore.books;

       const booktable = books.map((book) => {
           return <tr key={book.id}>
               <td>{book.title}</td>
               <td>{book.info}</td>
               <td>{book.moreInfo}</td>
           </tr>

           }
       );


        return(
            <div>
                <h1>The Books</h1>
                <tr>
                    <th>BookTitle</th>
                    <th>Info</th>
                    <th>MoreInfo</th>
                </tr>
                <tbody>
                {booktable}
                </tbody>


            </div>
        )
    }
}