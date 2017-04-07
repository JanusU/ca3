import mobx, {observable, computed , action} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL;
class BookStore {
    @observable messageFromServer = "";
    @observable errorMessage = "";

    @observable Books = [];
    @observable BookByID = {};


    constructor() {
        this.getData()
       // console.log(this.messageFromServer);

      console.log( this.getBookByID(2));
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
        console.log("hej");

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


  //setTimeout(this.getData,120000);

    }

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

}
export default new BookStore();

