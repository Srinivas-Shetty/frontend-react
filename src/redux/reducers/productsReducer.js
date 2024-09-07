const initialState = {
    productsData: { loading: false, data: null, error: null },
    addproductData: { loading: false, data: null, error: null },
    deleteproductData: { loading: false, data: null, error: null },
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PRODUCTS_LIST_REQUESTED':
        return {
          ...state,
          productsData: { data: null, error: null, loading: true },
        };
      case 'PRODUCTS_LIST_SUCCESS':
        return {
          ...state,
          productsData: {
            data: action.payload,
            error: null,
            loading: false,
          },
        };
      case 'PRODUCTS_LIST_FAILED':
        return {
          ...state,
          productsData: {
            data: null,
            error: action.payload,
            loading: false,
          },
        };
     
     
        case 'PRODUCT_LIST_REQUESTED':
          return {
            ...state,
            addproductData: { data: null, error: null, loading: true },
          };
        case 'PRODUCT_LIST_SUCCESS':
          return {
            ...state,
            addproductData: {
              data: action.payload,
              error: null,
              loading: false,
            },
          };
        case 'PRODUCT_LIST_FAILED':
          return {
            ...state,
            addproductData: {
              data: null,
              error: action.payload,
              loading: false,
            },
          };
       
       
          case "PRODUCT_ADD_DATA_OF_RESET":
            return {
              ...state,
              addproductData: { data: null, error: null, loading: false },
            };

     
            case 'PRODUCT_DELETE_REQUESTED':
              return {
                ...state,
                deleteproductData: { data: null, error: null, loading: true },
              };
            case 'PRODUCT_DELETE_SUCCESS':
              return {
                ...state,
                deleteproductData: {
                  data: action.payload,
                  error: null,
                  loading: false,
                },
              };
            case 'PRODUCT_DELETE_FAILED':
              return {
                ...state,
                deleteproductData: {
                  data: null,
                  error: action.payload,
                  loading: false,
                },
              };


              case "PRODUCT_DELETE_DATA_OF_RESET":
                return {
                  ...state,
                  deleteproductData: { data: null, error: null, loading: false },
                };

          


        default:
        return state;
    }
  };
  
  export default productsReducer;
  