import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../config/auth';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useAuth();
  console.log(currentUser);
  const router = useRouter();

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser) {
      router.push('/signIn');
    }
  }, [router, currentUser]);

  return (
    <>
      {currentUser ? children : null}
    </>
  );
};

export default ProtectedRoute;