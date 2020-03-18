import React from 'react';

export default function TrackList(props: any): JSX.Element {
  return (
    <div>
      {props.tracks.map((track: any) => (
        <div key={track.id}>
          {track.title || track.name} - {track.artist}
          {props.onAddClick ? (
            <button onClick={() => props.onAddClick(track)}>Add</button>
          ) : null}
          {props.onRemoveClick ? (
            <button onClick={() => props.onRemoveClick(track.id)}>
              Remove
            </button>
          ) : null}
        </div>
      ))}

      {props.tracks.length === 0 ? <strong>No tracks.</strong> : null}
    </div>
  );
}
