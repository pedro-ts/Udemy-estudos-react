// hooks/useFetch.js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  // monta opções para POST/DELETE
  const httpConfig = (payload, methodArg) => {
    if (methodArg === "POST") {
      setConfig({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setMethod("POST");
    }
    if (methodArg === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setMethod("DELETE");
      setItemId(payload); // aqui payload é o id
    }
  };

  // GET inicial e quando callFetch alterna
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError("Houve algum erro para carregar os dados");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, callFetch]);

  // POST/DELETE
  useEffect(() => {
    const httpRequest = async () => {
      setLoading(true);
      try {
        if (method === "POST") {
          const res = await fetch(url, config);
          await res.json(); // opcional usar retorno
        }
        if (method === "DELETE") {
          const deleteUrl = `${url}/${itemId}`;
          const res = await fetch(deleteUrl, config);
          await res.json();
        }
        setError(null);
        setCallFetch((prev) => !prev); // força novo GET
      } catch {
        setError("Houve algum erro ao enviar os dados");
      } finally {
        setLoading(false);
      }
    };

    if (method) httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
