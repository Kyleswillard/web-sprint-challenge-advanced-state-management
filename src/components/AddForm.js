import React from 'react'
import { connect } from 'react-redux'
import apis from '../apis'
import { ADD_SMURF, SET_ERROR } from '../types'

class AddForm extends React.Component {
    state = {
        id: new Date(),
        name: '',
        position: '',
        nickname: '',
        description: '',
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (!this.state.name) {
                throw new Error('Please enter a name!')
            }
            if (!this.state.nickname) {
                throw new Error('Please enter a nickname!')
            }
            if (!this.state.position) {
                throw new Error('Please enter a position!')
            } else {
                apis.post('/smurfs', this.state)
                    .then((res) => {
                        this.props.dispatch({
                            type: ADD_SMURF,
                            payload: res.data,
                        })
                    })
                    .catch((err) =>
                        this.props.dispatch({ type: SET_ERROR, payload: err })
                    )
                this.setState({})
            }
        } catch (error) {
            this.props.dispatch({ type: SET_ERROR, payload: error.message })
        }
    }

    render() {
        console.log(this.state)
        return (
            <section>
                <h2>Add Smurf</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="name"
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Position:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="position"
                            id="name"
                            value={this.state.position}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nickname:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="nickname"
                            id="name"
                            value={this.state.nickname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Description:</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="description"
                            id="name"
                            value={this.state.description}
                        />
                    </div>
                    <div
                        data-testid="errorAlert"
                        className="alert alert-danger"
                        role="alert"
                    >
                        Error:
                        {this.props.error === null
                            ? ' No Errors'
                            : this.props.error}
                    </div>
                    <button>Submit Smurf</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(AddForm)

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
