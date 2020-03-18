import React, { Component } from 'react';
import TrackList from 'Components/TrackList';

interface Props {
  onAddClick: any;
}

interface AlbumResults {
  id: string;
  name: string;
  artist: string;
  album: string;
}

interface State {
  searchResults: Array<AlbumResults>;
}

export default class Albums extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      searchResults:
        // this will be a result of a search later
        [
          {
            id: 's1',
            name: 'biggie',
            artist: 'biggie',
            album: 'Help me You!',
          },
          {
            id: 's2',
            name: 'nase',
            artist: 'nase',
            album: 'illmatic',
          },
          {
            id: 's3',
            name: 'eminem',
            artist: 'eminem',
            album: 'marshall mathers',
          },
        ],
    };
  }

  render() {
    return (
      <div>
        <h2>Album List: </h2>
        <TrackList
          tracks={this.state.searchResults}
          onAddClick={this.props.onAddClick}
        ></TrackList>
      </div>
    );
  }
}
