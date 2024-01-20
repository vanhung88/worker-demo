import { useEffect } from 'react';

const withAuth = (Component: any) =>
  function ({ ...props }) {
    const token = null;
    useEffect(() => {
      if (!token) {
        console.log('PUSH to login');
      }
    }, []);
    return <Component {...props} />;
  };

export default withAuth;
