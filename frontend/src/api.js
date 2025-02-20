import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000'

export const uploadAadhar = async (data) => {
    const response = await axios.post(`${API_URL}/aadhar`, data);
    return response.data;
};

export const uploadGate = async (data) => {
    const response = await axios.post(`${API_URL}/gate`, data);
    return response.data;
};

export const uploadIncome = async (data) => {
    const response = await axios.post(`${API_URL}/income`, data);
    return response.data;
};
export const uploadPdf = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000/upload',
                'Content-Type': 'multipart/form-data'
            },
        });
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error; // Rethrow the error to be handled in the component
    }
};