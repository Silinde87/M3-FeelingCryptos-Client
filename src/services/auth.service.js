import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  signup(data) {
    return this.auth.post("/auth/signup", data)
  }

  login(data) {      
    return this.auth.post("/auth/login", data);
  }

  logout() {
    return this.auth.post("/auth/logout");
  }

  loggedIn() {
    return this.auth.get("/auth/profile");
  }

  edit(data){
    return this.auth.put("/auth/edit", data);
  }

  twitter() {
    return this.auth.get("/auth/twitter");
  }
}


const authService = new AuthService();

export default authService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
