import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  // Validation
  const validate = (values) => {
    const errs = {};
    if (!values.name?.trim()) errs.name = "Name is required";
    else if (values.name.trim().length < 2) errs.name = "Name is too short";

    if (!values.email?.trim()) errs.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(values.email.trim())) errs.email = "Enter a valid email";
    }

    if (values.phone?.trim()) {
      const digits = values.phone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15)
        errs.phone = "Enter a valid phone number";
    }

    if (!values.message?.trim()) errs.message = "Message is required";
    else if (values.message.trim().length < 5)
      errs.message = "Message is too short";

    return errs;
  };

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (touched[name]) setErrors(validate(next));
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...form, [name]: value }));
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setSuccess("");
      return;
    }

    setSubmitting(true);
    setSuccess("");

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      console.log(" Response Status:", response.status);

      // Handle success for 200 or 201 codes
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        console.log("API Response:", data);

        setSuccess("Form Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTouched({});
        setErrors({});
      } else {
        const errorText = await response.text();
        console.error(" Server returned error:", errorText);
        setSuccess(" Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Network or Fetch Error:", err);
      setSuccess(" Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contactus" className="w-full relative p-14 min-h-screen flex items-center justify-center bg-[url('/assn/BG.png')] bg-cover bg-center">
      <div className="absolute bottom-0 left-0 w-40 lg:w-80">
        <img src="/assn/FooterVector1.png" alt="" className="object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-40 lg:w-80">
        <img src="/assn/FooterVector2.png" alt="" className="object-contain" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 z-10 items-center h-full w-full">
        <div className="text-center lg:text-left instrument-regular w-full lg:w-md mx-auto">
          <p>
            Whether you have an idea, a question, or simply want to explore how
            we can work together, we’re just a message away. <br /> Let’s catch
            up over coffee — great stories always begin with a good conversation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 h-full">
          <div className="text-[#252729] flex flex-col items-center justify-center gap-4">
            <p className="halant-regular text-xl lg:text-2xl">Join the Story</p>
            <p className="instrument-regular">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>

          {/* FORM START */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center justify-center w-full lg:w-2/3"
          >
            <div className="w-full">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Your Name*"
                aria-invalid={!!errors.name}
                className="w-full p-2 px-3 instrument-regular text-xs lg:text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
              />
              {errors.name && touched.name && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Your Email*"
                aria-invalid={!!errors.email}
                className="w-full p-2 px-3 instrument-regular text-xs lg:text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
              />
              {errors.email && touched.email && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="w-full">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                placeholder="Phone"
                aria-invalid={!!errors.phone}
                className="w-full p-2 px-3 instrument-regular text-xs lg:text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
              />
              {errors.phone && touched.phone && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="w-full">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Message*"
                aria-invalid={!!errors.message}
                className="w-full p-2 px-3 instrument-regular text-xs lg:text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15D2B] h-20 resize-none"
              />
              {errors.message && touched.message && (
                <p className="text-xs lg:text-sm text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#F15D2B] text-white w-fit text-sm shadow-md instrument-regular rounded-full p-4 py-2 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            {success && (
              <p
                className={`text-sm mt-2 ${
                  success.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}
          </form>
          

          <div className="text-[#F15D2B] font-bold text-sm flex items-center justify-center gap-2">
            <span>vernita@varnanfilms.co.in</span>
            <div className="w-[1px] h-6 bg-[#F15D2B]"></div>
            <span>+91 98736 84567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
