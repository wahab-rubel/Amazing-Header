import 'react'


function About() {

  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src="/public/48rrmsRz_400x400.jpg" alt="logo.svg" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

      </div>
    </div>
  );
}


export default About