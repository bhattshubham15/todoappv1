import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    'firebase': firebaseReducer,
    'firestore': firestoreReducer,
    'taskReducer': taskReducer,
    'authReducer': authReducer,
});

export default rootReducer;
