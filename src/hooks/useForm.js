import {useState} from 'react'

export const useForm = (initialForm) => {
    
    const [form,setForm]= useState(initialForm);

    const onChange =({target})=>{
        const {name,value}=target;
        setForm({
            ...form,
            [name]:value
        })
    }



  return {
    onChange,
    form
  }
}
