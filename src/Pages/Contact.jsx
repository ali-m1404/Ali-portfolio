import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Ali Portfolio";
  }, []);

  return (
    <div className="px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
      <p>Email: ali@email.com</p>
      <p>GitHub: github.com/ali-m1404</p>
      <p>LinkedIn: linkedin.com/in/ali</p>
    </div>
  );
}

export default Contact;