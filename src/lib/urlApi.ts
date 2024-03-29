export const BASE_URL_API = "https://nineint-api.herokuapp.com/";

// Authentication
export const POST_AUTH_LOGIN = BASE_URL_API + "users/login";
export const POST_AUTH_REGISTER = BASE_URL_API + "users/register";

// Profile
export const GET_PROFILE = BASE_URL_API + "users/profile";
export const GET_HISTORY = BASE_URL_API + "users/history";
export const PUT_PROFILE = BASE_URL_API + "users/profile/edit";

// Tryout
export const GET_TRYOUTS = BASE_URL_API + "tryouts/";
export const GET_TAKEN_TRYOUTS = BASE_URL_API + "tryouts/taken";
export const POST_TAKE_TRYOUT = BASE_URL_API + "tryouts/take";
export const GET_IS_SUBMITED_TRYOUT = BASE_URL_API + "tryouts/check/";

// Bank Soal
export const GET_BANKSOAL = BASE_URL_API + "banksoal/";
export const GET_TAKEN_BANKSOAL = BASE_URL_API + "banksoal/taken";
export const POST_TAKE_BANKSOAL = BASE_URL_API + "banksoal/take";
export const GET_IS_SUBMITED_BANKSOAL = BASE_URL_API + "banksoal/check/";

// Payment
export const POST_PAYMENT = BASE_URL_API + "payment/";
