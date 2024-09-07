const initialState = {
    subcategoriesData: { loading: false, data: null, error: null },
    addsubcategoriesData: { loading: false, data: null, error: null },
    subdeleteCategoriesData: { loading: false, data: null, error: null },
  };
  
  const subcategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBCATEGORY_LIST_REQUESTED':
        return {
          ...state,
          subcategoriesData: { data: null, error: null, loading: true },
        };
      case 'SUBCATEGORY_LIST_SUCCESS':
        return {
          ...state,
          subcategoriesData: {
            data: action.payload,
            error: null,
            loading: false,
          },
        };
      case 'SUBCATEGORY_LIST_FAILED':
        return {
          ...state,
          subcategoriesData: {
            data: null,
            error: action.payload,
            loading: false,
          },
        };
     
     
        case 'ADDSUBCATEGORY_LIST_REQUESTED':
          return {
            ...state,
            addsubcategoriesData: { data: null, error: null, loading: true },
          };
        case 'ADDSUBCATEGORY_LIST_SUCCESS':
          return {
            ...state,
            addsubcategoriesData: {
              data: action.payload,
              error: null,
              loading: false,
            },
          };
        case 'ADDSUBCATEGORY_LIST_FAILED':
          return {
            ...state,
            addsubcategoriesData: {
              data: null,
              error: action.payload,
              loading: false,
            },
          };
       
       
          case "SUBCATEGORY_ADD_DATA_OF_RESET":
            return {
              ...state,
              addsubcategoriesData: { data: null, error: null, loading: false },
            };

     
            case 'SUBCATEGORY_DELETE_REQUESTED':
              return {
                ...state,
                subdeleteCategoriesData: { data: null, error: null, loading: true },
              };
            case 'SUBCATEGORY_DELETE_SUCCESS':
              return {
                ...state,
                subdeleteCategoriesData: {
                  data: action.payload,
                  error: null,
                  loading: false,
                },
              };
            case 'SUBCATEGORY_DELETE_FAILED':
              return {
                ...state,
                subdeleteCategoriesData: {
                  data: null,
                  error: action.payload,
                  loading: false,
                },
              };


              case "SUBCATEGORY_DELETE_DATA_OF_RESET":
                return {
                  ...state,
                  subdeleteCategoriesData: { data: null, error: null, loading: false },
                };

          


        default:
        return state;
    }
  };
  
  export default subcategoriesReducer;
  