import React from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'

export class SmurfDisplay extends React.Component {
    render() {
        const data = this.props.smurfs
        console.log('data', data)

        return this.props.isLoading === true
            ? 'Loading...'
            : data.map((smurf) => (
                  <Smurf smurfName={smurf.name} smurfId={smurf.id} />
              ))
    }
}
const mapStateToProps = (state) => {
    console.log(state.smurfs)
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
    }
}
export default connect(mapStateToProps)(SmurfDisplay)

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
