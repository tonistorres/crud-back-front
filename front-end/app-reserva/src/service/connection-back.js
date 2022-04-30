  import axios from "axios";

  export const apiConnectionReservation = axios.create({
    baseURL: "http://localhost:3001/reservations",
  });


  export const apiConnectionLogin = axios.create({
    baseURL: "http://localhost:3001/logins",
  });



  export const apiAuthentication = axios.create({
    baseURL: "http://localhost:3001/logins/authentication",
  });

  
  