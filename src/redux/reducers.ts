

import uuidv1 from "uuid";
// ACTION NAMES

export type GameLocationId = string;
export interface GameLocation {
    readonly id: GameLocationId;
    readonly name: string;
    readonly description: string;
    readonly connectedLocations: GameLocationId[]

}
export const ADD_LOCATION = "ADD_LOCATION";
interface AddLocationAction {
    readonly type: "ADD_LOCATION",
    readonly payload: GameLocation
}
export function addLocation(name: string, description: string): AddLocationAction{
    return {
        type: ADD_LOCATION,
        payload: {
            id: uuidv1(),
            name,
            description,
            connectedLocations:[]
        }
    }
}
(window as any).addLocation = addLocation;

// Movement middleware will handle if you can move there or not, 'can't move there'
// Interpreter is the thing that actually handles actions

export const MOVE_TO_LOCATION = "MOVE_TO_LOCATION";
interface MoveToLocationAction {
    readonly type: "MOVE_TO_LOCATION",
    readonly payload: {
        new_location: GameLocationId
    }
}
type LocationAction = AddLocationAction | MoveToLocationAction;


export interface RootState {
    readonly currentLocationId: GameLocationId | null;
    readonly locations: GameLocation[]
}
const initialState: RootState = {
    currentLocationId: null,
    locations: []
}



export function rootReducer(state = initialState, action: LocationAction): RootState {
    switch(action.type){
        case MOVE_TO_LOCATION:
            return {
                ...state,
                currentLocationId : action.payload.new_location
            };
        case ADD_LOCATION:
            return {
                ...state,
                locations: state.locations.concat([action.payload])
            }
        default:
            console.log(action, "not found, nothing has changed");
            return state;
    }
    
}