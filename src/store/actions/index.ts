import * as AllBrandsActions from './brands';
import * as AllErrorValidateActions from './errorValidate';
//собираем все actions
const AllAction = {
  ...AllBrandsActions,
  ...AllErrorValidateActions,
};

export default AllAction;
