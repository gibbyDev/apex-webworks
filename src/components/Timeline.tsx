"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "Conceptualize & Design",
      content: (
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {[
            "https://assets.aceternity.com/templates/startup-1.webp",
            "https://assets.aceternity.com/templates/startup-2.webp",
            "https://assets.aceternity.com/templates/startup-3.webp",
            "https://assets.aceternity.com/templates/startup-4.webp",
          ].map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 + idx * 0.1, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      ),
    },
    {
      title: "Development & Testing",
      content: (
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {[
            "https://assets.aceternity.com/pro/hero-sections.png",
            "https://assets.aceternity.com/features-section.png",
            "https://assets.aceternity.com/pro/bento-grids.png",
            "https://assets.aceternity.com/cards.png",
          ].map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt="development template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 + idx * 0.1, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      ),
    },
    {
      title: "Deployment & Scaling",
      content: (
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {[
            "https://assets.aceternity.com/pro/hero-sections.png",
            "https://assets.aceternity.com/features-section.png",
            "https://assets.aceternity.com/pro/bento-grids.png",
            "https://assets.aceternity.com/cards.png",
          ].map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt="deployment template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 + idx * 0.1, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
