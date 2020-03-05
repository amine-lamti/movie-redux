import {v4 as uuidv4} from "uuid"
import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE, SEARCH } from "../actions/types"

const initialState = [

    {
        id: uuidv4(),
        title: "DORA",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh99NQ5Fa7-iKR3FBJwoL9-71l52Mtn1--T4OzWERnJsNpurg1",
        rating:4,
        year:"2011"
    },
    {
        id: uuidv4(),
        title: "LION",
        image:"https://fr.web.img4.acsta.net/c_215_290/pictures/20/01/07/09/01/1113711.jpg",
        rating:2,
        year:"2018"
    },
    {
        id: uuidv4(),
        title: "ALITA",
        image:"https://media.senscritique.com/media/000018296111/325/Alita_Battle_Angel.jpg",
        rating:3,
        year:"2005"
    }
];

const movieReducer = (state=initialState, action) => {
    switch(action.type){
      case ADD_MOVIE:
        return [...state, action.payload]
      case EDIT_MOVIE:
        return state.map(el => el.id === action.payload.id ? action.payload : el)
      case DELETE_MOVIE:
        return state.filter(el => el.id !== action.payload)
      case SEARCH:
        return initialState.filter(el => el.rating >= action.payload.rating && el.title.toUpperCase().includes(action.payload.keyword.toUpperCase().trim()))
      default:
          return state
    }
}

export default movieReducer