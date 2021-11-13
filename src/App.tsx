import React from 'react';

import { GlobalStyles } from './utils/global.styles';
import Container from './components/Container/styles';
import Separator from './components/Separator/styles';
import Text from './components/Text/styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Container direction="column" padding="20px 30px" >
        <Text color="grey" weight="bold">All locations</Text>
        <Text size="extraLarge" weight="semibold">Acme locations</Text>
      </Container>

      <Separator />
    </>
  );
}

export default App;
