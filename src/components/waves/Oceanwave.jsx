import React from 'react';
import './ocean-wave.css'

function VideoHero() {
  return (
    <>
    <div>
      <div id="header" className="cf">
        <div className="page-width">
          <h1 id="site-title">
            <a href="http://html5backgroundvideos.com" target="_blank">

            </a>
          </h1>
        </div>
      </div>

      <div className="video-hero jquery-background-video-wrapper demo-video-wrapper">
        <video className="jquery-background-video" autoPlay muted loop poster="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.jpg">
          <source src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.mp4" type="video/mp4" />
          <source src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.webm" type="video/webm" />
          <source src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.ogv" type="video/ogg" />
        </video>
        <div className="video-overlay"></div>
        <div className="page-width">
          <div className="video-hero--content">
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default VideoHero;