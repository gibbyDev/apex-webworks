"use client"

import { GlassmorphicHovercard } from "../components/ui/glassmorphic-hovercard"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const redGlow = "rgba(239, 68, 68, 0.6)"; // Tailwind red-500

export default function Cards() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.18,
        duration: 0.7,
        ease: [0.42, 0, 1, 1],
      },
    }),
  };

  return (
      <div className="max-w-7xl pt-16 pb-24 px-4 mx-0 sm:mx-[40px]">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Billing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Starter",
                price: "$19",
                features: [
                  "✔ 1 Website",
                  "✔ Basic Support",
                  "✔ Free SSL",
                  "✖ Custom Domain",
                  "✖ Priority Support",
                ],
                button: "Choose Starter",
              },
              {
                title: "Pro",
                price: "$49",
                features: [
                  "✔ 10 Websites",
                  "✔ Custom Domain",
                  "✔ Priority Support",
                  "✔ Free SSL",
                  "✖ Dedicated Manager",
                ],
                button: "Choose Pro",
              },
              {
                title: "Enterprise",
                price: "$199",
                features: [
                  "✔ Unlimited Websites",
                  "✔ Custom Domain",
                  "✔ Dedicated Manager",
                  "✔ Priority Support",
                  "✔ Free SSL",
                ],
                button: "Choose Enterprise",
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <GlassmorphicHovercard glowColor={redGlow}>
                  <div className="space-y-4 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-gray-900">{plan.title}</h3>
                    <div className="text-4xl font-bold text-red-600">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-700">/mo</span>
                    </div>
                    <ul className="text-gray-700 text-sm space-y-2 mb-4">
                      {plan.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <button className="w-full py-2 rounded-lg bg-gray-900 text-white font-bold shadow hover:bg-gray-800 transition">
                      {plan.button}
                    </button>
                  </div>
                </GlassmorphicHovercard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  )
}

