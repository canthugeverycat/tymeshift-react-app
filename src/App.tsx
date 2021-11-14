import React from 'react';

import { GlobalStyles } from './utils/global.styles';
import Container from './components/Container/styles';
import Separator from './components/Separator/styles';
import Text from './components/Text/styles';
import Card from './components/Card/styles';
import data from './mock/data';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Container direction="column" padding="20px 30px" >
        <Text color="lightText" weight="700" margin="0 0 12px 0">All locations</Text>
        <Text size="extraLarge" weight="600">Acme locations</Text>
      </Container>

      <Separator />

      <Container padding="12.5px 0 12.5px 47.5px">
        {data.map((location) => (
          <Card key={location.id} data={location} />
        ))}
      </Container>
    </>
  );
}

export default App;
