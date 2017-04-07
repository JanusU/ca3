import mobx, {observable, computed , action} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL;
class BookStore {
    @observable messageFromServer = "";
    @observable errorMessage = "";

    @observable Books = [];
    @observable BookByID = {};


    constructor() {
       this.getData();

       // console.log(this.messageFromServer);
//get all books: this.getData();
    //  get book by id : console.log( this.getBookByID(2));


        /*  add new book:  var maNewBook = JSON.parse(" {\"title\": \"Book2\", \"info\": \"info .\", \"moreInfo\": \" more infofofof\"} ");

         this.fetchAddNewBook(maNewBook);*/

// delete book:
        // var deleteMe = JSON.parse(" {\"id\": \"12 \",\"title\": \"Book2\", \"info\": \"info .\", \"moreInfo\": \" more infofofof\"} ");
//this.fetchDeleteBook(deleteMe)



        // edit book:
    //   var deleteMe = JSON.parse(" {\"id\": \"10 \",\"title\": \"Book3\", \"info\": \"info .\", \"moreInfo\": \" more infofofof\"} ");
    //this.fetchEditBook(deleteMe);

    }


    @action
    setErrorMessage(err) {
        this.errorMessage = err;
    }
    @action
    setMessageFromServer(msg) {
        this.messageFromServer = msg;
    }
    @computed
    get books(){

        return this.Books.slice();

    }
    getBookByID(boID){//returns a book by given id
    this.fetchBookByID(boID);
        return this.BookByID;
    }



    @action
    addBook(title, info) {
        this.Books.push({
            title: title,
            info: info,
        });
    }

    @action
    setBooks(bo){
        this.Books = bo;


    }

    @action
    setBookByID(boID){
        this.BookByID = boID;
    }



    @action
    getData = () => {


        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);

      fetch(URL + "api/books", options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
            console.log("l 71");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {
                    console.log("l82");

                    this.setBooks(res);
                    //console.log(this.books);

                    console.log(res);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
            //This is the only way (I have found) to veryfy server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
        console.log("exception");
        console.log( this.errorMessage );
        console.log(URL);
            })


  //setTimeout(this.getData,120000);

    }
@action
    fetchBookByID = (id) => {

        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);


        return fetch(URL + "api/books/"+id, options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
                console.log("l 71");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    //console.log(res);

                    //container = res;
                   this.setBookByID(res);
                   console.log(res);

                    //console.log(res.length);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
            //This is the only way (I have found) to veryfy server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
            console.log("exception");
            console.log( this.errorMessage );
            console.log(URL);
        })
       // console.log("result");
        //console.log(result);
        //return result;
       // setTimeout(this.getData,120000);

    }


@action
    fetchAddNewBook = (bookJason) => { /*  example:  var maNewBook = JSON.parse(" {\"title\": \"Book2\", \"info\": \"info .\", \"moreInfo\": \" more infofofof\"} ");

 this.fetchAddNewBook(maNewBook);*/

        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("POST", false,bookJason);


     fetch(URL + "api/books/add", options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
                console.log("l 171");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    console.log(res);
                this.setMessageFromServer(res.message);
                }
            }).catch(err => {
                //This is the only way (I have found) to veryfy server is not running
                this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
                console.log("exception");
                console.log( this.errorMessage );
                console.log(URL);
            })

    }


    @action
    fetchDeleteBook = (bookJason) => {

        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("DELETE", false,bookJason);


        fetch(URL + "api/books/delete", options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
                console.log("l 171");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    console.log(res);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
            //This is the only way (I have found) to veryfy server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
            console.log("exception");
            console.log( this.errorMessage );
            console.log(URL);
        })

    }

    @action
    fetchEditBook = (bookJason) => {

        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("PUT", false,bookJason);


        fetch(URL + "api/books/update", options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
                console.log("l 171");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    console.log(res);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
            //This is the only way (I have found) to veryfy server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
            console.log("exception");
            console.log( this.errorMessage );
            console.log(URL);
        })

    }


}
export default new BookStore();

