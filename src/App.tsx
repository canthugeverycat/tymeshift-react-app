import React, { useEffect, useState } from 'react';

import { GlobalStyles } from './styleUtils/global.styles';
import Container from './components/Container';
import Separator from './components/Separator';
import Text from './components/Text';
import Card from './components/Card';
import Modal from './components/Modal';
import { Location } from './types';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(
        null
    );

    const openModal = (data: Location) => {
        setShowModal(true);
        setSelectedLocation(data);
    };

    useEffect(() => {
        const url = 'https://6033c4d8843b15001793194e.mockapi.io/api/locations';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data: Location[] = await response.json();
                setLocations(data);
            } catch (error) {
                console.error('Error while fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
      <>
        <GlobalStyles />

        <Modal
          show={showModal}
          setShowModal={setShowModal}
          data={selectedLocation}
        />

        <Container direction="column" padding="20px 30px">
          <Text color="lightText" weight="700" margin="0 0 12px 0">
            All locations
          </Text>
          <Text size="extraLarge" weight="600">
            Fake locations
          </Text>
        </Container>

        <Separator />

        <Container padding="12.5px 0 12.5px 47.5px">
          {locations.map((location) => (
            <Card
              key={location.id}
              data={location}
              handleOpenModal={openModal}
            />
          ))}
        </Container>
      </>
    );
};

export default App;
