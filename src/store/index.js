import {combineReducers} from 'redux'
import {gamesReducer} from './reducer/gamesReducer'

const RootReducer = combineReducers({
    games: gamesReducer
})

export default RootReducer