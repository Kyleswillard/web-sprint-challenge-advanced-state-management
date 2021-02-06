import axios from 'axios'
export const FETCH_SMURF = 'FETCH_SMURF'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

export const fetchSmurf = async (state, action) => {
    await axios.get(`http:/localhost:3333/smurfs`).then((res) => res.data)
}
export const addSmurf = async (state, action) => {
    //THIS IS A POST REQUEST!!!
    await axios.post(`http:/localhost:3333/smurfs`)
}
export const setError = (state, action) => {
    return {
        type: SET_ERROR,
        payload: action.payload,
    }
}
