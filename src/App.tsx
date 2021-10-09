import React, { useEffect } from 'react';
import './App.css';
import EmptyResultSearch from './components/EmptyResultSearch';
import ErrorAlert from './components/ErrorAlert';
import ListCardBrands from './components/ListCardBrands';
import Search from './components/Search';
import { useAction } from './hooks/useAction';
import { useTypeSelector } from './hooks/useTypeSelector';
import { IBrandReducer } from './types/brand';

function App() {
  const { fetchBrandsAction } = useAction();
  const { error, loadingRootTree, isFoundSomething }: IBrandReducer =
    useTypeSelector(state => state.brands);
  const { haveValidError, errorList } = useTypeSelector(
    state => state.errorValidate
  );
  const isFoundFalse = isFoundSomething === false;
  useEffect(() => {
    fetchBrandsAction();
    // eslint-disable-next-line
  }, []);

  if (loadingRootTree) {
    //TODO: сделай прелоад
    return <h1>Пока идёт загрузка</h1>;
  }
  if (error) {
    //TODO: сделай компонент с выводом ошибки
    return <h1>{error}</h1>;
  }
  return (
    <div className="app flex flex-column items-center">
      <header className="app-header flex justify-center">
        <Search />
      </header>
      <div className="container flex flex-column items-center">
        <ListCardBrands />
        {haveValidError && <ErrorAlert errorList={errorList} />}
        {isFoundFalse && <EmptyResultSearch />}
      </div>
    </div>
  );
}

export default App;
