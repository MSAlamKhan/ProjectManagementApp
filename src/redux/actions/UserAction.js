import { BASE_URL } from "../../utils/Base_urls"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DROPDOWN_DATA, GETTING_LATE, GET_DASHBOARD_DATA, GET_ID_TASK, GET_LEAD_TASK, GET_SALESLEAD_DATA, GET_TRADE_DASHBOARD_DATA, SELECT_VIDEO, NOTIFICATION_LENGTH, TASK_DETAILS,SELECT_IMAGE } from "../reducer";

export const AddJob = (data, images, video, tareekh, load, Success, navigation) => {
    load(true)
    return async (dispatch) => {
        try {
            const userDetail = await AsyncStorage.getItem('user_details')
            const Data = JSON.parse(userDetail)
            const url = `${BASE_URL}store-lead/${Data.id}`
            const myData = new FormData()

            myData.append('firstname', data.fname)
            myData.append('lastname', data.lname)
            myData.append('email', data.email)
            myData.append('phone_number', data.phone)
            myData.append('city', data.city)
            myData.append('state', data.state)
            myData.append('zipcode', data.zipcode)
            myData.append('work_scope', data.scope)
            myData.append('work_budget', data.budget)
            myData.append('date_finalization', tareekh)
            myData.append('task_address', data.task_address)
            images.forEach((image, indx) => {
                myData.append(`images[${indx}]`, image)
            })
            video.forEach((video, indx) => {
                myData.append(`videos[${indx}]`, video)
            })

            const response = await fetch(url, {
                method: 'POST',
                body: myData
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                load(false)
                dispatch({type: SELECT_VIDEO, payload:[]})
                dispatch({type: SELECT_IMAGE, payload:[]})
                Success(true);
                setTimeout(() => {
                    Success(false);
                    navigation.goBack();
                }, 3000);
            } else {
                load(false)
                console.log(responseData.error.message)
            }

        } catch (error) {
            load(false)
            console.log('catch error in AddJob', error)
        }
    }
}

export const getSalesLead = () => {
    return async (dispatch) => {
        try {
            const userDetail = await AsyncStorage.getItem('user_details')
            const Data = JSON.parse(userDetail)
            const url = `${BASE_URL}sales-lead/${Data.id}`

            const response = await fetch(url, {
                method: 'GET',
            })
            const responseData = await response.json()
            if (responseData.success.status == 200) {
                dispatch({ type: GET_SALESLEAD_DATA, payload: responseData?.success?.data })
            } else {
                console.log(responseData.error.message)
            }
        } catch (error) {
            console.log('catch error in getSalesLead', error)
        }
    }
}

export const getSalesDashboard = (duration) => {
    return async (dispatch) => {
        const userDetail = await AsyncStorage.getItem('user_details')
        const Data = JSON.parse(userDetail)
        try {
            const url = `${BASE_URL}sales-dashboard/${Data.id}`

            const myData = new FormData()

            myData.append('duration', duration)

            const response = await fetch(url, {
                method: 'POST',
                body: myData,
            })
            const responseData = await response.json()
            if (responseData.success.status == 200) {
                dispatch({ type: GET_DASHBOARD_DATA, payload: responseData?.success?.data })
            } else {
                console.log('else error in getSalesDashboard', responseData?.error?.message)
            }
        } catch (error) {
            console.log('catch error in getSalesDashboard', error)
        }
    }
}
export const getTradeDashboard = () => {
    return async (dispatch) => {
        const userDetail = await AsyncStorage.getItem('user_details')
        const Data = JSON.parse(userDetail)
        try {
            const url = `${BASE_URL}worker-dashboard/${Data.id}`

            const response = await fetch(url, {
                method: 'GET',
            })

            const responseData = await response.json()
            if (responseData?.success?.status == 200) {
                dispatch({ type: GET_TRADE_DASHBOARD_DATA, payload: responseData?.success?.data })
            } else {
                console.log('else error in getTradeDashboard', responseData?.error?.message)
            }
        } catch (error) {
            console.log('catch error in getTradeDashboard', error)
        }
    }
}

export const CalenderSort = (date, load) => {
    load(true)
    return async (dispatch) => {
        const userDetail = await AsyncStorage.getItem('user_details')
        const Data = JSON.parse(userDetail)
        try {
            const url = `${BASE_URL}show-task-datewise/${Data.id}`
            const myData = new FormData()

            myData.append('date', date)

            const response = await fetch(url, {
                method: 'POST',
                body: myData,
            })
            const responseData = await response.json()
            if (responseData?.success?.status == 200) {
                load(false)
                dispatch({ type: TASK_DETAILS, payload: responseData?.success?.data })
            } else {
                load(false)
                console.log('else in CalenderSort', responseData.error.message)
                dispatch({ type: TASK_DETAILS, payload: [] })
            }
        } catch (error) {
            load(false)
            console.log('catch error in CalenderSort', error)
        }
    }
}

export const DoneApi = (item, load, select, reason, success) => {
    load(true)
    return async (dispatch) => {
        try {
            let url = `${BASE_URL}task-completed/${item.id}`

            const response = await fetch(url, {
                method: 'POST',
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                load(false)
                select(true)
                success(true)
                dispatch({ type: TASK_DETAILS, payload: responseData?.success?.data })
                dispatch(getTradeDashboard());
            } else if (responseData?.success?.status == 150) {
                reason(prev => ({ ...prev, isVisible: true }))
                load(false)
            } else {
                load(false)
                console.log('else error in DoneApi', responseData)
            }
        } catch (error) {
            load(false)
            console.log('DoneApi catch', error)
        }
    }
}

export const SubmitReason = (data, id, load, success, navigation) => {
    load(true)
    return async (dispatch) => {
        try {
            let url = `${BASE_URL}late-reason/${id}`
            let myData = new FormData()

            myData.append('reason', data)

            const response = await fetch(url, {
                method: 'POST',
                body: myData
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                load(false)
                success(true)
                navigation.navigate('homemain')
            } else {
                load(false)
                console.log('else error in SubmitReason', responseData)
            }
        } catch (error) {
            load(false)
            console.log('SubmitReason catch', error)
        }
    }
}

export const get_late = (id, load, navigation) => {
    load(true)
    return async (dispatch) => {
        try {
            let url = `${BASE_URL}show-reason/${id}`

            const response = await fetch(url, {
                method: 'GET',
            })

            const responseData = await response.json()
            if (responseData?.success?.status == 200) {
                load(false)
                dispatch({ type: GETTING_LATE, payload: responseData.success.data })
                navigation.navigate('latejob')
            } else {
                load(false)
                console.log('else error in get_late', responseData)
            }
        } catch (error) {
            load(false)
            console.log('get_late catch', error)
        }
    }
}

export const show_lead_task = (id, navigation) => {
    console.log('id', id)
    return async (dispatch) => {
        try {
            const url = `${BASE_URL}show-lead-task/${id}`

            const response = await fetch(url, {
                method: 'GET',
            })
            const responseData = await response.json()
            if (responseData?.success?.status == 200) {
                dispatch({ type: GET_LEAD_TASK, payload: responseData?.success?.data })
                navigation.navigate('alltask')
            } else {
                console.log('else error in show_lead_task', responseData.error.message)
            }
        } catch (error) {
            console.log('catch error in show_lead_task', error)
        }
    }
}

export const show_id_task = (id, navigation) => {
    return async (dispatch) => {
        try {
            const url = `${BASE_URL}show-lead-task/${id}`

            const response = await fetch(url, {
                method: 'GET',
            })
            const responseData = await response.json()
            if (responseData?.success?.status == 200) {
                console.log('data in show_id_task', responseData?.success?.data)
                dispatch({ type: GET_ID_TASK, payload: responseData?.success?.data })
                navigation.navigate('completejob')
            } else {
                console.log('else error in show_id_task', responseData.error.message)
            }
        } catch (error) {
            console.log('catch error in show_id_task', error)
        }
    }
}

export const getNotificationData = async (data, load) => {
    const userDetail = await AsyncStorage.getItem('user_details')
    const Data = JSON.parse(userDetail)
    try {
        load(true)
        const url = `https://sassolution.org/lee/api/show-notification/${Data.id}`
        const response = await fetch(url, {
            method: 'GET',
        })
        const responseData = await response.json()
        if (responseData.success.status == 200) {
            load(false)
            data(responseData?.success?.data)
        } else {
            load(false)
            console.log('else error in show_id_task', responseData.error.message)
        }
    } catch (error) {
        load(false)
        console.log('catch error in getNotificationData', error)
    }
}

export const getGraphData = async (type, value, load) => {
    const userDetail = await AsyncStorage.getItem('user_details')
    const Data = JSON.parse(userDetail)
    console.log('type', type)
    try {
        const url = `${BASE_URL}chart-dashboard/${Data.id}`
        const myData = new FormData()

        myData.append(`type`, type)

        const response = await fetch(url, {
            method: 'POST',
            body: myData
        })

        const responseData = await response.json()
        if (responseData?.success?.status == 200) {
            value(responseData?.success?.data)
            setTimeout(() => {
                load(false)
            }, 1000);
        } else {
            load(false)
            console.log('else error in getGraphData', responseData.error.message)
        }
    } catch (error) {
        load(false)
        console.log('catch error in getGraphData', error)
    }
}

export const getSaleGraphData = async (type, value, load, duration) => {
    const userDetail = await AsyncStorage.getItem('user_details')
    const Data = JSON.parse(userDetail)
    try {
        console.log('type', type,'===>', duration)
        const url = `${BASE_URL}chart-dashboard/${Data.id}`
        const myData = new FormData()

        myData.append(`type`, type)
        myData.append(`duration`, duration)

        const response = await fetch(url, {
            method: 'POST',
            body: myData
        })

        const responseData = await response.json()
        if (responseData.success.status == 200) {
            value(responseData?.success?.data)
            setTimeout(() => {
                load(false)
            }, 1000);
        } else {
            load(false)
            console.log('else error in getSaleGraphData', responseData.error.message)
        }
    } catch (error) {
        console.log('catch error in getSaleGraphData', error)
    }
}


export const get_notification_Count = () => {
    return async dispatch => {
        try {
            const userDetail = await AsyncStorage.getItem('user_details')
            const Data = JSON.parse(userDetail)

            let url = `${BASE_URL}notify-count/${Data.id}`

            const response = await fetch(url, {
                method: 'GET',
            });

            const responseData = await response.json();
            if (responseData.success.status == 200) {
                dispatch({ type: NOTIFICATION_LENGTH, payload: responseData?.success?.count })
            } else {
                console.log('get_notification_Count ==> else error', responseData?.message);
            }
        } catch (e) {
            console.log('get_notification_Count catch error', e);
        }
    }
}

export const getTradeDBTaskData = async (type, value, load) => {
    const userDetail = await AsyncStorage.getItem('user_details')
    const Data = JSON.parse(userDetail)
    try {
        load(true)
        const url = `${BASE_URL}show-workers-task/${Data.id}`
        const myData = new FormData()

        myData.append(`type`, type)

        const response = await fetch(url, {
            method: 'POST',
            body: myData
        })

        const responseData = await response.json()
        if (responseData?.success?.status == 200) {
            value(responseData?.success?.data)
            setTimeout(() => {
                load(false)
            }, 1000);
        } else {
            load(false)
            console.log('else error in getTradeDBTaskData', responseData.error.message)
        }
    } catch (error) {
        load(false)
        console.log('catch error in getTradeDBTaskData', error)
    }
}
export const getSaleDBTaskData = async (type, value, load) => {
    const userDetail = await AsyncStorage.getItem('user_details')
    const Data = JSON.parse(userDetail)
    try {
        load(true)
        const url = `${BASE_URL}show-sales-lead/${Data.id}`
        const myData = new FormData()

        myData.append(`type`, type)

        const response = await fetch(url, {
            method: 'POST',
            body: myData
        })

        const responseData = await response.json()
        if (responseData?.success?.status == 200) {
            value(responseData?.success?.data)
            setTimeout(() => {
                load(false)
            }, 1000);
        } else {
            load(false)
            console.log('else error in getSaleDBTaskData', responseData.error.message)
        }
    } catch (error) {
        load(false)
        console.log('catch error in getSaleDBTaskData', error)
    }
}

export const get_dropdown = () => {
    return async (dispatch) => {
        try {
            const url = `${BASE_URL}get-work`;
            const response = await fetch(url, {
                method: 'GET',
            });
            const responseData = await response.json();

            if (responseData?.success?.status == 200) {
                const transformedData = responseData.success.data.map(item => {
                    return { label: item.name, value: item.name };
                });

                dispatch({ type: DROPDOWN_DATA, payload: transformedData });
            } else {
                load(false);
                console.log('Error in get_dropdown:', responseData.error.message);
            }
        } catch (error) {
            load(false);
            console.log('Error in get_dropdown:', error);
        }
    };
};
