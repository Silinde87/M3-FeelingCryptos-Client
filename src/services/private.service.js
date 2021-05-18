import axios from "axios";


export default class PrivateService {
  constructor() {

    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
    });
  }

  add = (data) => this.api.post("/private/favorites", data);
  //returns an array of markets
  get = () => this.api.get("/private/favorites")
  //deleteOne = (id) =>s this.api.delete(`/example/${id}`);
}
