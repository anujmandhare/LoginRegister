import { constants } from "./Constants";

const login = (data) => ({ type: constants.Login, data });

const register = (data) => ({ type: constants.Register, data });

const success = (data) => ({ type: constants.Success, data });

const responseError = (data) => ({ type: constants.ResponseError, data });

const clearAllCookies = () => ({ type: constants.ClearAllCookies });

export { login, register, success, responseError, clearAllCookies };
