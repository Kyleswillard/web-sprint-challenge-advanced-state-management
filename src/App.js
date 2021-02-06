import React, { Component } from 'react'
import { connect } from 'react-router'
import AddForm from './components/AddForm'
import SmurfDisplay from './components/SmurfDisplay'

import apis from './apis'
import { FETCH_SMURF, FETCH_SMURF_SUCCESS } from './types'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.smurfs.length <= 0) {
            this.props.dispatch({ type: FETCH_SMURF })
            apis.get('/smurfs')
                .then((res) => {
                    this.props.dispatch({
                        type: FETCH_SMURF_SUCCESS,
                        payload: res.data,
                    })
                })
                .catch((err) => console.error(err))
        }
    }
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand">Smurf Village Database</a>
                </nav>
                <main>
                    <AddForm />
                    <SmurfDisplay dipatch={this.props.dispatch} apis={apis} />
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
    }
}
export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(App)

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
