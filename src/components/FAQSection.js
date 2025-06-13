"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    question: "Do I need a full team to join a match?",
    answer: "Nope! You can join as a solo player and you'll be matched accordingly.",
  },
  {
    question: "What if a game is canceled?",
    answer: "You'll be notified and refunded or rescheduled as per our policy.",
  },
  {
    question: "How do I get my stats verified?",
    answer: "Stats are verified by match hosts or referees after each game.",
  },
  {
    question: "Can I play in different cities?",
    answer: "Yes, you can join games in any city where FT Play operates.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 md:py-16 bg-[#f5f7fa]">
      <h2 className="text-[24px] md:text-[48px] font-black mb-6 md:mb-12 flex flex-col md:flex-row items-center gap-1 md:gap-3 text-center justify-center font-dm-sans">
        <span className="text-red-600 text-[32px] md:text-[56px] leading-none">?</span>
        <span>Frequently Asked Questions (FAQs)</span>
      </h2>
      <div className="w-full max-w-xs md:max-w-2xl space-y-3 md:space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[#f2f4f6] shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 md:px-8 py-4 md:py-6 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span className="text-[16px] md:text-[26px] font-bold text-gray-900 font-dm-sans text-left">
                {faq.question}
              </span>
              <span className="text-[22px] md:text-[32px] font-bold" style={{color: '#c8e45c'}}>
                {openIndex === idx ? <FiChevronDown size={22} /> : <FiChevronRight size={22} />}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 md:px-8 pb-4 md:pb-6 text-[14px] md:text-[19px] text-gray-800 font-inter">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 