import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='h-[70vh] flex justify-center items-center'>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}