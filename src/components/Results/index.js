import React, {useContext} from 'react'
import ResultContext from '../../context/resultContext'

const Results = () => {
  const result = useContext(ResultContext);
  return (
      <pre>
        {
          result.result && JSON.stringify(result.result, null, 4)
        }
      </pre>
  )
};

export default Results
