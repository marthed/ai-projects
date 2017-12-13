import React from 'react';


export default class MatchThumbnail extends React.Component {

  render () {
    const { match } = this.props;
    console.log('match : ', match);
    const photos = match.photos;
    return (
      <div className="match-thumbnail">
        <div className="match-thumbail__Image">
          <img src={photos[0].url} width="50"/>
        </div>
        <span>{match.name}</span>
      </div>
    )
  }

}
