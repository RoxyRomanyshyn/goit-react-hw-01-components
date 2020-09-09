import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

export default function Profile({
  avatar,
  name,
  tag,
  location,
  follovers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={'user avatar'} className={styles.avatar} />{' '}
        <p className={styles.name}> {name} </p>{' '}
        <p className={styles.tag}> @ {tag} </p>{' '}
        <p className={styles.location}> {location} </p>{' '}
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}> Follovers </span>{' '}
          <span className={styles.quantity}> {follovers} </span>{' '}
        </li>{' '}
        <li className={styles.item}>
          <span className={styles.label}> Visws </span>{' '}
          <span className={styles.quantity}> {views} </span>{' '}
        </li>{' '}
        <li className={styles.item}>
          <span className={styles.label}> Likes </span>{' '}
          <span className={styles.quantity}> {likes} </span>{' '}
        </li>{' '}
      </ul>{' '}
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  follovers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
