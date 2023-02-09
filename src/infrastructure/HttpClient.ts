import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import { User } from "@firebase/auth-types";
import { strict } from "assert";
import firebase from "firebase";

const initFirebaseAuth: () => Promise<User | undefined> = () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(undefined);
      }
    });
  });
};

class HttpClient {
  private axios: AxiosInstance;

  constructor({ baseURL }: { baseURL: string | undefined }) {
    // const user = initFirebaseAuth();
    // if (user !== undefined) {
    //   const idToken = user.getIdToken();
    // }

    this.axios = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.axios.interceptors.request.use(
      async (config) => {
        const user = await initFirebaseAuth();
        if (user !== undefined) {
          await user
            .getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
              Cookies.set("authorization_token", idToken, {
                expires: 90,
                domain: process.env.NEXT_PUBLIC_APP_DOMAIN,
                secure: true,
                sameSite: "strict",
              });
            })
            .catch(function (error) {
              console.error(error);
              // ignore
            });
        } else {
          // NOTE: 認証切れのtokenが残っている場合があるので取り除いてあげる
          Cookies.remove("authorization_token");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public request<T = any>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axios.request<T>(config);
  }
}

export default HttpClient;
