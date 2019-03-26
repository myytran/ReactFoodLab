import React from 'react';
import SearchBar from './search-bar';
import youtube from '../apis/youtube';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class ExploreVids extends React.Component {
  state = { videos:  [], selectedVideo: null };

//method that defaults to a certain search term when ExploreVids component loads
  componentDidMount() {
    this.onTermSubmit(' Shakshuka recipes');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
};
    onVideoSelect = video  => {
    this.setState({ selectedVideo: video});
    };

    render() {
  return(
          <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />


          </div>
      )
    }
}
export default ExploreVids;