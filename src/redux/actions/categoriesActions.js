import axios from 'axios';

// const tokenObj = JSON.parse(localStorage?.getItem('token'));
// const token = JSON.parse(localStorage?.getItem('token')).data?.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzcmluaXZhc3lyMjAwMEBnbWFpbC5jb20iLCJpYXQiOjE3MjU2NDc0MDEsImV4cCI6MTcyODIzOTQwMX0.ml3FipTqjljxWQ-7CimPfh4ZVPRu8oVzRc_o674M3dU';

// const tokenObj = JSON.parse(localStorage.getItem('token'));
const token = JSON.parse(localStorage.getItem('token'))?.data?.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzcmluaXZhc3lyMjAwMEBnbWFpbC5jb20iLCJpYXQiOjE3MjU2NDc0MDEsImV4cCI6MTcyODIzOTQwMX0.ml3FipTqjljxWQ-7CimPfh4ZVPRu8oVzRc_o674M3dU'; // Handle undefined token safely


export function categoriesAction() {
  return async (dispatch) => {
    // const url = 'http://localhost:5000/categories/list-category';
    const url = process.env.REACT_APP_BACKEND+`/categories/list-category`;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'CATEGORY_LIST_REQUESTED' });

    try {
      const response = await axios.get(url, { headers });


      dispatch({
        type: 'CATEGORY_LIST_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CATEGORY_LIST_FAILED',
        payload: error.response ? error.response.data : 'Categories getting failed failed',
      });
    }
  };
}

export function AddcategoriesAction(categoryName,categorySequence,image) {
  return async (dispatch) => {
    // const url = 'http://localhost:5000/categories/add-category';
    const url = process.env.REACT_APP_BACKEND+`/categories/add-category`;
    // let data11 = {
    //   category_name: categoryName,
    //   sequence_no: categorySequence,
    //   image: image
    // }
    let formdata =new FormData()
    formdata.set('category_name', categoryName)
    formdata.set('sequence_no', categorySequence)
    formdata.set('image', image)
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'CATEGORY_ADD_REQUESTED' });

    try {
      const response = await axios.post(url,formdata, { headers });


      dispatch({
        type: 'CATEGORY_ADD_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CATEGORY_ADD_FAILED',
        payload: error.response ? error.response.data : 'Categories getting failed failed',
      });
    }
  };
}

export const addCategoryDataOfReset = () => ({
  type: "CATEGORY_ADD_DATA_OF_RESET",
});

export function deletecategoriesAction(id) {
  return async (dispatch) => {
    // const url = `http://localhost:5000/categories/delete-category/${id}`;
    const url = process.env.REACT_APP_BACKEND+`/categories/delete-category/${id}`;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'CATEGORY_DELETE_REQUESTED' });

    try {
      const response = await axios.delete(url, { headers });


      dispatch({
        type: 'CATEGORY_DELETE_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CATEGORY_DELETE_FAILED',
        payload: error.response ? error.response.data : 'Categories DELETE failed failed',
      });
    }
  };
}

export const deleteCategoryDataOfReset = () => ({
  type: "CATEGORY_DELETE_DATA_OF_RESET",
});


export function getIdcategoriesAction(id) {
  return async (dispatch) => {
    console.log(id,"im heee");
    
    const url = process.env.REACT_APP_BACKEND+`/categories/get-category/${id}`;
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'CATEGORY_ID_REQUESTED' });

    try {
      const response = await axios.get(url, { headers });


      dispatch({
        type: 'CATEGORY_ID_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CATEGORY_ID_FAILED',
        payload: error.response ? error.response.data : 'Categories getting failed failed',
      });
    }
  };
}

export function editcategoriesAction(categoryName,categorySequence,status,image,category_id) {
  return async (dispatch) => {
    const url = process.env.REACT_APP_BACKEND+`/categories/edit-category`;
    let formdata =new FormData()
    formdata.set('category_name', categoryName)
    formdata.set('sequence_no', categorySequence)
    formdata.set('status', status)
    formdata.set('image', image)
    formdata.set('category_id', category_id)
    const headers = {
      Authorization: "Bearer " + token,
    };
    dispatch({ type: 'CATEGORY_EDIT_REQUESTED' });

    try {
      const response = await axios.put(url,formdata, { headers });


      dispatch({
        type: 'CATEGORY_EDIT_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CATEGORY_EDIT_FAILED',
        payload: error.response ? error.response.data : 'Categories edited failed',
      });
    }
  };
}

export const editCategoryDataOfReset = () => ({
  type: "CATEGORY_EDIT_DATA_OF_RESET",
});



