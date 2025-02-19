import React from "react";
import Headline from "../../Shared/Headline";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdDashboardCustomize, MdLocalPrintshop } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Process = () => {
  return (
    <div>
      <header>
        <Headline
          title={"Process"}
          subTitle={"How We Make It Happen"}
        ></Headline>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* 1st process */}
        <div
          data-aos="fade-right"
          className="flex flex-col bg-white  p-6 rounded-md"
        >
          <div className="rounded-full flex justify-center text-secondary mb-2">
            <FaCodePullRequest size={25} />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-3">
            1.Submit Your Request
          </h3>
          <p className="text-sm md:text-base">
            Share your vision with us by filling out our online request form or
            contacting our team directly. Provide details about your project
            requirements, such as design preferences, size, and delivery
            expectations. This helps us understand your needs and tailor our
            services to meet them.
          </p>
        </div>
        {/* 2nd process */}
        <div
          data-aos="fade-right"
          className="flex flex-col bg-white  p-6 rounded-md"
        >
          <div className="rounded-full flex justify-center text-secondary mb-2">
            <MdDashboardCustomize size={25} />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-3">
            2. Get a Custom Design
          </h3>
          <p className="text-sm md:text-base">
            Our team of professional designers will create a custom design based
            on your requirements. We'll collaborate with you, ensuring your
            ideas are brought to life with precision and creativity. You'll
            receive a design draft to review and provide feedback.
          </p>
        </div>
        {/* 3rd process */}
        <div
          data-aos="fade-left"
          className="flex flex-col bg-white  p-6 rounded-md"
        >
          <div className="rounded-full flex justify-center text-secondary mb-2">
            <MdLocalPrintshop size={25} />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-3">
            3. Approve and Print
          </h3>
          <p className="text-sm md:text-base">
            After finalizing the design, we'll seek your approval before moving
            forward. Once approved, we'll use high-quality printing techniques
            to ensure the best results. This step guarantees that the final
            product meets your expectations.
          </p>
        </div>
        {/* 4th process */}
        <div
          data-aos="fade-left"
          className="flex flex-col bg-white  p-6 rounded-md"
        >
          <div className="rounded-full flex justify-center text-secondary mb-2">
            <TbTruckDelivery size={25} />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-3">
            4. Receive Delivery
          </h3>
          <p className="text-sm md:text-base">
            Sit back and relax as we handle the delivery process. Whether it's a
            digital file or a physical product, we'll ensure it reaches you
            promptly and in perfect condition. Our team is here to assist you
            with any follow-up questions or adjustments, if needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Process;
