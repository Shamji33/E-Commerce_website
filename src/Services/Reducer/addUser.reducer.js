import { ADDUSERREJ, ADDUSERREQ, ADDUSERRES, GDRJ, GDRQ, GDRS } from "../Const";


export const InitialState = {
  users: [],
  user: null,
  isLoading: false,
  err: null
};

export const addUserReducer = (state = InitialState, action) => {
  switch (action.type) {


    case ADDUSERREQ:
      return {
        ...state,
        isLoading: true,
        err: null
      };

    case ADDUSERRES:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case ADDUSERREJ:

      return {
        ...state,
        isLoading: false,
        err: { msg: "Server is busy", status: 404 },
      };


      case GDRQ:
        return {
          ...state,
          isLoading: true,
          err: null,
        };
  
      case GDRS:
        return {
          ...state,
          users: action.payload,
          isLoading: false,
          err: null,
        };
  
      case GDRJ:
        return {
          ...state,
          isLoading: false,
          err: action.payload,
        };
    default:
      return state;
  }
};