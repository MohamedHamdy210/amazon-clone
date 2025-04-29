import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface UserState {
    email: string;
}
const initialState: UserState = {
    email: "",
};
export const userSlice = createSlice({
    name: "user",
    initialState
    ,
    reducers: { 
        LOGIN: (state, action:PayloadAction<string>) => {
            console.log(` dis ${action.payload}`);
            state.email = action.payload;
        },
        LOGOUT: (state) => {
            state.email = "";
        },
    },
});
export const { LOGIN, LOGOUT } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.email;
export default userSlice.reducer;