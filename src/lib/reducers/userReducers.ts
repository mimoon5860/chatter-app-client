import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { IUserState } from "../../utils/types/userType";
import { userLogin, userSignUp } from "../asyncTasks/userAsyncTasks";

type userBuilder = ActionReducerMapBuilder<IUserState>;
export const userReducer = {

}

export const userExtraReducers = (builder: userBuilder) => {
    builder.addCase(userLogin.pending, (state) => {
        state.status = 'loading';
    }).addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
    }).addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
    })

    builder.addCase(userSignUp.pending, (state) => {
        state.status = 'loading';
    }).addCase(userSignUp.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
    }).addCase(userSignUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
    })
}