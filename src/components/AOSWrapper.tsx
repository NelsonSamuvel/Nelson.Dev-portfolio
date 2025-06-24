import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // animation only once
    });
  }, []);
  return children;
};

export default AOSWrapper;
