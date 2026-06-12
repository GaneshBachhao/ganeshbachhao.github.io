import "./TechnologyCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const slides = [
  {
    image: "/images/showcase/dotnet.jpg",
    title: ".NET Development",
    description: "Building scalable enterprise APIs and backend systems.",
  },

  {
    image: "/images/showcase/angular.jpg",
    title: "Angular Frontend",
    description: "Responsive and modern enterprise web applications.",
  },

  {
    image: "/images/showcase/azure.jpg",
    title: "Microsoft Azure",
    description: "Cloud-native services and enterprise modernization.",
  },

  {
    image: "/images/showcase/openai.jpg",
    title: "Azure OpenAI",
    description: "AI-powered automation and semantic search solutions.",
  },

  {
    image: "/images/showcase/microservices.jpg",
    title: "Microservices",
    description: "Distributed architectures with resilient integrations.",
  },

  {
    image: "/images/showcase/devops.jpg",
    title: "DevOps",
    description: "CI/CD pipelines and delivery automation.",
  },
];

const TechnologyCarousel = () => {
  return (
    <section className="carousel-section">
      <div className="container">
        <h2 className="section-title">Technology Showcase</h2>

        <Swiper spaceBetween={30} slidesPerView={1}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="tech-card">
                <img src={slide.image} alt={slide.title} />

                <div className="tech-content">
                  <h3>{slide.title}</h3>

                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechnologyCarousel;
