import React, { createContext, useContext, useEffect, useState } from 'react';

interface IEscolaEscolhida{
  escolaSelecionado: string,
  setEscola: (token: string) => void
  escolaLocalizacao: any[],
  setEscolaLocalizacao: (localizacao : number[]) => void
  objetoEscola: Object,
  setObjetoEscola: (objeto: Object) => void
}

const EscolaEscolhidaContext = createContext<IEscolaEscolhida | null>(null);

export default function EscolaEscolhidaProvider({children}:any) : JSX.Element{

  const [escolaSelecionado, setEscola] = useState<number>(0);
  const [escolaLocalizacao, setEscolaLocalizacao] = useState<number[]>([]);
  const [objetoEscola, setObjetoEscola] = useState<Object>({});

  useEffect(()=>{
    console.log('>>> AuthProvider.effect >>>',escolaSelecionado);
    console.log('>>> AuthProvider.effect >>>',escolaLocalizacao);
  },[escolaSelecionado, escolaLocalizacao]);

  return (
    <EscolaEscolhidaContext.Provider value={{escolaSelecionado, 
                                             setEscola,
                                             escolaLocalizacao,
                                             setEscolaLocalizacao,
                                             objetoEscola,
                                             setObjetoEscola
                                             }}>
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