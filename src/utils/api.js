import axios from "axios";

const apiGetter = async url => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error)
    }
}

export {apiGetter}