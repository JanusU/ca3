import mobx, {observable, computed , action} from "mobx";
class BookStore {

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
    }
    @computed
    get books(){
        return this.Books
    }


    @action
    addBook(title, info) {
        this.Books.push({
            title: title,
            info: info,
        });
    }
}
export default new BookStore();

