import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllBrandsActions from '../store/actions/brands';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllBrandsActions, dispatch);
};
