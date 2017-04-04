/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.Book;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

/**
 *
 * @author Yousinho
 */
public class BookFacade {

    EntityManagerFactory emf;
    EntityManager em;

    public BookFacade() {
        Persistence.generateSchema("pu_development", null);

        emf = Persistence.createEntityManagerFactory("pu_development");
        em = emf.createEntityManager();
    }

    public void addBook(Book b) {

        try {
            em.getTransaction().begin();
            em.persist(b);
            em.getTransaction().commit();
        } finally {
            em.close();
        }

    }
    
    
        public List<Book> getAllBooks() {
        Query q = em.createQuery("SELECT b FROM Book b");
        List<Book> bL = ( List<Book>) q.getResultList();
        return bL;
    }
    


    public Book getBookByID(int id) {
        Query q = em.createQuery("SELECT b FROM Book b WHERE b.id = :id");
        q.setParameter("id", id);
        Book b = (Book) q.getSingleResult();
        return b;
    }

    public Book getBookByTitle(String t) {
        Query q = em.createQuery("SELECT b FROM Book b WHERE b.title = :t");
        q.setParameter("t", t);
        Book b = (Book) q.getSingleResult();
        return b;
    }

    public boolean deleteBookByID(int id) {
        boolean status;

        try {
            Query q = em.createQuery("SELECT b FROM Book b WHERE b.id = :id");
            q.setParameter("id", id);
            Book b = (Book) q.getSingleResult();
            em.getTransaction().begin();
            em.remove(b);
            em.getTransaction().commit();
            status = true;

        } catch (Exception e) {
            status = false;
            System.out.println("Ex "+e.getMessage());
        } finally {
            em.close();

        }

        return status;

    }
    
    
     public boolean updateBook(Book updateMe) {
        boolean status;

        try {
          Book oldBook = getBookByID(updateMe.getId());
            em.getTransaction().begin();
            oldBook.setTitle(updateMe.getTitle());
            oldBook.setInfo(updateMe.getInfo());
            oldBook.setMoreInfo(updateMe.getMoreInfo());
            em.getTransaction().commit();
            status = true;

        } catch (Exception e) {
            status = false;
            System.out.println("Ex "+e.getMessage());
        } finally {
            em.close();

        }

        return status;

    }


    
    
    
    

}
