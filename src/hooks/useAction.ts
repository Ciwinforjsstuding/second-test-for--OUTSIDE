import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllAction from '../store/actions';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllAction, dispatch);
};
