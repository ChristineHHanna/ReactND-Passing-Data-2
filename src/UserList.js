import React, {Component} from 'react'

class UserList extends Component {
 render () {
   
   const {users, usersWhoLikedMovie} = this.props;
   
   if(!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
     return <p> None of the current users liked this movie.</p>;
   } 
  const movieItems = usersWhoLikedMovie.map(id => (
    <li key={id}>
    <p>{users[id].name}</p>
    </li>
));

return <ul>{movieItems}</ul>
}}

export default UserList