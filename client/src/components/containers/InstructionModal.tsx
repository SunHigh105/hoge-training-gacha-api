import React, { useState } from 'react';
import { InstructionModal } from '../presentationals/parts/InstructionModal';

export const InstructionModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  return <InstructionModal isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} />
};
