import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,
      offset: 200,
    });
  }, []);
  return <div className="overflow-x-hidden">{children}</div>;
};

export default AOSWrapper;
