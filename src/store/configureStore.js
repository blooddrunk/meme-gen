import RootModel from './models';

export default initialState => {
  const store = RootModel.create(initialState);

  return store;
};
