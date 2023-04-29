import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {Feed} from '../../../components/templates/Feed';

export function HomeFeedPage() {
  return (
    <Screen header={{title: 'Feed'}}>
      <Feed />
    </Screen>
  );
}
