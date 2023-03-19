import useAuth from '../custom-hooks/useAuth';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({children}) {
    const {currentUser} = useAuth();
    // const navigate = useNavigate();
  return  currentUser ? children : <Navigate to='/login' /> 
}

export default ProtectedRoute;