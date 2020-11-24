import api from './apiConfig';

export const getAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

export const addFlavor = async (flavorId, foodId) => {
  const resp = await api.put(`/flavors/${flavorId}/foods/${foodId}`);
  return resp.data;
}