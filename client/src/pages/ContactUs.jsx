import { ValidationError, useForm } from '@formspree/react';
import { toast } from 'react-toastify';
import SectionHead from '../components/SectionHead';
import { useEffect } from 'react';
import MainNav from '../components/MainNav';

function IrfansContactForm() {
  const [state, handleSubmit, reset] = useForm("xzbopvgy");

  console.log(reset);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email Sent Successfully");
      // Optionally, you can reset the form state here if needed
    }
  }, [state.succeeded]);

  return (
    <>
  <MainNav/>
    <div className="container">
      <SectionHead title='CONNECT US' />
      <div id="contact" className="py-3 flex">
        <div className="w-1/2">
          <div className="contact-text">
            <h2 className="">About Me</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi molestiae sit dolores placeat corporis dolorem quisquam voluptatibus suscipit eligendi recusandae ex odit aliquid, veritatis ipsa exercitationem distinctio ipsum reprehenderit!
            </p>
            <p>
              <a style={{ textDecoration: 'none', color: 'inherit' }} href=" https://www.facebook.com/irfanhsajid " target="_blank"><i className="fab fa-facebook-square mr-1"> </i> Irfan H Sajid</a>
            </p>
            <p>
              <i className="fab fa-whatsapp-square mr-1"></i> +880-1324-392630
            </p>
            <p>
              <i className="fas fa-envelope mr-1"></i> irfanhsajid@gmail.com
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="w-full">
            <input className="w-full m-2 p-2" id="name" type="text" name="name" placeholder="Your Name" />
            <br />
            <input className="w-full m-2 p-2" id="email" type="email" name="email" placeholder="Your Email" />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
            <br />
            <textarea className="w-full m-2 p-2" rows="5" id="message" name="message" placeholder="Message..." />
            <button className="w-full actionBtn !bg-secondary border-0 m-2 p-2 rounded" type="submit" disabled={state.submitting}>
              <i className="fas fa-paper-plane hvr-icon mr-2"></i> SEND EMAIL
            </button>
            <button onClick={() => reset()} className="w-full actionBtn !bg-secondary border-0 m-2 p-2 rounded" type="button" disabled={state.submitting}>
              Testing Toaster
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

function Contact() {
  return (
    <IrfansContactForm />
  );
}

export default Contact;