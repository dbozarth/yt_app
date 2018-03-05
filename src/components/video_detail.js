import React, { Component } from 'react';
import YoutubePlayer from 'react-youtube-player';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
      const videoId = video.id.videoId;
      return (
          <div className="container container-video">
        <YoutubePlayer
            videoId={videoId}
            playbackState='unstarted'
            width='100%'
            height='100%'
            configuration={
                {
                    showinfo: 1,
                    controls: 1
                }
            }
        />
        </div>
      );
    };

export default VideoDetail;