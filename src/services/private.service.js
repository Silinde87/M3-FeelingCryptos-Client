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

  delete = (data) => this.api.post("/private/delete", data);
}

const privateService = new PrivateService()

export default privateService;
