import React from 'react';
import styles from './friendlist.module.css';
import PropTypes from 'prop-types';

export default function ListItem({ id, isOnline, avatar, name }) {
  return (
    <>
      <li key={id} className={styles.item}>
        <span className={!isOnline ? styles.status : styles.isOnline}>
          {' '}
          {isOnline}{' '}
        </span>{' '}
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}> {name} </p>{' '}
      </li>{' '}
    </>
  );
}

ListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
