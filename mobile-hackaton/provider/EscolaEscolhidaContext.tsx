import React, { createContext, useContext, useEffect, useState } from 'react';

interface IEscolaEscolhida{
  escolaSelecionado: string,
  setEscola: (token: string) => void
}

const EscolaEscolhidaContext = createContext<IEscolaEscolhida | null>(null);

export default function EscolaEscolhidaProvider({children}:any) : JSX.Element{

  const [escolaSelecionado, setEscola] = useState<string>("");

  useEffect(()=>{
    console.log('>>> AuthProvider.effect >>>',escolaSelecionado)
  },[escolaSelecionado]);

  return (
    <EscolaEscolhidaContext.Provider value={{escolaSelecionado, setEscola}}>
        {children}
    </EscolaEscolhidaContext.Provider>
  );
}

export function useEscolaEscolhida(){
  const contexto = useContext(EscolaEscolhidaContext);

  if(!contexto){
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return contexto;

}