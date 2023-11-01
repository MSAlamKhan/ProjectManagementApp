import { BASE_URL } from "../../utils/Base_urls"
import { OTP, USER_DETAILS } from "../reducer"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const LoginApi = (data, setLoading, setCheck) => {
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
                setCheck(true)
            }

        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }
}
export const ForgotPassApi = (data, setLoading, navigation, type, setCheck) => {
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
                // alert('Email not found')
                setCheck(true)
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
export const EditProfileApi = (data, image, setLoading, setSuccessModal, setIsEditing, setMsg, navigation) => {
    return async (dispatch) => {
        try {
            setLoading(true)
            const userDetail = await AsyncStorage.getItem('user_details')
            const parseData = JSON.parse(userDetail)
            const baseUrl = `${BASE_URL}edit-profile/${parseData?.id}`
            const myData = new FormData()

            myData.append('firstname', data.fname)
            myData.append('lastname', data.lname)
            myData.append('phone_number', data.phone)
            myData.append('address', data.address)
            myData.append('city', data.city)
            myData.append('sin_number', data.sin_no)
            myData.append('primary_trade', data.primary)
            myData.append('secondary_trade', data.secondary)
            {
                image?.uri &&

                    myData.append('profile_image', image)
            }



            const response = await fetch(baseUrl, {
                method: 'post',
                body: myData
            })

            const responseData = await response.json()

            if (responseData?.success?.status == 200) {
                setMsg("Your profile has been successfully updated!")
                dispatch({ type: USER_DETAILS, payload: responseData?.success?.data })
                setLoading(false)
                setIsEditing(false)
                setSuccessModal(true)

                setTimeout(() => {
                    setSuccessModal(false)
                    navigation.goBack()
                }, 5000);
                await AsyncStorage.setItem('user_details', JSON.stringify(responseData?.success?.data))
            } else {
                setMsg("Something went wrong!")
                setLoading(false)
                setSuccessModal(true)
            }

        } catch (error) {
            setMsg("Something went wrong!")
            setLoading(false)
            setSuccessModal(true)
            console.log('error', error)
        }
    }
}