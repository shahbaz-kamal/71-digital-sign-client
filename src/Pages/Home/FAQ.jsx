import React from "react";
import Headline from "../../Shared/Headline";

const FAQ = () => {
  return (
    <div>
      <header>
        <Headline
          title={"FAQ"}
          subTitle={"Answers to Your Common Questions"}
        ></Headline>
      </header>
      <section className="space-y-4 ">
        <div
          data-aos="fade-left"
          className="collapse collapse-plus bg-white"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-color-text">
            How do I submit a request for design services?
          </div>
          <div className="collapse-content text-color-text">
            <p>
              You can submit your request by filling out our online form on the
              "Contact Us" page or by visiting our office. Provide details about
              your project, such as design preferences, dimensions, and any
              specific requirements.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="collapse collapse-plus bg-white"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-color-text">
            What is the typical turnaround time for a custom design?
          </div>
          <div className="collapse-content text-color-text">
            <p>
              The turnaround time depends on the complexity of the design. For
              most projects, we deliver initial drafts within 2–3 business days.
              Revisions and final delivery will depend on your feedback and
              approval timeline.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="collapse collapse-plus bg-white "
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-color-text">
            Can I request changes to a design after approval?
          </div>
          <div className="collapse-content text-color-text">
            <p>
              Yes, minor changes can be accommodated even after approval.
              However, extensive revisions or changes after printing may incur
              additional charges. Please review the design carefully before
              final approval.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="collapse collapse-plus bg-white "
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-color-text">
            Do you offer delivery services for printed materials?
          </div>
          <div className="collapse-content text-color-text">
            <p>
              Yes, we provide delivery services for printed materials within
              designated areas. Shipping charges may apply, depending on the
              location. Alternatively, you can pick up your order directly from
              our office.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
