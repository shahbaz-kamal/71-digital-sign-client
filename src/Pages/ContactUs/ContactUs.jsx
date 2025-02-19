import React from "react";
import { Helmet } from "react-helmet-async";
import Headline from "../../Shared/Headline";
import Lottie from "lottie-react";
import contactUs from "../../assets/contactUs.json";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const ContactUs = () => {
  const axiosPublic = UseAxiosPublic();

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  const handleSend = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const newMessage = { name, email, subject, phone, message };
    try {
      const res = await axiosPublic.post("client/message", newMessage);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Thank you for reaching out to us! Your message has been successfully sent. Our team will get back to you as soon as possible.",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Contact Us || 71 Digital Sign</title>
      </Helmet>
      <header>
        <Headline
          title={"contact us"}
          subTitle={"Get in Touch with Us"}
        ></Headline>
      </header>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <div data-aos="fade-right" className="w-[50%] mx-auto lg:w-[35%] p-4">
          <Lottie animationData={contactUs}></Lottie>
        </div>

        {/* Right Section: Form & Address */}
        <div data-aos="fade-left" className="w-full flex-1 p-4">
          <form
            onSubmit={handleSend}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-color-text bg-muted-green bg-opacity-25 rounded-xl p-6"
          >
            {/* Name */}
            <div>
              <label className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
          
            {/* Phone Number */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                required
              />
            </div>
              {/* Subject */}
              <div>
              <label className="block text-lg font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your address"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered w-full"
                rows="4"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className="btn btn-error bg-primary border border-primary   transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white"
              >
                Send Us Message
              </button>
            </div>
          </form>

          {/* Address Section */}
          <div className="flex flex-col 2xl:flex-row mt-6 gap-6 2xl:justify-between ">
            {/* Address */}
            <div className="flex gap-2">
              <div className="bg-muted-green bg-opacity-25 flex items-center p-3 rounded-xl">
                <CiLocationOn size={25} color="#00a651" />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-color-text">
                  Address
                </h3>
                <p className=" text-sm md:text-base text-color-text">
                  Payalgacha, Barura, Cumilla
                </p>
              </div>
            </div>
            {/* Mobile */}
            <div className="flex gap-2">
              <div className="bg-muted-green bg-opacity-25 flex items-center p-3 rounded-xl">
                <CiPhone size={25} color="#00a651" />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-color-text">
                  Mobile
                </h3>
                <p className=" text-sm md:text-base text-color-text">
                  01799839985
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shahbazkamal384@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-muted-green bg-opacity-25 flex items-center p-3 rounded-xl">
                  <CiMail size={25} color="#00a651" />
                </div>
              </a>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-color-text">
                  Email
                </h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shahbazkamal384@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" text-sm md:text-base text-color-text">
                    shahbazkamal384@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
