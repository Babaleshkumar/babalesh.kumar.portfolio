import React from "react";

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Testimonial</h2>

          <div className="flex items-start gap-4">
            <div className="w-1/12">
              <div className="w-10 h-10 rounded-full bg-yellow-400" />
            </div>

            <div className="w-11/12">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-yellow-400 font-semibold">The design quality</span>, flexibility, documentation and support are all absolutely{' '}
                <span className="text-yellow-400 font-semibold">excellent</span>. I buy the Avada theme for all my clients, knowing that whatever they require, Avada will be able to deliver.
              </p>

              <div className="mt-4">
                <div className="font-semibold text-gray-100">Josef Sharon</div>
                <div className="text-sm text-gray-400">— CEO, Omisoft</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right image with rounded gold card behind */}
        <div className="flex justify-end">
          <div className="relative w-64 h-64">
            <div className="absolute -right-6 -top-6 w-56 h-56 rounded-2xl bg-yellow-300" />
            <img
              src="/testimonial-person.jpg"
              alt="testimonial person"
              className="relative rounded-2xl object-cover w-64 h-64 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
