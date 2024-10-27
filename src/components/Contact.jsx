import React from 'react'
import { useState, useRef } from 'react'
import emailJS from '@emailjs/browser'
import {styles} from "../styles"
import {motion} from "framer-motion"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_0kfhzs8
//service_80794br
//wlEAzqMyFezjeLovH

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailJS.send('service_80794br','template_0kfhzs8',
    {from_name: form.name, 
     to_name:'Linus',
     from_email: form.email,
     to_email:"carl.mjornstedt@gmail.com",
     message: form.message,
    }, "wlEAzqMyFezjeLovH") 
    
    .then(() => {
      setLoading(false);
      alert ("Thank you, I'll get back to you as soon as possible.");
      
      setForm({
            name:'',
            email:'',
            message:''
          })
    }, (error) =>{
      setLoading(false)
      console.log(error);
      alert("Whoops, something went wrong")

    })
  }

  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween", 0.2, 1)} className="flex-[0.75] bg-secondary p-8 rounded-2xl">
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact:</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
              </span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Enter Name' 
                    className='bg-primary py-4 px-6 placeholder:text-secondary text-secondary 
                               rounded-xl outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your email
              </span>
              <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Enter email' 
                    className='bg-primary py-4 px-6 placeholder:text-secondary text-secondary 
                               rounded-xl outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your message
              </span>
              <textarea name='message' value={form.message} onChange={handleChange} placeholder='Enter message' 
                    className='bg-primary py-4 px-6 placeholder:text-secondary text-secondary 
                               rounded-xl outline-none border-none font-medium'/>
          </label>
          <button type="submit" className='bg-primary py-3 px-8 outline-none w-fit text-wite font-sans shadow-md shadow-primary rounded-xl'>
            {loading ? 'sending...': "Send"}
          </button>

        </form>
      </motion.div>

    </div>
    
  )
}

export default SectionWrapper(Contact,"contact")