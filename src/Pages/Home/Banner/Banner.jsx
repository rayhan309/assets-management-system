import React from "react";

const Banner = () => {
  return (
    <section className="min-h-[80vh] rounded-2xl bg-black/40 text-slate-100 w-full px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Section – Text Content */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Efficient Asset Management for Your Company
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
          AssetVerse is a comprehensive digital platform that helps companies efficiently manage 
          their physical assets like laptops, keyboards, chairs, and more. Track which employee has 
          which equipment and streamline your entire asset management process.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50 text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div>Faster Audits</div>
          </div>

          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50 text-center">
            <div className="text-3xl font-bold text-white">60+</div>
            <div>Integrations</div>
          </div>

          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/50 text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div>Support</div>
          </div>
        </div>
      </div>

      {/* Right Section – Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md rounded-2xl p-6 bg-[#111827] border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="h-64 w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-slate-500 text-lg border border-slate-700/50">
            AssetVerse Dashboard Preview
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/60 text-center">
              <div className="text-xs text-slate-400">Active Assets</div>
              <div className="text-3xl font-semibold">8,423</div>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/60 text-center">
              <div className="text-xs text-slate-400">Maintenance Alerts</div>
              <div className="text-3xl font-semibold">124</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-900/60 rounded-xl border border-slate-800/60">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Audit Progress</span>
              <span>62%</span>
            </div>
            <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "62%", background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }}
              ></div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500 text-center">
            Live asset metrics displayed in a clean, modern layout
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;
