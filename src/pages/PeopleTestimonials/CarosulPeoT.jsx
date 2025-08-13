
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Patient - Heart Care",
    feedback:
      "The doctors and staff were so caring and attentive. They explained everything clearly and made me feel at ease throughout my treatment.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Robert Williams",
    designation: "Patient - Orthopedic",
    feedback:
      "I can walk again without pain thanks to the wonderful care I received here. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    designation: "Patient - Pediatrics",
    feedback:
      "My child was treated so kindly and professionally. We’re grateful for the excellent pediatric team.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    id: 4,
    name: "James Smith",
    designation: "Patient - Neurology",
    feedback:
      "The diagnosis and treatment plan I received changed my life. The neurologist here is one of the best.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    id: 5,
    name: "Sophia Brown",
    designation: "Patient - Dermatology",
    feedback:
      "My skin condition improved within weeks thanks to their expert advice and care.",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
  },
];

export default function CarosulPeoT() {
  return (
    <div className="py-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="card bg-primary text-primary-content w-70 h-70 rounded-tr-full rounded-bl-full rounded-br-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-tr-full rounded-bl-full rounded-br-full object-cover absolute bottom-5 left-60 "
              />
              <div className="p-10">
                <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                <p className="text-xs text-gray-200">{testimonial.designation}</p>
                <p className="mt-2 text-sm">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
