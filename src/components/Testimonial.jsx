import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#fff" }}
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <p className="text-gray-600 text-sm mb-4">
                “At this School, our mission is to balance a rigorous
                comprehensive college preparatory curriculum with healthy social
                and emotional development.”
              </p>
              <div className="flex justify-center py-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={
                    index === 0
                      ? "https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                      : index === 1
                      ? "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      : "https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
                  alt="Student"
                />
              </div>
              <div className="text-gray-600 font-semibold">Balbir Kaur</div>
              <div className="text-gray-500 text-sm">Student</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
