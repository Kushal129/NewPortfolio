import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from 'react-hot-toast';
import { styles } from "./styles";
import "../input.css";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required!", {
        style: {
          background: "#1f1f1f",
          color: "#fff",
          border: "1px solid #377405",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: '#377405',
          secondary: '#fff',
        },
      });
      return;
    }

    setLoading(true);

    // Main email
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kushal Pipaliya",
          from_email: form.email,
          to_email: "21bmiit129@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Auto-reply email
        return emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          "template_buvyoc3",
          {
            from_name: "Kushal Pipaliya",
            to_name: form.name,
            from_email: "21bmiit129@gmail.com",
            to_email: form.email,  // Use the submitted email for auto-reply
            message: "Thank you for reaching out! I will get back to you as soon as possible.",
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
      })
      .then(() => {
        setLoading(false);
        toast.success("Thank you! I will get back to you as soon as possible.", {
          style: {
            background: "#1f1f1f",
            color: "#fff",
            border: "1px solid #377405",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          iconTheme: {
            primary: '#377405',
            secondary: '#fff',
          },
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error("Ahh, something went wrong. Please try again.", {
          style: {
            background: "#1f1f1f",
            color: "#fff",
            border: "1px solid #ff4b4b",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          iconTheme: {
            primary: '#ff4b4b',
            secondary: '#fff',
          },
        });
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-transparent p-8 rounded-2xl'
      >
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#1f1f1f',
              color: '#fff',
            },
          }}
        />
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Ping Me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-transparent border-[1px] border-[#377405] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-transparent border-[1px] border-[#377405] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-transparent border-[1px] border-[#377405] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg- py-3 px-8 rounded-xl border-[1px] border-[#377405] w-full text-white font-bold hover:bg-secondary hover:text-black'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
