import React, { forwardRef } from 'react';

// IMPORTANT: Import your custom TikTok thumbnail images here.
// Example:
import tiktokMalabeThumbnail from '../assets/images/New Kids.png'; // Replace with your actual image file

const ClassVideos = forwardRef((props, ref) => {
  // Array of video data for both YouTube embeds and TikTok direct links
  const videos = [
    {
      id: 'tiktok-malabe-class',
      type: 'tiktok-link', // For videos that link directly to TikTok website
      videoUrl: 'https://www.tiktok.com/@_jayaruwan_/video/7518589701654334728', // <<< IMPORTANT: Replace with your actual public TikTok video URL
      thumbnailSrc: tiktokMalabeThumbnail, // <<< IMPORTANT: Use your imported thumbnail image
      title: 'New Kids Malabe Class',
    },
    // Add more video objects here as needed.
    // Ensure 'videoId' for YouTube embeds and 'videoUrl' for TikTok links are strings, not 'true'.
  ];

  return (
    <section ref={ref} id="class-videos-section" className="p-8 w-full bg-[#272727] text-[#EFD09E] flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em' }}>
        Our Classes Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {videos.map((video) => (
          <div key={video.id} className="w-full bg-[#EFD09E] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            {video.type === 'youtube-embed' ? (
              // YouTube Embed (plays on site, but starts on click, not autoplay)
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  // Construct YouTube embed URL: `embed/{videoId}?autoplay=0&rel=0`
                  // autoplay=0: prevents auto-playback
                  // rel=0: attempts to prevent related videos from other channels after playback
                  src={`http://googleusercontent.com/youtube.com/8{video.videoId}?autoplay=0&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // TikTok Direct Link (opens TikTok website in new tab)
              <div className="relative w-full h-96 overflow-hidden group">
                <a
                  href={video.videoUrl} // The direct URL to the TikTok video
                  target="_blank" // Opens link in a new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  aria-label={`Watch ${video.title} on TikTok`}
                  className="absolute top-0 left-0 w-full h-full block group"
                >
                  <img
                    src={video.thumbnailSrc} // Your custom thumbnail image
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                </a>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#272727]">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ClassVideos;