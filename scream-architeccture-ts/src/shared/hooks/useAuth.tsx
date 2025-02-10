import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const useAuth = () => {
  const { user, token, isAuthenticated } = useSelector((state: RootState) => state.auth);
  return { user, token, isAuthenticated };
};

export default useAuth;