import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-stone-700">About Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our URL shortener service! We are dedicated to providing the best URL shortening experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to make sharing links easier and more efficient. Whether you are sharing links on social media, through email, or any other platform, our service ensures that your links are short and easy to manage.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We believe in simplicity and efficiency. Our team is constantly working to improve our service and provide you with the best possible experience.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for choosing our URL shortener service. If you have any questions or feedback, feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default About;