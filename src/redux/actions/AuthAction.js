import { BASE_URL } from "../../utils/Base_urls"
import { OTP, USER_DETAILS } from "../reducer"
import AsyncStorage from '@react-native-async-storage/async-storage';



export const LoginApi = (data, setLoading) => {
    return async (dispatch) => {
        try {
            setLoading(true)
            const baseUrl = `${BASE_URL}login`
            const myData = new FormData()

            myData.append('email', data.email)
            myData.append('password', data.password)

            const response = await fetch(baseUrl, {
                method: 'post',
                body: myData
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                setLoading(false)
                console.log('responseData', responseData)
                dispatch({ type: USER_DETAILS, payload: responseData?.success?.data })
                await AsyncStorage.setItem('user_details', JSON.stringify(responseData?.success?.data))
            } else {
                setLoading(false)

            }

        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }
}
export const ForgotPassApi = (data, setLoading, navigation, type) => {
    return async (dispatch) => {
        try {
            setLoading(true)
            const baseUrl = `${BASE_URL}forgot-password`
            const myData = new FormData()

            myData.append('email', data.email)

            const response = await fetch(baseUrl, {
                method: 'post',
                body: myData
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                dispatch({ type: OTP, payload: responseData?.success?.token })
                setLoading(false)
                if (!type) {
                    navigation.navigate('otp', {
                        data: responseData?.success?.data
                    })
                } else {
                    console.log('object')
                }
            } else {
                setLoading(false)
                alert('Email not found')
            }

        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }
}

export const ChangePassApi = async (data, userData, setLoading, navigation, ToastAndroid) => {
    try {
        console.log('userData?.id', userData?.id)
        setLoading(true)
        const baseUrl = `${BASE_URL}reset-password/${userData?.id}`
        const myData = new FormData()

        myData.append('password', data.new_pass)
        myData.append('password_confirmation', data.confirm_password)

        const response = await fetch(baseUrl, {
            method: 'post',
            body: myData
        })
        console.log('response', response)

        const responseData = await response.json()
        console.log('responseData', responseData)

        if (responseData?.success?.status == 200) {
            setLoading(false)
            ToastAndroid.show(`Password has been changed!`, ToastAndroid.LONG);
            navigation.navigate('signin')
            console.log('responseData', responseData)
        } else {
            setLoading(false)

        }
    } catch (error) {
        console.log('error', error)
    }
}