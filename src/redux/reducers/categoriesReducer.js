const initialState = {
    categoriesData: { loading: false, data: null, error: null },
    addCategoriesData: { loading: false, data: null, error: null },
    deleteCategoriesData: { loading: false, data: null, error: null },
    getIdCategoriesData: { loading: false, data: null, error: null },
    editCategoriesData: { loading: false, data: null, error: null },
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CATEGORY_LIST_REQUESTED':
        return {
          ...state,
          categoriesData: { data: null, error: null, loading: true },
        };
      case 'CATEGORY_LIST_SUCCESS':
        return {
          ...state,
          categoriesData: {
            data: action.payload,
            error: null,
            loading: false,
          },
        };
      case 'CATEGORY_LIST_FAILED':
        return {
          ...state,
          categoriesData: {
            data: null,
            error: action.payload,
            loading: false,
          },
        };
     
     

        case 'CATEGORY_ADD_REQUESTED':
          return {
            ...state,
            addCategoriesData: { data: null, error: null, loading: true },
          };
        case 'CATEGORY_ADD_SUCCESS':
          return {
            ...state,
            addCategoriesData: {
              data: action.payload,
              error: null,
              loading: false,
            },
          };
        case 'CATEGORY_ADD_FAILED':
          return {
            ...state,
            addCategoriesData: {
              data: null,
              error: action.payload,
              loading: false,
            },
          };
       


          case "CATEGORY_ADD_DATA_OF_RESET":
            return {
              ...state,
              addCategoriesData: { data: null, error: null, loading: false },
            };



            case 'CATEGORY_DELETE_REQUESTED':
              return {
                ...state,
                deleteCategoriesData: { data: null, error: null, loading: true },
              };
            case 'CATEGORY_DELETE_SUCCESS':
              return {
                ...state,
                deleteCategoriesData: {
                  data: action.payload,
                  error: null,
                  loading: false,
                },
              };
            case 'CATEGORY_DELETE_FAILED':
              return {
                ...state,
                deleteCategoriesData: {
                  data: null,
                  error: action.payload,
                  loading: false,
                },
              };


              case "CATEGORY_DELETE_DATA_OF_RESET":
                return {
                  ...state,
                  deleteCategoriesData: { data: null, error: null, loading: false },
                };

                
                case 'CATEGORY_ID_REQUESTED':
                  return {
                    ...state,
                    getIdCategoriesData: { data: null, error: null, loading: true },
                  };
                case 'CATEGORY_ID_SUCCESS':
                  return {
                    ...state,
                    getIdCategoriesData: {
                      data: action.payload,
                      error: null,
                      loading: false,
                    },
                  };
                case 'CATEGORY_ID_FAILED':
                  return {
                    ...state,
                    getIdCategoriesData: {
                      data: null,
                      error: action.payload,
                      loading: false,
                    },
                  };
               
    

                  case 'CATEGORY_EDIT_REQUESTED':
                    return {
                      ...state,
                      editCategoriesData: { data: null, error: null, loading: true },
                    };
                  case 'CATEGORY_EDIT_SUCCESS':
                    return {
                      ...state,
                      editCategoriesData: {
                        data: action.payload,
                        error: null,
                        loading: false,
                      },
                    };
                  case 'CATEGORY_EDIT_FAILED':
                    return {
                      ...state,
                      editCategoriesData: {
                        data: null,
                        error: action.payload,
                        loading: false,
                      },
                    };
                 


                    case "CATEGORY_EDIT_DATA_OF_RESET":
                      return {
                        ...state,
                        editCategoriesData: { data: null, error: null, loading: false },
                      };
          







                      

        default:
        return state;
    }
  };
  
  export default categoriesReducer;
  