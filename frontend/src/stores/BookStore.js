import mobx, {observable, computed , action} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL;
class BookStore {
    @observable messageFromServer = "";
    @observable errorMessage = "";

    @observable Books = [];

    constructor() {
        this.Books = [
            { title: "How to Learn JavaScript - Vol 1", info: "Study hard" }
            , { title: "How to Learn ES6", info: "Complete all exercises :-)" }
            , {
                title: "How to Learn React",
                info: "Complete all your CA's",moreInfo: ""
            }
            , {
                title: "How to become a specialist in Computer Science - Vol 4",
                info: "Don't drink beers, until Friday (after four)",
                moreInfo: "5 Points = 5 beers ;-)"
            }
        ]
console.log( this.getData());
       // console.log(this.messageFromServer);


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


                    this.setBooks(res);
                    console.log(this.books);

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
    }


}
export default new BookStore();

