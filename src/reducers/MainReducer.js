import { bake_cookie, delete_cookie, read_cookie } from "sfcookies";
import { constants } from "../actioncreators/Constants";

const mainReducer = (state = {}, action) => {
  // console.log("mainReducer state", state, "action", action);
  state.username = Array.isArray(read_cookie("username"))
    ? ""
    : read_cookie("username");

  switch (action.type) {
    case constants.Success:
      // console.log("mainReducer Success", action.data);
      bake_cookie("username", action.data.username);
      state = { username: action.data.username, success: true };
      return state;
    case constants.ResponseError:
      // console.log("mainReducer Response error", action);
      state = { error: "Unable to login/register" };
      return state;
    case constants.ClearAllCookies:
      // console.log("mainReducer ClearAllCookies");
      delete_cookie("username");
      state = { username: "" };
      return state;
    default:
      // console.log("Entered Default case", state);
      state = {};
      return state;
  }
};

export default mainReducer;