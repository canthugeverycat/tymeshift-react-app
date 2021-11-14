import React, { useState } from 'react';

import { GlobalStyles } from './utils/global.styles';
import Container from './components/Container/styles';
import Separator from './components/Separator/styles';
import Text from './components/Text/styles';
import Card from './components/Card/styles';
import { Modal } from './components/Modal/styles';
import { data, Location } from './mock/data';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const openModal = (data: Location) => {
    setShowModal(prev => !prev)
    setSelectedLocation(data);
  };

  return (
    <>
      <GlobalStyles />

      <Modal show={showModal} setShowModal={setShowModal} data={selectedLocation} />

      <Container direction="column" padding="20px 30px" >
        <Text color="lightText" weight="700" margin="0 0 12px 0">All locations</Text>
        <Text size="extraLarge" weight="600">Fake locations</Text>
      </Container>

      <Separator />

      <Container padding="12.5px 0 12.5px 47.5px">
        {data.map((location) => (
          <Card key={location.id} data={location} onEditClick={openModal} />
        ))}
      </Container>
    </>
  );
}

export default App;
