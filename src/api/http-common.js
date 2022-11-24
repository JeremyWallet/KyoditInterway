import axios from "axios";

//file to manage the api in case the address changes
export default axios.create({
    baseURL: "http://kapi.kyodit.com",
    headers: {
        "Content-type": "application/json",
    }
});

