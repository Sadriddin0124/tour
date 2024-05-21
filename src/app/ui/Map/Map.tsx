import React from "react";

const Map = () => {
  return (
    <div className="w-[100%] flex justify-center pt-[40px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5699.9561770585915!2d69.16320564480122!3d41.27985413525458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1716284621783!5m2!1sen!2sus"
        className="w-[80%] h-[70vh] rounded-t-[30px]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
