import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

//добавляем для useSelector тип нашего rootreducera
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
