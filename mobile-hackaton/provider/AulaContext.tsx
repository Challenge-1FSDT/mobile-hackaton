import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface IAula{
    aulaSelecionada: Object,
    setAulaSelecionada: (objeto: Object) => void
}

const AulaContext = createContext<IAula | null>(null);

export default function AulaProvider({children}:any) : JSX.Element{

  const [aulaSelecionada, setAulaSelecionada] = useState<Object>({});

  useEffect(()=>{
    console.log('>>> AulaProvider.effect >>>',aulaSelecionada);
  },[aulaSelecionada])

  return (
    <AulaContext.Provider value={{aulaSelecionada, 
                                  setAulaSelecionada}}>
        {children}
    </AulaContext.Provider>
  );
}

export function useAula(){

  const contexto = useContext(AulaContext);

  if(!contexto){
    throw new Error("useAuth deve ser usado dentro de um AulaProvider");
  }

  return contexto;

}