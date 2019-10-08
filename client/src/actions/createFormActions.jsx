import axios from "axios";

export const postEvent = (data) => (dispatch) => {
  axios.post("/add-url", data)
    .then(success => {
      console.log("success!");
    })
    .catch(error => {
      console.error("error");
    });
}