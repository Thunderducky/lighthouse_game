import React, { FormEvent, ChangeEvent } from "react";
import { connect } from 'react-redux';
import { addLocation } from "../redux/reducers";

export interface OwnProps { };
export interface StateProps { }; // Props from the store
export interface DispatchProps { 
    addLocation: (name: string, description: string) => void
}; // Dispatch Props

export type Props = OwnProps & StateProps & DispatchProps;

class NewLocationForm extends React.Component<Props,{}> {
    state = {
        name: "" as string,
        description: "" as string
    }
    handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        this.props.addLocation(this.state.name, this.state.description);
        this.setState({
            name: "",
            description: ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="name">Location Name</label><input autoFocus name="name" type="text" onChange={this.handleInputChange} value={this.state.name}/> <br/>
                    <label htmlFor="name">Location Description</label><input name="description" type="text" onChange={this.handleInputChange} value={this.state.description}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export function mapStateToProps(storeState: any, ownProps: OwnProps): StateProps {
    return {}
}

// This component currently has no actions
export function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        addLocation: (name: string, description: string): void => { dispatch(addLocation(name, description)) }
    }
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(NewLocationForm);