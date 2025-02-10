import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);
  return { user, token, isAuthenticated };
};

export default useAuth;