import React, {FC, useState} from "react";

import { PartSelection } from '../presentationals/parts/PartSelection';

export const PartSelectionContainer: FC<{}> = ({

}) => {
  const [isPartSelectionOpen, setIsPartSelectionOpen] = useState<boolean>(false);

  const handlePartSelection = () => {
    setIsPartSelectionOpen(!isPartSelectionOpen);
  }

  return (
    <PartSelection
      isPartSelectionOpen={isPartSelectionOpen}
      handlePartSelection={handlePartSelection}
    />
  )
};
