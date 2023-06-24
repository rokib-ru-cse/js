import axios from "../../helpers/axios"
import { pageConstants } from "./actionConstants"

export const createPage = (formData) => {
    return async (dispatch) => {
        dispatch({ type: pageConstants.CREATE_PAGE_REQUEST })
        try {
            const res = await axios.post('/page/create', formData)
            if (res.status == 201) {
                dispatch({
                    type: pageConstants.CREATE_PAGE_SUCCESS,
                    payload: { page: res.data.page }
                })
            } else {
                dispatch({
                    type: pageConstants.CREATE_PAGE_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        } catch (error) {
            console.log('page action page',error);
        }
    }
}