import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "motion/react";

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
      className="scroll-mt-0 bg-light-gray overflow-hidden"
      data-aos="fade-in"
    >
      <div className="max-w-screen-sm md:mx-auto flex flex-col gap-8 md:gap-12 justify-between items-center px-6 py-16 md:py-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4"
        >
          <h2 data-aos="fade-in" className="heading-2 relative">
            Let's have a chat
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          <p className="text-gray max-w-md mx-auto text-lg leading-relaxed">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Enhanced Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 w-full bg-black/95 backdrop-blur-sm px-8 py-10 rounded-3xl shadow-2xl shadow-black/20 border border-stone-800/50 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-y-8 -translate-x-8"></div>

          {/* Form Fields */}
          <div className="space-y-6 relative">
            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-white/90 font-medium mb-3 transition-colors group-focus-within:text-primary"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  disabled={isLoading}
                  onChange={handleInputChange}
                  className="block w-full bg-stone-900/50 border-2 border-stone-700/50 text-white placeholder-stone-400 px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-primary focus:bg-stone-900/70 focus:shadow-lg focus:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-stone-900/30"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-white/90 font-medium mb-3 transition-colors group-focus-within:text-primary"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="block w-full bg-stone-900/50 border-2 border-stone-700/50 text-white placeholder-stone-400 px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-primary focus:bg-stone-900/70 focus:shadow-lg focus:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-stone-900/30"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="group">
              <label
                htmlFor="title"
                className="block text-white/90 font-medium mb-3 transition-colors group-focus-within:text-primary"
              >
                Subject
              </label>
              <div className="relative">
                <input
                  id="title"
                  type="text"
                  autoComplete="off"
                  placeholder="Project Discussion"
                  value={formData.title}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="block w-full bg-stone-900/50 border-2 border-stone-700/50 text-white placeholder-stone-400 px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-primary focus:bg-stone-900/70 focus:shadow-lg focus:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-stone-900/30"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-white/90 font-medium mb-3 transition-colors group-focus-within:text-primary"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={6}
                  autoComplete="off"
                  placeholder="Tell me about your project and how I can help you bring it to life... 💬"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="block w-full bg-stone-900/50 border-2 border-stone-700/50 text-white placeholder-stone-400 px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-primary focus:bg-stone-900/70 focus:shadow-lg focus:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-stone-900/30 resize-none"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none overflow-hidden"
            >
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Form Footer */}
          <div className="text-center pt-2">
            <p className="text-stone-400 text-sm">
              I'll get back to you within 24 hours ⚡
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
