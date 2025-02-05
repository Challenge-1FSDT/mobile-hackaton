import React, { createContext, useContext, useState } from 'react';

interface IEscolaEscolhida{
  escolaSelecionado: string,
  setEscola: (token: string) => void
}

const EscolaEscolhidaContext = createContext<IEscolaEscolhida | null>(null);

export default function EscolaEscolhidaProvider({children}:any) : JSX.Element{

  const [escolaSelecionado, setEscola] = useState<string>("");

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