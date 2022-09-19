import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUserState } from '../../lib/states/userState/userState';

const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
    const { user } = useAppSelector(selectUserState);

    return user?._id ? element : <Navigate to='/login' />;
};
export default PrivateRoute;