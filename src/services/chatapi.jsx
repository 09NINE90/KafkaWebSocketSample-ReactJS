import axios from "axios";

const chatAPI = {
    sendMessage: async (username, text) => {
        let msg = {
            sender: username,
            content: text
        }
        return await axios.post(`http://localhost:8085/api/send`, msg, {withCredentials: true});
    }
}

export default chatAPI;