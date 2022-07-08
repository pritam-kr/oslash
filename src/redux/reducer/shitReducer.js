

export const shitReducer = (state = { selectedShits: [] }, action) => {

    switch (action.type) {
        case "SELECT_SHIT":
            return { ...state, selectedShits: [...state.selectedShits, action.payload] }

        case "REMOVE_SHIT":

        const removedShit = state.selectedShits.filter((eachShit) => eachShit.selectedShit.id !== action.payload)

        // console.log(removedShit)

            return {...state, selectedShits: [...removedShit]}    
        default:
            return state

    }

}