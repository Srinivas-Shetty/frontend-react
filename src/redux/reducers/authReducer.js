const initialState = {
  loginData: { loading: false, data: null, error: null },
  registerData: { loading: false, data: null, error: null },
  resetpasswordData: { loading: false, data: null, error: null },
  updatepasswordData: { loading: false, data: null, error: null },

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      return {
        ...state,
        loginData: { data: null, error: null, loading: true },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginData: {
          data: action.payload,
          error: null,
          loading: false,
        },
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loginData: {
          data: null,
          error: action.payload,
          loading: false,
        },
      };

      case "LOGIN_DATA_OF_RESET":
        return {
          ...state,
          loginData: { data: null, error: null, loading: false },
        };


      case 'REGISTER_REQUESTED':
        return {
          ...state,
          registerData: { data: null, error: null, loading: true },
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          registerData: {
            data: action.payload,
            error: null,
            loading: false,
          },
        };
      case 'REGISTER_FAILED':
        return {
          ...state,
          registerData: {
            data: null,
            error: action.payload,
            loading: false,
          },
        };

        case "REGISTER_DATA_OF_RESET":
          return {
            ...state,
            registerData: { data: null, error: null, loading: false },
          };



          case 'RESET_REQUESTED':
            return {
              ...state,
              resetpasswordData: { data: null, error: null, loading: true },
            };
          case 'RESET_SUCCESS':
            return {
              ...state,
              resetpasswordData: {
                data: action.payload,
                error: null,
                loading: false,
              },
            };
          case 'RESET_FAILED':
            return {
              ...state,
              resetpasswordData: {
                data: null,
                error: action.payload,
                loading: false,
              },
            };
    
            case "RESETPASSWORD_DATA_OF_RESET":
              return {
                ...state,
                resetpasswordData: { data: null, error: null, loading: false },
              };
    
    
              case 'UPDATE_REQUESTED':
                return {
                  ...state,
                  updatepasswordData: { data: null, error: null, loading: true },
                };
              case 'UPDATE_SUCCESS':
                return {
                  ...state,
                  updatepasswordData: {
                    data: action.payload,
                    error: null,
                    loading: false,
                  },
                };
              case 'UPDATE_FAILED':
                return {
                  ...state,
                  updatepasswordData: {
                    data: null,
                    error: action.payload,
                    loading: false,
                  },
                };
        
                case "UPDATEPASSWORD_DATA_OF_RESET":
                  return {
                    ...state,
                    updatepasswordData: { data: null, error: null, loading: false },
                  };
        
        

    default:
      return state;
  }
};

export default authReducer;
