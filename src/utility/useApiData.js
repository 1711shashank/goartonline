import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (endpoint) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint);
                const responseData = response.data;
                const dataArray = [responseData];
                setData(dataArray);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [endpoint]);

    return data;
};

export default useApiData;
