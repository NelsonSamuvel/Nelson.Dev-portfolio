import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_KEY;

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    title: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.message ||
      !formData.name ||
      !formData.title
    ) {
      toast.error("Fill all the fields to have a chat");
      return;
    }

    try {
      setIsLoading(true);
      const data = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      if (data.status === 200) {
        toast.success("Email sent successfully");
      }
      setFormData({
        email: "",
        name: "",
        title: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something Went Wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-0 bg-light-gray"
      data-aos="fade-in"
    >
      <div className="max-w-screen-lg md:mx-auto   flex flex-col  gap-4 md:gap-8 justify-between items-center px-6 py-12">
        <div>
          <h2 data-aos="fade-in" className="heading-2">
            Let's have a chat
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-lg  bg-black px-6 py-8 rounded-md"
        >
          <div className="space-y-3">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              placeholder="Enter your Email"
              value={formData.email}
              disabled={isLoading}
              onChange={handleInputChange}
              className="block border disabled:cursor-not-allowed disabled:bg-stone-900 border-stone-700  px-3 py-2 rounded w-full focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className="block border disabled:cursor-not-allowed  disabled:bg-stone-900 border-stone-700 autofill:bg-transparent  px-3 py-2 rounded w-full focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="title" className="block">
              Subject
            </label>
            <input
              id="title"
              type="text"
              autoComplete="off"
              placeholder="Enter the subject"
              value={formData.title}
              onChange={handleInputChange}
              disabled={isLoading}
              className="block border disabled:cursor-not-allowed disabled:bg-stone-900 border-stone-700  px-3 py-2 rounded w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              autoComplete="off"
              placeholder="Let the chat begin 💬"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isLoading}
              className="block border disabled:cursor-not-allowed disabled:bg-stone-900 border-stone-700 px-3 py-2 rounded w-full focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary disabled:cursor-not-allowed disabled:bg-primary/70 px-4 py-2 rounded w-full cursor-pointer mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
