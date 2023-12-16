import { useCallback } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line no-undef
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useRequest = () => {
  const state = useSelector((state) => state.auth.token);
  const request = useCallback(
    async ({
      baseurl = BASE_URL,
      url = "",
      method = "GET",
      body = null,
      headers = {},
      includeToken = true,
    }) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        if (includeToken) {
          headers["auth-token"] = state;
        }
        const response = await fetch(`${baseurl}api/${url}`, {
          method: method,
          headers,
          body,
        });
        const data = await response.json();

        return { data, status: response.ok };
      } catch (error) {
        console.log(error);
      }
    },
    [state]
  );
  return { request };
};

export default useRequest;
