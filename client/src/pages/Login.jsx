
import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/css/login.module.css';
import { UserContext } from '../context/userContext';
import { setCookie } from '../utils/cookies';

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
            {/* <h1 style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '20px' }}> Please, Sign In to Acess Our Job Portal</h1> */}
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
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum pariatur officia ex corporis odio maiores quia eaque. Obcaecati harum voluptate expedita voluptatibus numquam! Inventore quis excepturi dolor, sunt repellendus ipsum commodi, veniam nesciunt possimus nam provident suscipit amet praesentium modi voluptatibus. At, error rem inventore culpa accusamus dicta nam beatae vero iste nesciunt officia a enim autem eveniet voluptate recusandae voluptatem provident minima, doloremque deserunt. Aliquid minus cumque libero numquam velit sint unde distinctio nobis. Ut placeat aliquid quam facere laudantium! Vel voluptatibus ipsum assumenda sed dolorem magnam quidem nostrum dolores id, rem, laborum, neque saepe eaque error debitis porro aspernatur laudantium enim eum nihil doloremque hic commodi praesentium ad. At, autem? Quidem, quos tempore possimus, magnam quia beatae aliquid consequuntur amet, reprehenderit corporis quam voluptas sapiente voluptatum quod velit soluta dolores aut vitae harum odio! Tempore quo fugit eum harum sapiente illo pariatur maiores velit, inventore corporis corrupti aliquid ullam deserunt nulla laborum, rerum obcaecati unde asperiores? Fuga pariatur corrupti officia mollitia cumque, fugiat hic vero in nobis vitae, culpa aperiam ab placeat saepe molestiae est atque odio at minus similique perferendis. Saepe inventore ducimus eum delectus ab quaerat, voluptatibus quo rem maiores sed deleniti quam sunt iusto natus recusandae officia ipsa! Quos asperiores laborum modi sapiente dicta deserunt omnis suscipit explicabo, voluptates iste ipsam, dignissimos ullam illo repellendus atque inventore commodi expedita aut tempora necessitatibus. Enim, dignissimos? Eum architecto necessitatibus facere temporibus tempore vero cupiditate corrupti dolore laborum, porro doloremque laudantium facilis quo quam doloribus incidunt reprehenderit impedit dolorum sunt! Obcaecati maxime est veritatis, excepturi, libero consequatur quas eligendi cupiditate labore harum iste sunt impedit quos eaque ipsa incidunt qui odio temporibus nesciunt adipisci magni quasi ducimus quaerat? Dignissimos id voluptate aliquam modi ut fuga cum illo natus et, sequi iusto ex ipsum nam aspernatur iste error. Debitis illum cum omnis repellendus doloremque eligendi labore nihil consectetur sequi non? Commodi, blanditiis ducimus. Delectus nisi aperiam odio ex explicabo laboriosam itaque, quis quasi sint quibusdam voluptatem obcaecati id placeat repudiandae velit quam blanditiis, eos facere? Provident suscipit nostrum repudiandae tempora mollitia, blanditiis neque ex officia quidem dicta libero minus rem non quas aspernatur ipsam sit! Vitae atque amet temporibus quia tenetur repellendus velit fuga totam similique labore consequuntur veritatis nam cupiditate, non nisi distinctio, repellat voluptas ipsum optio quasi sapiente. Animi, minus maiores rerum soluta voluptate eligendi veritatis eius saepe facilis excepturi perspiciatis perferendis quisquam nulla, repudiandae culpa atque nemo voluptatum fugiat! Porro minima expedita ut architecto delectus, neque vero deserunt similique consequuntur tempora nostrum, sapiente, quos veniam quibusdam! Laboriosam libero voluptatem atque, recusandae laudantium cum beatae enim minus quaerat molestiae eius blanditiis distinctio optio officia excepturi doloribus ipsa alias cupiditate perspiciatis rerum aut! Hic vel ipsam consequatur. Illo quibusdam dolorum quae nihil libero harum esse illum, culpa quaerat excepturi quo aperiam saepe enim doloribus impedit molestiae iusto delectus asperiores dignissimos et vitae fugit corrupti fuga. Error consequuntur maxime nam vel commodi, incidunt velit dolorum aliquam laudantium voluptatem adipisci nihil quo! Tenetur iure placeat tempore eveniet. Obcaecati, voluptatum quibusdam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam eveniet excepturi ipsa nobis dolorem vitae nostrum voluptas debitis? Labore tempore facilis temporibus est, molestias recusandae. Fugit neque vel porro modi aut eius culpa asperiores debitis ab quam rem non, dignissimos at ullam obcaecati, commodi quidem nesciunt architecto magni dolor nam! Iusto debitis ipsa sint quae saepe, odio provident excepturi laborum laudantium nisi aliquid consectetur voluptas assumenda error. Blanditiis eius dicta totam pariatur dolor, alias amet debitis quam ipsa natus qui aspernatur ut, veritatis quia excepturi. Necessitatibus excepturi repellat laboriosam fugit explicabo neque veniam, quisquam voluptas velit esse expedita magni deserunt, assumenda blanditiis! Laboriosam facere fugiat odit, doloremque eveniet totam soluta voluptatem velit cumque quam officiis perspiciatis molestias iste labore asperiores incidunt vero aut unde illo aliquid consequuntur libero hic nobis! Ipsa ipsum mollitia sit minus impedit. Soluta impedit quaerat quibusdam quis veritatis. Blanditiis, expedita quisquam quasi quod pariatur non cum commodi dicta numquam cupiditate at tempore recusandae eveniet ad ratione dolor minima deserunt. Harum facilis reprehenderit aperiam sapiente reiciendis assumenda, eveniet, natus, dicta laudantium ad a ratione! Ducimus dignissimos quia dolor nam neque? Illo itaque labore, nam veritatis tempore esse doloribus a? Ullam et eos voluptates debitis labore minus ipsa ea ad consectetur iure necessitatibus illo assumenda, saepe rerum harum maxime tempore corporis commodi vel autem ab! Veniam, voluptas aut vero tempora accusamus sapiente adipisci qui veritatis quaerat amet minus a maxime sint itaque asperiores ipsa. Blanditiis consequuntur ea repellat alias ipsam eius aliquam inventore, similique vitae magni at possimus dolores dignissimos vero dolor laudantium quibusdam veniam! Praesentium reiciendis ducimus excepturi sapiente nulla placeat accusantium assumenda doloremque delectus laborum dolor nam id nihil, fugit recusandae ratione in ut hic suscipit sint dolore veritatis dolorum optio. Illum, adipisci molestias doloribus dignissimos cumque voluptatem nobis doloremque distinctio! Quam nisi commodi nihil accusamus cumque, quibusdam hic quos similique ex porro alias consequuntur inventore! Ducimus, perspiciatis consectetur quos explicabo, animi id tempore corrupti itaque eum mollitia culpa incidunt earum quo neque necessitatibus veritatis ab, alias architecto amet inventore laboriosam voluptate repellat delectus! Impedit facilis alias voluptas fugit dolorem. Aut ipsam laborum debitis ex, aliquid accusamus eaque assumenda. Consequuntur excepturi perferendis sapiente ipsum. Eligendi est cum culpa quam nobis fugiat, libero in eum provident repudiandae sunt totam ipsa minima dolores animi qui itaque nihil, veniam laboriosam nesciunt nostrum distinctio corrupti doloribus. In ea esse voluptates a est officia sapiente eius perspiciatis iste ipsa dolorum dolorem, necessitatibus tenetur dignissimos quidem similique molestiae atque illo illum fuga quibusdam. Quis molestias, beatae pariatur tempore aut, unde reiciendis facere corrupti illo recusandae esse placeat ab vitae commodi repellendus ea laboriosam voluptatum quisquam adipisci sed odio minima non totam? Est accusantium, quos distinctio, recusandae temporibus alias dicta, eum voluptas eos animi ducimus et veniam soluta error eaque perferendis! Nesciunt aperiam reprehenderit minus ad corrupti labore, expedita magni repellat soluta pariatur consequuntur earum odit quae. Velit officia hic provident quidem voluptates eos aperiam ipsam soluta sed adipisci nisi itaque, omnis, voluptatibus placeat consectetur dolorum quam, in magnam qui. Cupiditate, aperiam!
            </p>
        </div>
    );

};

export default Login;