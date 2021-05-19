import axios from "axios";


class PrivateService {
  constructor() {

    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
    });
  }

  add = (data) => this.api.post("/private", data);
  //returns an array of markets
  get = () => this.api.get("/private/favorites")
  //deleteOne = (id) =>s this.api.delete(`/example/${id}`);
}

const privateService = new PrivateService()

export default privateService;
