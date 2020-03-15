import React, {useContext} from 'react'
import ResultContext from '../../context/resultContext'

const Results = () => {
  const result = useContext(ResultContext);
  const changeResultDisplay = (item) => {
    return {
      sections: item.sections.map((section) => {
        return {
          name: section.name,
          fields: section.fields.map((field) => {
            return {
              name: field.name,
              value: field.default
            }
          })
        }
      })
    }
  }
  return (
      <pre>
        {
          result.result && JSON.stringify(changeResultDisplay(result.result), null, 4)
        }
      </pre>
  )
};

export default Results
