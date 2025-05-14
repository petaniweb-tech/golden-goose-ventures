"use client";

import { useState } from "react";

export default function ContactStyleOne() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // setSubmitted(false);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    clearForm();
    setSubmitted(true);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <main className="content">
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container w-full flex items-center justify-center">
              <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col justify-center items-center gap-8">
                {/* Contact Form */}
                <div className="w-full bg-blue/95 rounded-xl p-10 flex flex-col items-center justify-center shadow">
                  <div className="heading5 text-white mb-4">Contact Us</div>
                  <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition resize-none"
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary rounded-md w-full mt-2 bg-white text-blue hover:bg-white-700"
                    >
                      Send Message
                    </button>
                    {submitted ? (
                      <div className="text-white text-center font-semibold">
                        Thank you for contacting us! We will get back to you
                        soon.
                      </div>
                    ) : (
                      <div className="text-white text-center font-semibold"></div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
