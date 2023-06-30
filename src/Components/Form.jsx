import { useState } from "react";
import TextField from '@mui/material/TextField';
import {Grid } from "@mui/material";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [mensaje2, setMensaje2] = useState(false)

  let initialValues = {
    name:'',
    email:'',
    coment:''
  }
  
  const sendForm = (data)=>{
    console.log(data);
    setMensaje2(true)
    localStorage.setItem('userName', data.name)
    localStorage.setItem('email', data.email)

  }
  
  const {handleChange, handleSubmit, values, errors, handleBlur} = useFormik({
    
    initialValues: initialValues,
    onSubmit: sendForm,

    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      email: Yup.string().email().required()
    }),

  })

  return (
    <>
      <form className='class-container' id='form' onSubmit={handleSubmit}>
        <Grid container alignItems={'center'} justifyContent={'space-evenly'} spacing={2} sx={{with: '100%'}}>
          <Grid item xs={20} md={10}>
            <TextField fullWidth type="text" id="outlined-basic" name= 'name' label="Nombre" variant="outlined" onBlur={handleChange} value={values.nombre} error={errors.name}  helperText={errors.name}/>
          </Grid>
          <Grid item xs={20} md={10}>
            <TextField fullWidth type="email" id="outlined-basic" name='email' label="Email" variant="outlined" onChange={handleChange} value={values.email} error={errors.email} helperText={errors.email} />
          </Grid>
      </Grid>
 <br />
        <button className="button-form "type='submit'>Enviar</button>
      </form>

<br />
<br />
<br />
      {mensaje2 && <p className="container-p" >Muchas Gracias {localStorage.getItem('userName')}, nos comunicaremos atraves de: {localStorage.getItem('email')} </p>}

    </>
  );
};


export default Form;
