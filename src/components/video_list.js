import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                video={video} 
                key={video.etag}/>
        )
    });

    return (
        <div className="container">
            <ul className="col-md-12 list-group video_item_padding">
              {videoItems}
            </ul>
        </div>
    );
};

export default VideoList;