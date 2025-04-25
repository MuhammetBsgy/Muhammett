const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Arka Plan (sadece ana sayfada) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover"
        >
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className="inset-0 bg-black/20"></div>
      </div>

      {/* Hoş Geldiniz İçeriği (sadece ana sayfada) */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HOŞ GELDİNİZ
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
