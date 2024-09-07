import axios from 'axios';

// const tokenObj = JSON.parse(localStorage.getItem('token'));
// const token = tokenObj.data?.token || '';

const token = JSON.parse(localStorage.getItem('token'))?.data?.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzcmluaXZhc3lyMjAwMEBnbWFpbC5jb20iLCJpYXQiOjE3MjU2NDc0MDEsImV4cCI6MTcyODIzOTQwMX0.ml3FipTqjljxWQ-7CimPfh4ZVPRu8oVzRc_o674M3dU';


export function productsAction() {
  return async (dispatch) => {
    const url =process.env.REACT_APP_BACKEND+`/products/list-product` ;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'PRODUCTS_LIST_REQUESTED' });

    try {
      const response = await axios.get(url, { headers });


      dispatch({
        type: 'PRODUCTS_LIST_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'PRODUCTS_LIST_FAILED',
        payload: error.response ? error.response.data : 'PRODUCTS getting failed failed',
      });
    }
  };
}

export function addProductsAction(productName,categoryName,subcategoryName,  image) {
  return async (dispatch) => {
    const url =process.env.REACT_APP_BACKEND+`/products/add-product` ;
    let formdata =new FormData()
    formdata.set('product_name', productName)
    formdata.set('category_name', categoryName)
    formdata.set('subcategory_name', subcategoryName)
    formdata.set('image', image)

    console.log(formdata,"formdata");
    
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'PRODUCT_LIST_REQUESTED' });

    try {
      const response = await axios.post(url,formdata, { headers });


      dispatch({
        type: 'PRODUCT_LIST_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'PRODUCT_LIST_FAILED',
        payload: error.response ? error.response.data : 'product adding failed failed',
      });
    }
  };
}

export const addproductDataOfReset = () => ({
  type: "PRODUCT_ADD_DATA_OF_RESET",
});




export function productdeleteAction(id) {
  return async (dispatch) => {
    const url = `http://localhost:5000/products/delete-product/${id}`;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'PRODUCT_DELETE_REQUESTED' });

    try {
      const response = await axios.delete(url, { headers });


      dispatch({
        type: 'PRODUCT_DELETE_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'PRODUCT_DELETE_FAILED',
        payload: error.response ? error.response.data : 'Categories DELETE failed failed',
      });
    }
  };
}

export const productdeleteDataOfReset = () => ({
  type: "PRODUCT_DELETE_DATA_OF_RESET",
});

