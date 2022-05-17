import axios from 'axios';

/**
 * 	The status of a match. 
 * [
 * SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | 
 * POSTPONED | SUSPENDED | CANCELED
 * ]
 */

const baseUrl = 'https://api.football-data.org/v2';

/**
 * Get all matches for Barca
 * @param {*} status 
 */

const getMatches = async (status='FINISHED') => {
    const path = `/teams/81/matches?status=${status}`;
    const response = await axios.get(path, {
        baseURL: baseUrl,
        headers: {
            "X-Auth-Token": "86ec1d9bfcbf4cf7a1f1839f8123b6c7",
        }
    });

    console.log('response: ', response);

    if (response?.error) {
        console.log('error', response.error);
        return [];
    }

    return response.data.matches;
}

export { getMatches };


const getScheduledMatches = async (status='SCHEDULED') => {
    const path = `/teams/81/matches?status=${status}`;
    const response = await axios.get(path, {
        baseURL: baseUrl,
        headers: {
            "X-Auth-Token": "86ec1d9bfcbf4cf7a1f1839f8123b6c7",
        }
    });

    console.log('response: ', response);

    if (response?.error) {
        console.log('error', response.error);
        return [];
    }

    return response.data.matches;
}

export { getScheduledMatches };
