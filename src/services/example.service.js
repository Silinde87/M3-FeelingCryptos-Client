import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class ExampleService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
    });
  }

  getAll = () => this.api.get("/example");

  getOne = (id) => this.api.get(`/example/${id}`);


  create = (data) => this.api.post(`/example/${id}`, data);


  deleteOne = (id) => this.api.delete(`/example/${id}`);

}

// Create instance (object) containing all axios calls as methods
const exampleService = new ExampleService();

export default exampleService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
