import React, {Component} from 'react';
import UserList from './UserList';

class MovieCard extends Component {
render() {
  const {users, usersWhoLikedMovie, movieName} = this.props;
  
  return (
    <li key={movieName.id}>
    <h2>{movieName.name}</h2>
	<p>Liked By:</p>
  	<UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
	</li>
)
}}

export default MovieCard