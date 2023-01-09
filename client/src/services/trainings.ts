import { ApiConfig, createAxiosInstance } from "./common";

const succeededResponse = { isSucceeded: true };
const failedResponse = { isSucceeded: false };

export const getTrainigMenus = async () => {
  const instance = createAxiosInstance();
  try {
    const res = await instance.get('/menus');
    console.log(res);
    return res.data;

  } catch (e) {
    return {
      isSucceed: false,
      error: e
    };
  }
};
