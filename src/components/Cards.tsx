import { GlassmorphicHovercard } from "../components/ui/glassmorphic-hovercard"

const redGlow = "rgba(239, 68, 68, 0.6)"; // Tailwind red-500

export default function Cards() {
  return (
    <div>
      <div className="min-h-screen p-8 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Billing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <GlassmorphicHovercard glowColor={redGlow}>
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-900">Starter</h3>
                <div className="text-4xl font-bold text-red-600">$19<span className="text-lg font-normal text-gray-700">/mo</span></div>
                <ul className="text-gray-700 text-sm space-y-2 mb-4">
                  <li>✔ 1 Website</li>
                  <li>✔ Basic Support</li>
                  <li>✔ Free SSL</li>
                  <li>✖ Custom Domain</li>
                  <li>✖ Priority Support</li>
                </ul>
                <button className="w-full py-2 rounded-lg bg-gray-900 text-white font-bold shadow hover:bg-gray-800 transition">
                  Choose Starter
                </button>
              </div>
            </GlassmorphicHovercard>
            {/* Pro Plan */}
            <GlassmorphicHovercard glowColor={redGlow}>
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-900">Pro</h3>
                <div className="text-4xl font-bold text-red-600">$49<span className="text-lg font-normal text-gray-700">/mo</span></div>
                <ul className="text-gray-700 text-sm space-y-2 mb-4">
                  <li>✔ 10 Websites</li>
                  <li>✔ Custom Domain</li>
                  <li>✔ Priority Support</li>
                  <li>✔ Free SSL</li>
                  <li>✖ Dedicated Manager</li>
                </ul>
                <button className="w-full py-2 rounded-lg bg-gray-900 text-white font-bold shadow hover:bg-gray-800 transition">
                  Choose Pro
                </button>
              </div>
            </GlassmorphicHovercard>
            {/* Enterprise Plan */}
            <GlassmorphicHovercard glowColor={redGlow}>
              <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
                <div className="text-4xl font-bold text-red-600">$199<span className="text-lg font-normal text-gray-700">/mo</span></div>
                <ul className="text-gray-700 text-sm space-y-2 mb-4">
                  <li>✔ Unlimited Websites</li>
                  <li>✔ Custom Domain</li>
                  <li>✔ Dedicated Manager</li>
                  <li>✔ Priority Support</li>
                  <li>✔ Free SSL</li>
                </ul>
                <button className="w-full py-2 rounded-lg bg-gray-900 text-white font-bold shadow hover:bg-gray-800 transition">
                  Choose Enterprise
                </button>
              </div>
            </GlassmorphicHovercard>
          </div>
        </div>
      </div>
    </div>
  )
}

