import React from 'react';
import styles from './friendlist.module.css';
import ListItem from './FriendListItem';

export default function Friends({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {' '}
      {friends.map(item => (
        <ListItem
          id={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        >
          {' '}
        </ListItem>
      ))}{' '}
    </ul>
  );
}
