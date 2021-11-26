import ACTION_PEOPLE from '../actions/peopleAction';
import PeopleRepository from '../../repository/peopleRepository';

let initState = {
    data : [],
    isLoading : false
}

export const peopleReducer = (state = initState, action) => {
    switch(action.type){
        case ACTION_PEOPLE.REQUESTING :
            return state
        case ACTION_PEOPLE.RESOLVED :
            return {...state, data : action.data}
        case ACTION_PEOPLE.REJECT :
            return state
        default : 
            return state;
    }
}

class PeopleReducer {
    static fetch = () => async(dispatch, getState) => {
        const data = await PeopleRepository.get()
        dispatch({
            type : ACTION_PEOPLE.RESOLVED,
            data : data,
        })
    }

    static addPeople = (nome) => async(dispatch, getState) => {
        dispatch(ACTION_PEOPLE.requesting())
        await PeopleRepository.post(nome)
        dispatch(PeopleReducer.fetch())
    }

    static deletePeople = (id) => async(dispatch, getState) => {
        dispatch(ACTION_PEOPLE.requesting())
        await PeopleRepository.delete(id)
        dispatch(PeopleReducer.fetch())
    } 
 
}



export default PeopleReducer