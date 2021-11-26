import React from 'react'
import App from '../App'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PeopleReducer from '../store/reducers/peopleReducer'

export function containerApp() {
    return (
        <div>
            <App />       
        </div>
    )
}


const mapStateToProps = state => ({
    peoples : state.peopleReducer.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetch : () => PeopleReducer.fetch(),
    add : (nome) => PeopleReducer.addPeople(nome),
    del : (id) => PeopleReducer.deletePeople(id)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);