import apiForm from 'api/form'
import { useState, useEffect, useCallback } from 'react';
const useFormSchema = () => {  
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const execute = useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);
    return apiForm.getSchema()
      .then(response => setValue(response))
      .catch(error => {console.log(error);
       setError(error)})
      .finally(() => setPending(false));
  }, []);
  useEffect(() => {
    execute();
  }, [execute]);
  return { execute, pending, value, error, setValue};
}


export default useFormSchema
