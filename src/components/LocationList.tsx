import React from "react";
import { connect } from 'react-redux';
import { GameLocation } from "../redux/reducers";

export interface OwnProps { };
export interface StateProps { 
    locations: GameLocation[]
}; // Props from the store
export interface DispatchProps { }; // Dispatch Props

export type Props = OwnProps & StateProps & DispatchProps;

const LocationList: React.FC<Props> = (props:Props) => {
    return (
        <div>
            Location List goes here
            {
                props.locations.map((location:GameLocation) => {
                    return (
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            <p>{location.description}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export function mapStateToProps(storeState: any, ownProps: OwnProps): StateProps {
    return {
        locations: storeState.locations
    }
}

// This component currently has no actions
export function mapDispatchToProps(dispatch: any): DispatchProps {
    return {}
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(LocationList);