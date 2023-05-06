import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <div className="flex flex-col">
      <div
        className="hero min-h-screen mb-8"
        style={{
          backgroundImage: 'url("https://i.ibb.co/c8d0dww/PHOTO-2023-01-26-22-36-47.jpg")',
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold" style={{ color: 'white' }}>Excelsior! Magazine</h1>
            <h3 className="mb-5 text-white">
              A journalism organization dedicated to bringing you a
              sophisticated analysis of everything in the world.
            </h3>
          </div>
        </div>
      </div>
      <br />
      <div style={{ backgroundColor: '#F5EFED' }} className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/zRVPxsx/FRONT-COVER.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 style={{ color: '#011638' }} className="text-5xl font-bold">
              Check Out Issue 3 Out Now!
            </h1>
            <p style={{ color: '#011638' }} className="py-6">
              Check out our third issue! Did you hear about the face reveal of dream?
              What about the death of Queen Elizabeth? Or maybe you saw “There is a
              pipebomb in your mailbox” on Twitter and you have yet to learn what
              it was about. No matter your pick, one thing is clear - the world
              can be cruel.
            </p>
            <a href="https://online.anyflip.com/hxrnl/xlbo/mobile/index.html">
              <button
                type="button"
                style={{ backgroundColor: '#011638' }}
                className="btn btn-primary"
              >
              Read more
              </button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-semibold">Who Are We?</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div
                className="card w-96 bg-base-100 shadow-xl"
                style={{ backgroundColor: '#617fad' }}
              >
                <div className="card-body">
                  <h2 className="card-title" style={{ color: 'white' }}>
                    Our Mission
                  </h2>
                  <p className="text-white">
                    To provide a deeper perspective to the things of the world.
                  </p>
                </div>
                <Link href="/about">
                  <button
                    type="button"
                    style={{ backgroundColor: '#153579' }}
                    className="btn btn-primary"
                  >
                    About Us
                  </button>
                </Link>
                <figure>
                  <img
                    src="https://i.ibb.co/DDwWmwf/pexels-cottonbro-studio-3944454.jpg"
                    alt="pexels-cottonbro-studio-3944454"
                    border="0"
                  />
                </figure>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div
                className="card w-96 bg-base-100 shadow-xl"
                style={{ backgroundColor: '#617fad' }}
              >
                <div className="card-body">
                  <h2 className="card-title" style={{ color: 'white' }}>
                    Our Vision
                  </h2>
                  <p className="text-white">
                    To increase understanding through deep analysis.
                  </p>
                </div>
                <Link href="/about">
                  <button
                    type="button"
                    style={{ backgroundColor: '#153579' }}
                    className="btn btn-primary"
                  >
                    About Us
                  </button>
                </Link>
                <figure>
                  <img
                    src="https://i.ibb.co/wzy9jYL/pexels-cottonbro-studio-3944425.jpg"
                    alt="pexels-cottonbro-studio-3944425"
                    border="0"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-semibold">Our Issues</h1>
      </div>
      <div style={{ backgroundColor: '#F5EFED' }} className="hero min-h-screen">
        <div
          className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box"
          style={{ width: 'auto', height: '500px' }}
        >
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/9qg4LGF/IMG-4732.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/jhm5yzW/COVER.png"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/zRVPxsx/FRONT-COVER.png"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#F5EFED' }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/nrSwx8Y/Screenshot-2023-04-01-at-18-36-47-removebg-preview.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">We have a podcast!</h1>
            <p className="py-6">
              There have must been times when we’ve had mind boggling thoughts
              inside us. Unquestionably intuitive. Are they a little concerning?
              Maybe. Well, we are committed to creating a space for students to
              express themselves in order to strengthen our community. Come and
              join us as we explore unusual, but no less entertaining, topics!
            </p>
            <button
              type="button"
              style={{ backgroundColor: '#153579' }}
              className="btn btn-primary"
            >
              Check Out Our Spotify
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Hero;
