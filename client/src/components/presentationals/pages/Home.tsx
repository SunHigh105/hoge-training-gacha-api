import React, {FC} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Header, Container, Button } from 'semantic-ui-react';

import { MINUTES, COLOR_PER_MINUTE } from '../../../definitions/constants';

import { PartSelection } from '../parts/PartSelection';

import '../../../css/Home.css';
import { muscle } from '../../../definitions/types';

export const Home: FC<{
  isPartSelectionOpen: boolean,
  handlePartSelection: () => void,
  handleCheckbox: (e: React.FormEvent<HTMLInputElement>, data: any) => void,
  muscleCondition: Array<muscle>
}> = ({
  isPartSelectionOpen = false,
  handlePartSelection = () => {},
  handleCheckbox = () => {},
  muscleCondition = []
}) => (
  <div>
    <Header as='h1' textAlign='center'>Select Training Time</Header>
    <Container>
      <div className='home-container'>
      <div className='home-part-selection-wrapper'>
        <PartSelection
          isPartSelectionOpen={isPartSelectionOpen}
          handlePartSelection={handlePartSelection}
          handleCheckbox={handleCheckbox}
        />
      </div>
        {MINUTES.map((minute, index) => (
          <div className='home-button-wrapper' key={minute}>
            <Button fluid 
              color={COLOR_PER_MINUTE[index]}
              size='huge'
              as={Link}
              to={muscleCondition.length >= 1
                ? `/player/minute/${minute}/muscle/${muscleCondition.join(',')}`
                : `/player/minute/${minute}`
              }
            >
              {`${minute} min`}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
