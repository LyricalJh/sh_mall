import axiosSpring from "../../../config/axiosSpring";
import useSWRMutation from "swr/mutation";

export const useLogin = (arg) => {
  const fetcher = (url, { arg }) =>
    axiosSpring.post(url, arg).then((data) => data);

  const { trigger, isMutating, data, error, reset, onError } = useSWRMutation(
    "/login",
    fetcher
  );
  return { trigger, isMutating, data, error, reset, onError };
};

export const useSocailLogin = (arg) => {
  const fetcher = (url, { arg }) =>
    axiosSpring.post(url, arg).then((data) => data);

  const { trigger, isMutating, data, error, reset, onError } = useSWRMutation(
    "/oauth/kakao",
    fetcher
  );
  return { trigger, isMutating, data, error, reset, onError };
};
