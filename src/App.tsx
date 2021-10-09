import React, { useEffect } from 'react';
import './App.css';
import ErrorAlert from './components/ErrorAlert';
import ListCardBrands from './components/ListCardBrands';
import { useAction } from './hooks/useAction';
import { useTypeSelector } from './hooks/useTypeSelector';
import { IBrandReducer } from './types/brand';

function App() {
  const { fetchBrandsAction } = useAction();
  const { error, loading }: IBrandReducer = useTypeSelector(
    state => state.brands
  );
  const { haveValidError, errorList } = useTypeSelector(
    state => state.errorValidate
  );
  useEffect(() => {
    fetchBrandsAction();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    //TODO: сделай прелоад
    return <h1>Пока идёт загрузка</h1>;
  }
  if (error) {
    //TODO: сделай компонент с выводом ошибки
    return <h1>{error}</h1>;
  }
  return (
    <div className="app">
      <div className="container flex flex-column items-center">
        <ListCardBrands />
        {haveValidError && <ErrorAlert errorList={errorList} />}
      </div>
    </div>
  );
}

export default App;
