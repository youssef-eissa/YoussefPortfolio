import React, { useReducer, useRef,  } from 'react'
import './contact.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import emailJs from '@emailjs/browser'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message:yup.string().min(10).required()
})
function Contact() {

    const form=useRef()
    const { register, handleSubmit, formState: { errors } ,resetField} = useForm({
    resolver:yupResolver(schema)
})
    function reducer(state, action) {
        switch (action.type) {
            case 'spinnerOn': return{...state,spinner:state.spinner='on'}
            case 'spinnerOff': return { ...state, spinner: state.spinner = 'off' }
            case 'fullName': return { ...state, FullName: action.payload }
            case 'alert': return { ...state, alert:state.alert='d-flex' }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        spinner: "off",
        FullName: "",
        alert:'d-none'
    })
    async function submitForm(data) {
        await emailJs.sendForm("service_i1oba7q", "template_stwx1cs", form.current, "luB66O0OTEl_d-eHN")
            .then(() => {
                dispatch({ type: 'fullName', payload: data.fullname })
                dispatch({type:"alert"})
                resetField('fullname')
                resetField('email')
                resetField('subject')
                resetField('message')
                dispatch({type :"spinnerOff"})
                }).catch(
                dispatch({ type: "spinnerOn" })
                    )

                }
return (
    <div className='container mb-4'>
        <div id='contact' className='row d-flex flex-wrap  '>
        <div className='left col-md-6 col-12 p-0 d-flex flex-column mb-5 mb-md-0 justify-content-center'>
            <div className='up mb-5 d-flex flex-column  col-12'>
                <h1 className='col-12 text-center text-md-start'>Have An Idea?</h1>
                <span className='col-12 text-center text-md-start'>Let's <span style={{color:"coral"}}>Make</span> It Real!</span>
            </div>
            <div className='down col-12'>
                <div className='col-12 upp d-flex'>
                    <div className='col-2 d-flex justify-content-center align-items-center'>
                        <LocationOnOutlinedIcon fontSize='large'/>
                    </div>
                    <span className='col-10'>Egypt</span>
                </div>
                <div className='downn mt-3 col-12 d-flex'>
                    <div className='col-2 d-flex justify-content-center align-items-center'>
                        <AlternateEmailOutlinedIcon fontSize='large'/>
                    </div>
                    <span className='col-10'>Youssefeissa1812@gmail.com</span>

                </div>
            </div>
        </div>
        <div className='right text-center text-md-start col-md-6 col-12 p-0'>
            <h1  className='col-12 get'>get in <span style={{ color: "coral" }}>touch</span></h1>
        <Alert className={`col-12 ${state.alert}`}  severity="success">
        <AlertTitle>Thanks <span style={{color:"coral"}}>{state.FullName.toUpperCase() }</span> for reaching out ,I'll get back to you soon.</AlertTitle>

    </Alert>
            <form ref={form} onSubmit={handleSubmit(submitForm)} className='d-flex col-12 align-items-center flex-column'>
                <div className='col-md-12 col-11 mb-4 d-flex  flex-column '>
                <label>Name</label>
                    <input
                        className='rounded col-12 py-3 px-2'
                        placeholder='Please enter your name'
                        name='fullname'
                        {...register('fullname',{required:"Required"})}
                    />
                    <p className='m-0' style={{ color: "red" }}>{errors.fullname && errors.fullname.message}</p>
                </div>
                <div className='col-md-12 col-11 mb-4 d-flex flex-column'>
                <label>Email</label>
                    <input
                        className='rounded col-12 py-3 px-2'
                        placeholder='Please enter your email'
                        name='email'
                        {...register('email',{required:"Required"})}
                    />
                    <p className='m-0' style={{color:"red"}}>{errors.email&&errors.email.message }</p>
                </div>
                <div className='col-md-12 col-11 mb-4 d-flex flex-column'>
                <label>subject</label>
                    <input
                        className='rounded col-12 py-3 px-2'
                        placeholder='Please enter the subject'
                        name='subject'
                        {...register("subject",{required:"Required"})}
                    />
                    <p className='m-0' style={{color:"red"}}>{errors.subject&&errors.subject.message }</p>
                </div>
                <div className='col-md-12 col-11 mb-4 d-flex flex-column'>
                <label>message</label>
                    <textarea
                        className='rounded col-12 py-3 px-2'
                        placeholder="Let's Discuss..!"
                        name='message'
                        {...register('message',{required:'Required'})}
                    />
                    <p className='m-0' style={{color:"red"}}>{errors.message&&errors.message.message }</p>

                </div>
                <div className='col-12 mt-3 justify-content-md-end justify-content-center d-flex'>
                    <button className='col-md-5 col-11 d-flex py-3 rounded'>
                        <span className={`${state.spinner==='off'?'col-12':'col-8'}`}>send message</span>
                        <span className={`${state.spinner==='off'?'d-none':'col-4 d-flex'}`}><CircularProgress /></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
)
}

export default Contact