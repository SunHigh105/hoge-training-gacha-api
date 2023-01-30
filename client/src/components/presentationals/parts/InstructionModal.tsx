import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

export const InstructionModal = ({
  isModalOpen = false,
  handleModalOpen = () => {}
}) => (
  <Modal
    onClose={handleModalOpen}
    onOpen={handleModalOpen}
    open={isModalOpen}
    trigger={
      <Icon name='question circle outline' />
    }
  >
    <Modal.Header>About Home Training Gacha</Modal.Header>
    <Modal.Content>
      説明だよ
    </Modal.Content>
  </Modal>
);
