"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/component/ui/accordion";

export default function Faq({ className }) {
  const [activeItem, setActiveItem] = useState("item-1");
  const faqItems = [
    {
      id: "item-1",
      question: "Are your supplements safe and tested?",
      answer:
        "Yes, all our supplements are manufactured in FDA-registered facilities and undergo rigorous third-party testing. We ensure that every product meets the highest quality and safety standards, using only premium ingredients backed by scientific research.",
    },
    {
      id: "item-2",
      question: "How long will it take to see results from supplements?",
      answer:
        "Results vary depending on the type of supplement and individual factors. Generally, you may notice initial effects within 2-4 weeks with consistent use, while optimal results typically show within 8-12 weeks when combined with proper diet and exercise.",
    },
    {
      id: "item-3",
      question: "What are the best supplements for muscle gain?",
      answer:
        "For muscle gain, we recommend a combination of whey protein, creatine monohydrate, and BCAAs (Branched Chain Amino Acids). These supplements, when paired with proper strength training and nutrition, can help optimize muscle growth and recovery.",
    },
    {
      id: "item-4",
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer worldwide shipping with tracking. Delivery times vary by location, typically 3-5 business days for domestic orders and 7-14 days for international orders. We also provide free shipping on orders over $100.",
    },
    {
      id: "item-5",
      question: "Can I take multiple supplements together?",
      answer:
        "While many supplements can be taken together, we recommend consulting with a healthcare professional about your specific supplement stack. We provide detailed timing and dosage guidelines with each product, and our expert support team is available to help you create an optimal supplement routine.",
    },
  ];

  const handleAccordionChange = (value) => {
    setActiveItem(value);
  };

  return (
    <div className={`bg-gray-100 py-20  ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-muted-foreground">
                FAQS
              </h3>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">              Supplement Guide{" "}
                <span className="block lg:inline">
                  and <span className="text-[#a6215c] ">Information</span>
                </span>
              </h2>
            </div>            <p className="max-w-md text-muted-foreground">
              Get answers to commonly asked questions about our supplements, their usage, benefits, and shipping information. Still have questions? Our expert team is here to help.
            </p>
            <div>
              <button className="px-4 text-lg z-30 py-2 bg-[#a6215c]  rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a6215c]  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  ">
                See More FAQ&apos;s
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Accordion
              type="single"
              defaultValue="item-1"
              className="w-full"
              onValueChange={handleAccordionChange}
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger
                    className={`px-6 py-4 hover:no-underline ${
                      activeItem === item.id
                        ? "bg-[#a6215c]  text-white hover:bg-[#a6215c]  data-[state=open]:bg-[#a6215c] "
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-left font-medium text-lg">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
