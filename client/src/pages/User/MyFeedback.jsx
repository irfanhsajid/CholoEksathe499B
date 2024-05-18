import { ValidationError, useForm } from '@formspree/react';
import { toast } from 'react-toastify';

import { useEffect } from 'react';

import { MdOutlineMail } from "react-icons/md";
import SectionHead from '../../components/SectionHead';


function IrfansContactForm() {
  const [state, handleSubmit] = useForm("xzbopvgy");

  console.log(state.form);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email Sent Successfully");
      document.getElementById("contact-form").reset()

      // Optionally, you can reset the form state here if needed
    }
  }, [state.succeeded]);

  return (
    <>
      <div className=" container">
        <SectionHead
        title='Share Your Thoughts'
        />
        <div id="contact" className="py-3 flex">
          <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full" id="contact-form">
              <input className="w-full m-2 p-2" id="name" type="text" name="name" placeholder="Your Name" required />
              <br />
              <input className="w-full m-2 p-2" id="contact" type="number" name="contact" placeholder="Contact: E.g. 017-367XXXXX" required />
              <ValidationError field="contact" prefix="Contact" errors={state.errors} />
              <br />
              <input className="w-full m-2 p-2" id="email" type="email" name="email" placeholder="Your Email" required />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
              <br />
              <textarea className="w-full m-2 p-2" rows="6" id="message" name="message" placeholder="Feel Free to Share Your Feedback..." />
              <button className="w-full actionBtn !bg-secondary border-0 m-2 p-2 rounded" type="submit" disabled={state.submitting}>
                <span className='flex items-center gap-2 mx-auto justify-center'> <MdOutlineMail className='text-xl' /> Send Feedback</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function MyFeedback() {
  return (
    <IrfansContactForm />
  );
}

export default MyFeedback;