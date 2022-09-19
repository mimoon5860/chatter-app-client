import { RootState } from "../../../app/store";
import { IUserState } from "../../../utils/types/userType";

const userState: IUserState = {
    user: null,
    status: 'idle',
    error: null
}

export const selectUserState = (state: RootState) => state.user;

export default userState;