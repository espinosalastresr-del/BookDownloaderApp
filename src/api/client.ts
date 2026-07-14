import axios from "axios";

import {
CONFIG
}
from "../config/config";


export const api =
axios.create({

    baseURL: CONFIG.API_URL,

    timeout:30000

});