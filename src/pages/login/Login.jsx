import React, {useEffect} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import awsExports from '../../aws-exports.js'
import Amplify from "aws-amplify";
Amplify.configure(awsExports)

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator hideSignUp={true}></Authenticator>
    </View>
  );  
}
