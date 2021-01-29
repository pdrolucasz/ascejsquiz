/* eslint-disable linebreak-style */
import React from 'react';
import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <img
          src="https://pa1.narvii.com/6299/5c8153cae6a8115c0bda889a2670dbbbf7fff04a_hq.gif"
          alt="loading"
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
