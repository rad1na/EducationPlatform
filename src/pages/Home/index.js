import React from "react";
import Intro from "./components/Intro/Intro";
import CoursesDisplay from "./components/CoursesDisplay/CoursesDisplay";
import AboutUs from "./components/AboutUs/AboutUs";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import TestimonialCards from "./components/TestimonialCard/TestimonialCard";

const Home = ({ toggleModal, setSelectedCategory, setFocusSearch }) => {
  return (
    <div>
      <Intro toggleModal={toggleModal} />
      <CoursesDisplay title="hello World" />
      <AboutUs />
      <CategoryCard
        setSelectedCategory={setSelectedCategory}
        setFocusSearch={setFocusSearch}
      />
      <TestimonialCards />
    </div>
  );
};

export default Home;
