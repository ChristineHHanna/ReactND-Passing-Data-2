import React, {Component} from 'react'
import MovieCard from'./moviesList'

class Dashboard extends Component {
 render() {
   
   const {likedByUser, users, movies } = this.props;
   
   const movieCards = Object.keys(movies).map(id => (
     <MovieCard
     key={id}
     users={users}
     usersWhoLikedMovie={likedByUser[id]}
     movieName={movies[id]}
     />
));
return <ul>{movieCards}</ul>;
}}

export default Dashboard;