
import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/css/login.module.css';
import { UserContext } from '../context/userContext';
import { setCookie } from '../utils/cookies';
import { IoArrowBackCircleOutline } from "react-icons/io5";
const Login = () => {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);


    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const loginUser = async (event) => {
        //console.log("button clicked")
        event.preventDefault();

        //destructuring data 
        const { email, password } = data
        try {
            const response = await axios.post('/login', {
                email,
                password,
            })
            console.log(response.data);

            //setting up the validation and error message
            if (!response.data.token) {
                toast.error(response.data.error);
            }

            //if everything works fine
            else {
                setData({});
                setCookie('token', response.data.token)
                //   console.log(response.data.token);
                setUser(response.data.user);
                navigate('/viewJobs')
                toast.success("Login Successful!")
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles.container}>

            <h1 style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '20px' }}>
                Assalamu Alaikum <span style={{ color: '#C12048' }}>*,*</span>
            </h1>

            <h1 className='text-secondary text-center'> Please, Sign In to Acess Our Features</h1>
            <form action="" className={`${styles.form} !bg-primary`} onSubmit={loginUser}>
                <label>Email:</label>
                <input type="email" name="email" value={data.email} id="email"
                    placeholder="Your E-mail Here..."
                    onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password:</label>
                <input type="password" id="password" value={data.password}
                    placeholder="Password here..."
                    onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Login</button>
                <div className='flex items-end flex-col w-full text-white'>
                    <p>Don&apos;t have an account?</p>
                    <Link to={'/register'}>Please <span className='text-secondary font-bold'>Sign up</span> First </Link>
                </div>
            </form>
            
                <Link className=' py-1 flex mx-auto my-4 items-center justify-center w-[15%] gap-1 border-secondary' to={'/home'}> <IoArrowBackCircleOutline className='text-secondary text-2xl hover:-translate-x-1 transition-all animate-pulse' /> Go Back </Link>
           
        </div>
    );

};

export default Login;