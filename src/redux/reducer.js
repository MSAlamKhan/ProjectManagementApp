export const IS_SIGN_IN = 'IS_SIGN_IN';
export const USER_DETAILS = 'USER_DETAILS';
export const OTP = 'OTP';
export const ROLE_ID = 'ROLE_ID';
export const JOB_DATA = 'JOB_DATA';
export const GET_SALESLEAD_DATA = 'GET_SALESLEAD_DATA';
export const GET_DASHBOARD_DATA = 'GET_DASHBOARD_DATA';
export const GET_TRADE_DASHBOARD_DATA = 'GET_TRADE_DASHBOARD_DATA';
export const SELECTEDDATE = 'SELECTEDDATE';
export const TASK_DETAILS = 'TASK_DETAILS';
export const GETTING_LATE = 'GETTING_LATE';
export const GET_LEAD_TASK = 'GET_LEAD_TASK';
export const GET_ID_TASK = 'GET_ID_TASK';
export const NOTIFICATION_DATA = 'NOTIFICATION_DATA';
export const NOTIFICATION_LENGTH = 'NOTIFICATION_LENGTH';
export const SELECT_IMAGE = 'SELECT_IMAGE';
export const SELECT_VIDEO = 'SELECT_VIDEO';


const initial_state = {
    userDetails: null,
    isSignin: null,
    otp: null,
    role_id: '',
    jobData: [],
    get_saleslead_data: [],
    get_dashboard_data: {},
    get_trade_dashboard_data: {},
    selecteddate: '',
    task_details: [],
    getting_late: [],
    get_lead_task: [],
    get_id_task: [],
    get_id_task: [],
    notification_data: [],
    notification_length: 0,
    select_image: [],
    select_video: [],
};

const holderReducer = (state = initial_state, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            };
        case GET_DASHBOARD_DATA:
            return {
                ...state,
                get_dashboard_data: action.payload,
            };
        case GET_TRADE_DASHBOARD_DATA:
            return {
                ...state,
                get_trade_dashboard_data: action.payload,
            };
        case GET_SALESLEAD_DATA:
            return {
                ...state,
                get_saleslead_data: action.payload,
            };
        case IS_SIGN_IN:
            return {
                ...state,
                isSignin: action.payload,
            };
        case OTP:
            return {
                ...state,
                otp: action.payload,
            };
        case ROLE_ID:
            return {
                ...state,
                role_id: action.payload,
            };

        case JOB_DATA:
            return {
                ...state,
                jobData: action.payload,
            };
        case SELECTEDDATE:
            return {
                ...state,
                selecteddate: action.payload,
            };
        case TASK_DETAILS:
            return {
                ...state,
                task_details: action.payload,
            };
        case GETTING_LATE:
            return {
                ...state,
                getting_late: action.payload,
            };
        case GET_LEAD_TASK:
            return {
                ...state,
                get_lead_task: action.payload,
            };
        case GET_ID_TASK:
            return {
                ...state,
                get_id_task: action.payload,
            };
        case GET_ID_TASK:
            return {
                ...state,
                notification_data: action.payload,
            };
        case NOTIFICATION_LENGTH:
            return {
                ...state,
                notification_length: action.payload,
            };
        case SELECT_IMAGE:
            return {
                ...state,
                select_image: action.payload,
            };
        case SELECT_VIDEO:
            return {
                ...state,
                select_video: action.payload,
            };
        default: {
            return state;
        }
    }
};

export default holderReducer;