import axios from "axios";
import {message} from "antd";

export const postEvent = (data) => (dispatch) => {
  axios.post("/add-url", data)
    .then(success => {
      message.success("URL Added!", 4);
    })
    .catch(error => {
      message.error(`An Error Occurred.`, 4);
      message.error(error, 4);
    });
}