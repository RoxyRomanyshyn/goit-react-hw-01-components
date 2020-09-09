import React from 'react';
import PropTypes from 'prop-types';
import styled from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styled.statistics}>
      <h2 className={styled.title}> {title} </h2>{' '}
      <ul className={styled['stat-list']}>
        {' '}
        {stats.map(item => (
          <li key={item.id} className={styled.item}>
            <span className={styled.label}> {item.label} </span>{' '}
            <span className={styled.percentage}> {item.percentage} % </span>{' '}
          </li>
        ))}{' '}
      </ul>{' '}
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
