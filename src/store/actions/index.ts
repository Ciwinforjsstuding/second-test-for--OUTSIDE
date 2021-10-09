import * as AllBrandsActions from './brands';
import * as AllErrorValidateActions from './errorValidate';

const AllAction = {
  ...AllBrandsActions,
  ...AllErrorValidateActions,
};

export default AllAction;
