import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface IToken{
    token: string,
    refreshToken: string,
    setToken: (token: string) => void
    setRefreshToken: (token: string) => void
}

const AuthContext = createContext<IToken | null>(null);

export default function AuthProvider({children}:any) : JSX.Element{

  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");

  useEffect(()=>{
    console.log('>>> AuthProvider.effect >>>',token)
  },[token])

  return (
    <AuthContext.Provider value={{token, 
                                  setToken, 
                                  refreshToken, 
                                  setRefreshToken}}>
        {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){

  const contexto = useContext(AuthContext);

  if(!contexto){
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return contexto;

}