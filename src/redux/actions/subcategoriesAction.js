import axios from 'axios';

// const tokenObj = JSON.parse(localStorage.getItem('token'));
// const token = tokenObj.data?.token || '';

const token = JSON.parse(localStorage.getItem('token'))?.data?.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzcmluaXZhc3lyMjAwMEBnbWFpbC5jb20iLCJpYXQiOjE3MjU2NDc0MDEsImV4cCI6MTcyODIzOTQwMX0.ml3FipTqjljxWQ-7CimPfh4ZVPRu8oVzRc_o674M3dU';


export function subcategoriesAction() {
  return async (dispatch) => {
    const url =process.env.REACT_APP_BACKEND+`/subcategories/list-subcategory` ;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'SUBCATEGORY_LIST_REQUESTED' });

    try {
      const response = await axios.get(url, { headers });


      dispatch({
        type: 'SUBCATEGORY_LIST_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'SUBCATEGORY_LIST_FAILED',
        payload: error.response ? error.response.data : 'SUBCategories getting failed failed',
      });
    }
  };
}

export function addsubcategoriesAction(subcategoryName,categoryName, categorySequence, image) {
  return async (dispatch) => {
    const url =process.env.REACT_APP_BACKEND+`/subcategories/add-subcategory` ;
    let formdata =new FormData()
    formdata.set('subcategory_name', subcategoryName)
    formdata.set('category_name', categoryName)
    formdata.set('subcategory_sequence_no', categorySequence)
    formdata.set('image', image)

    console.log(formdata,"formdata");
    
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'ADDSUBCATEGORY_LIST_REQUESTED' });

    try {
      const response = await axios.post(url,formdata, { headers });


      dispatch({
        type: 'ADDSUBCATEGORY_LIST_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'ADDSUBCATEGORY_LIST_FAILED',
        payload: error.response ? error.response.data : 'SUBCategories getting failed failed',
      });
    }
  };
}

export const addSubCategoryDataOfReset = () => ({
  type: "SUBCATEGORY_ADD_DATA_OF_RESET",
});




export function subdeletecategoriesAction(id) {
  return async (dispatch) => {
    const url = `http://localhost:5000/subcategories/delete-subcategory/${id}`;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'SUBCATEGORY_DELETE_REQUESTED' });

    try {
      const response = await axios.delete(url, { headers });


      dispatch({
        type: 'SUBCATEGORY_DELETE_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'SUBCATEGORY_DELETE_FAILED',
        payload: error.response ? error.response.data : 'Categories DELETE failed failed',
      });
    }
  };
}

export const subdeleteCategoryDataOfReset = () => ({
  type: "SUBCATEGORY_DELETE_DATA_OF_RESET",
});

