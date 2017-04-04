
import com.google.gson.Gson;
import entity.Book;
import facades.BookFacade;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Yousinho
 */
public class testMain {
    public static void main(String[] args) {
//   Persistence.generateSchema("pu_development", null);
//    EntityManager em = Persistence.createEntityManagerFactory("pu_development").createEntityManager();
//        

BookFacade bf = new BookFacade();

//bf.addBook(new Book("At tænke hurtigt og langsomt","info ."," mor info blablabla balba albla"));
 //Book b = bf.getBookByTitle("The epic of Gilgamesh");
   //     System.out.println(b.getInfo());
   
        //System.out.println("delete status: "+bf.deleteBookByID(1));
Gson gson = new Gson();
    Book upateMe = gson.fromJson("{\"id\":2,\"title\":\"At tænke hurtigt og langsomt\",\"info\":\"hahahahah .\",\"moreInfo\":\" mor info blablabla balba albla\"}", Book.class);

//    upateMe.setTitle("The Epic of Gilgamesh");    @RolesAllowed("User")



System.out.println("status "+bf.updateBook(upateMe));
//    


//        System.out.println("d "+bf.deleteBookByID(51));
     //         System.out.println("d "+bf.deleteBookByID(151));
     //  System.out.println("d "+bf.deleteBookByID(101));
//
//        for (Book b : bf.getAllBooks()) {
//            System.out.println(b.getId()+" "+b.getTitle());   
//        }

    }
    
}
