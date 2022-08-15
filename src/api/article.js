import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getArticles = (data) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/messages/`,
        data
    });
}

export const ARTICLE_API = {getArticles};
