import {useState, useEffect} from "react";
//4 custom hook

export const useFetch = (url) =>{
    // Dados e variaveis
  const [data, setData] = useState([]); // criamos a varivel que será preenchida com o que queremos
    //5 refatorando o post
    const [config,setConfig] = useState();
    const [method, setMethod] = useState();
    const [callFetch, setCallFetch] = useState(false);


// Cria o texto da configuração padrão usada nas requisições
    const httpConfig = (data, method) => { //a variavel config é preenchida se o metodo for post
        if(method === "POST"){
            setConfig({
                method: "post",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method)
        }
    }

  useEffect(() => {
    const fetchData = async () => {
      //fazemos uma função assincrona
      const res = await fetch(url); //fazemos a requisição
      const json = await res.json(); // transformamos a resposta em json

      setData(json); //passamos a resposta para a variavel criada anteriormente
    };

    fetchData(); //executamos a função assincrona
  }, [url, callFetch]);

//5 refatorando post
useEffect(()=>{

    if(method === "POST"){
        const httpRequest = async()=>{
            let fetchOptions = [url, config];
            const res = await fetch(...fetchOptions)

            const json = await res.json();

            setCallFetch(json)
        }
        httpRequest();
    }


}, [config, method, url])

  return { data, httpConfig }; //retornaremos o que foi salvo na variavel "data"
}