import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postSong } from '../modules/playlists'
import SongTile from '../components/SongTile'

class SongsIndexContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const songs = this.props.artistSongs

    const songTiles = songs.map(song => {
      const addSong = () => {
        this.props.postSong(song.id)
      }
      return(
        <SongTile
          key={song.id}
          song={song}
          handleClick={addSong}
          type='add'
        />
      )
    })

    return(
      <div className='columns small-10 medium-4'>
        <h1>Available Songs</h1>
        {songTiles}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    artistSongs: state.songs.artistSongs,
    playlistSongs: state.playlists.playlistSongs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postSong: (songId) => dispatch(postSong(songId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndexContainer)
