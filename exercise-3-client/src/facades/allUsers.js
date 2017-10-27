import fetchHelper, {errorChecker} from "./fetchHelpers"
import React from 'react';
const URL = require("../../package.json").serverURL;

class AllUsers {
    constructor() {
        this._data = "";
        this._errorMessage = "";
    }

    getData = (cb) => {
        this._errorMessage = "";
        this._messageFromServer = "";
        let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
        const options = fetchHelper.makeOptions("GET", true);
        fetch(URL + "api/allUsers", options)
            .then((res) => {
                resFromFirstPromise = res;
                return res.json();
            }).then((data) => {
            errorChecker(resFromFirstPromise,data);
            if (cb) {
                cb(null, data.users.map((user)=><p>{user}</p>))
            }
        }).catch(err => {
            console.log(JSON.stringify(err))
            if (cb) {
                cb({ err: fetchHelper.addJustErrorMessage(err) })
            }
        })
    }
}

let allUsersStore = new AllUsers();

//Only for debugging
//window.userStore = userStore;
export default allUsersStore;