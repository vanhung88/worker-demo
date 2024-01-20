import { useCallback, useEffect } from 'react';

const withAuth = (a) => {
  return ({ ...props }) => {
    console.log('props', props);
    const token = null;
    useEffect(() => {
      if (!token) {
        console.log('PUSH to login');
      }
    }, []);
    return <div />;
  };
};

export default withAuth;
