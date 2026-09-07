export const useApi = async () => {

  const { data, error } = await useFetch(
    "https://dummyjson.com/products"
  );

  return {
    data,
    error
  };

};