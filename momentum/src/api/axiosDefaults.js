import axios from "axios";

axios.defaults.baseURL = "https://definitive-6f131423af8d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;