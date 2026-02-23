import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (pathname !== "/") {
        // If not on the home page, navigate first and then scroll
        navigate("/", { replace: true });
        setTimeout(() => {
          const delayedElement = document.querySelector(hash);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // Delay to ensure React renders the new page first
      }
    }
  }, [hash, pathname, navigate]);

  return null;
};

export default ScrollToHashElement;
