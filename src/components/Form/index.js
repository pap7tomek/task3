import React, {useContext, useState} from 'react'
import useFormSchema from './useFormSchema'
import ResultContext from '../../context/resultContext'
const Form = () => {
  const { execute, pending, value, error, setValue }  = useFormSchema()
  const result = useContext(ResultContext);
  const [tab, setTab] = useState(0)
  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();   
    result.setResult(value)
    console.log(result.result);
  }
  const inputOnChange = (e, index, fieldIndex) => {
    let newValue = {
      ...value
    }
    newValue.sections[index].fields[fieldIndex].default = e.target.value;
    setValue(newValue);
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {value && <div>{
          <fieldset key={tab} name={value.sections[tab].label}>
            {value.sections[tab].fields.map((field, fieldIndex)=>
              <span key={fieldIndex}>
                <label htmlFor={field.name}>{field.label}</label>
                <input name={field.name} onChange={(e) => inputOnChange(e, tab, fieldIndex)} value={field.default}></input>
              </span>
              )
            }
          </fieldset>
      }</div>}
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={pending}>
        {!pending ? 'Submit' : 'Loading...'}
      </button>
      <div>
        {value && value.sections.map((section, index) =>
          <button type="button" onClick={() => {
            console.log(index);
            
            setTab(index)
          }}>{section.name}</button>
        )}
      </div>
    </form>
  )
};

export default Form
