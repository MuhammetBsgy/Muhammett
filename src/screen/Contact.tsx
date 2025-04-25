const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover"
        >
          <source src="public/iletişim.mp4" type="video/mp4" />
          <source src="public/iletişim.webm" type="video/webm" />
        </video>
        <div className="inset-0 bg-black/30"></div>
      </div>
    </div>
  );
};

export default Contact;
