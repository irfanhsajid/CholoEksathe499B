import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/css/register.module.css';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();

        //input value distructuring 
        const { name, email, password } = data;
        try {
            // Send user data to the server
            const { data } = await axios.post('/register', {
                name,
                email,
                password,
            });

            //if there is any error from the server side then it will cover the errrors and else it will set the input field empty and show a success message!
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Registration Succesful, Welcome!')
                navigate('/login')
            }
        } catch (error) {
            // Handle network errors or unexpected issues
            console.log(error);
        }

    };

    return (
        <div data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={`${styles.container} !min-h-screen` }>
            <h1 style={{ textAlign: 'center', fontSize: '1.4rem', marginTop: '20px' }}>Register First To Explore Features</h1>
            <form action="
            " className={`${styles.form} !bg-primary`} onSubmit={registerUser}>
                <label>Name:</label>
                <input className={styles.input} type="text" name="name" value={data.name} id="" placeholder="Insert your name..." onChange={(e) => setData({ ...data, name: e.target.value })} />

                <label>Email:</label>
                <input className={styles.input} type="email" name="email" value={data.email} id="" placeholder="Your E-mail..." onChange={(e) => setData({ ...data, email: e.target.value })} required />

                <label>Password:</label>
                <input className={styles.input} type="password" id="" value={data.password} placeholder="Password..." onChange={(e) => setData({ ...data, password: e.target.value })} required />
                <button type='submit'>Register</button>
                <div className='flex items-end flex-col w-full text-white'>
                    <p>Already registered an account?</p>
                    <Link to={'/login'}>Please, <span className='text-secondary font-bold'>Sign In</span></Link>
                </div>
            </form>
            
            <Link className=' py-1 flex mx-auto my-4 items-center justify-center w-[15%] gap-1 border-secondary' to={'/home'}> <IoArrowBackCircleOutline className='text-secondary text-2xl hover:-translate-x-1 transition-all animate-pulse' /> Go Back </Link>
        </div>
    );
};

export default Register;