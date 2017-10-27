package rest;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("randomNumber")
@RolesAllowed("User")
public class RandomNumber {
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
      double number = Math.floor((Math.random()*100)+1);
    return "{\"number\" : \""+number+"\"}"; 
  }
 
}