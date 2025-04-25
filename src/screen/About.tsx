const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover"
        >
          <source src="/yetkinlik.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>
    </div>
  );
};

export default About;
