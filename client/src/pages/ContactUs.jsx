import { ValidationError, useForm } from '@formspree/react';
import { toast } from 'react-toastify';
import SectionHead from '../components/SectionHead';
import { useEffect } from 'react';
import MainNav from '../components/MainNav';
import { MdOutlineMail } from "react-icons/md";
import GlowingButton from '../components/GlowingButton';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
      <MainNav />
      <div className=" container">
        <SectionHead title='CONNECT US' />
        <div id="contact" className="py-3 flex">
          <div className="w-1/2">
            <div className="contact-text">
              <h2 className="font-bold">যোগাযোগঃ</h2>
              <p className="about-text py-2">
                আপনারা চাইলে আমাদেরকে সরাসরি এই নাম্বারে কল করেও ইভেন্ট বুকিং করতে পারেন। <br /> অথবা নিচে উল্লেখিত স্যোসাল মিডিয়া একাউন্টেও যোগাযোগ করতে পারেন। <br />
                অথবা মেইলের মাধ্যমে আপনার পছন্দের ভেন্যু ও অন্যান্য প্রয়োজনীয় তথ্য পূরন করে  রিকুয়েস্ট পাঠান। (recommened)
              </p>
              <div className='flex mx-auto justify-start mt-5 ms-[200px]'>
                <GlowingButton />
              </div>
              <div className='flex gap-8 mt-5 justify-center me-[10rem] '>
                <p className='flex-icon'>
                  <FaFacebook className='text-secondary'/> Facebook
                </p>
                <p className='flex-icon'>
                  <FaWhatsappSquare className='text-secondary'/> WhatsApp
                </p>
                <p className='flex-icon'>
                 <FaTwitter className='text-secondary'/> Twitter
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <form onSubmit={handleSubmit} className="w-full" id="contact-form">
              <input className="w-full m-2 p-2" id="name" type="text" name="name" placeholder="Your Name" required />
              <br />
              <input className="w-full m-2 p-2" id="contact" type="number" name="contact" placeholder="Contact: E.g. 017-367XXXXX" required />
              <ValidationError field="contact" prefix="Contact" errors={state.errors} />
              <br />
              <input className="w-full m-2 p-2" id="email" type="email" name="email" placeholder="Your Email" required />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
              <br />
              <input className="w-full m-2 p-2" id="venueId" type="text" name="venueId" placeholder="Choosen Venue Id: E.g. NSU10B" required />
              <ValidationError field="venueId" prefix="VenueId" errors={state.errors} />
              <br />
              <input className="w-full m-2 p-2" id="event-date" type="date" name="event-date" placeholder="Your Preferable Date" required />
              <ValidationError field="event-date" prefix="Date" errors={state.errors} />
              <br />
              <textarea className="w-full m-2 p-2" rows="3" id="message" name="message" placeholder="Additional Requirements..." />
              <button className="w-full actionBtn !bg-secondary border-0 m-2 p-2 rounded" type="submit" disabled={state.submitting}>
                <span className='flex items-center gap-2 mx-auto justify-center'> <MdOutlineMail className='text-xl' /> SEND EMAIL</span>
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