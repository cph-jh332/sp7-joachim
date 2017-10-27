package rest;

import facades.UserFacade;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

@Path("allUsers")
@RolesAllowed("Admin")
public class AllUsers {
  
    
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
    UserFacade uf = new UserFacade(emf);
    
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
      List<entity.User> ul = uf.getUsers();
      String json = "{\"users\":[";
      for(int i = 0; i < ul.size(); i++){
          if(i == ul.size()-1){
              json += "\""+ul.get(i).getUserName()+"\"";
          }else{
              json += "\""+ul.get(i).getUserName()+"\",";
          }
      }
      json += "]}";
      return json;
  }
 
}