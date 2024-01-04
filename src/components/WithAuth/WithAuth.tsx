import React, { useEffect, useCallback } from 'react';
import axios from 'axios';

const WithAuth = (WrappedComponent: React.FC) => {
  const ComposedComponent = (props: any) => {
    const requestInterceptor = useCallback((req: any) => {

      const authToken = process.env.EXPO_PUBLIC_AUTH_TOKEN;
      if (authToken) {
        req.headers.Authorization = `Bearer ${authToken}`;
      }

      return req;
    }, []);

    const responseInterceptor = useCallback(async (response: any) => {
      return response;
    }, []);

    const responseErrorInterceptor = useCallback(async (err: any) => {
      const { status, data } = err.response;
      if (status === 401 || status === 403 ) {
        // get refresh token and others
      }
      if (status === 500) {
        return Promise.reject(err);
      }
      return Promise.reject(err);
    }, []);

    useEffect(() => {
      const requestInterceptorId = axios.interceptors.request.use(requestInterceptor);
      const responseInterceptorId = axios.interceptors.response.use(
        responseInterceptor, responseErrorInterceptor);

      return () => {
        axios.interceptors.request.eject(requestInterceptorId);
        axios.interceptors.response.eject(responseInterceptorId);
      };
    }, [requestInterceptor, responseInterceptor, responseErrorInterceptor]);

    return <WrappedComponent {...props} />;
  };

  return ComposedComponent;
};

export default WithAuth;