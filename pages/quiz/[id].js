/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno, projectName, githubUser }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
        projectName={projectName}
        githubUser={githubUser}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((responseServer) => {
        if (responseServer.ok) {
          return responseServer.json();
        }

        throw new Error('Falha em obter os dados');
      })
      .then((responseConvertedObject) => responseConvertedObject);
      // .catch((err) => {
      //  console.log(err);
      // });

    return {
      props: {
        dbExterno,
        projectName,
        githubUser,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
