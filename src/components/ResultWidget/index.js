/* eslint-disable linebreak-style */
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import BackLinkArrow from '../BackLinkArrow';
import Widget from '../Widget';
import { ProgressCircle } from '../ProgressCircle';

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;
  // eslint-disable-next-line no-mixed-operators
  const percents = results.filter((x) => x).length / results.length * 100;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    whileHover: { scale: 1.2 },
  };

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.6 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        Resultado
      </Widget.Header>

      <Widget.Content>
        <ProgressCircle percents={percents} />
      </Widget.Content>

      <Widget.Content
        as={motion.div}
        transition={{ delay: 0.5, duration: 0.6 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '100%' },
        }}
        initial="hidden"
        animate="show"
      >

        <p>
          Mandou bem,
          {' '}
          {name}
          !
        </p>
        <h1>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </h1>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {results.map((result, index) => (
            <motion.li
              variants={item}
              key={`result__${result}`}
              style={{ background: result === true ? '#4CAF50' : '#FF5722' }}
              whileHover={item.whileHover}
            >
              {index + 1}
            </motion.li>
          ))}
        </motion.ul>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.bool.isRequired,
  ).isRequired,
};

export default ResultWidget;
