import React from 'react';
import { Icon, Modal } from 'semantic-ui-react';

import '../../../css/InstructionModal.css';

export const InstructionModal = ({
  isModalOpen = false,
  handleModalOpen = () => {}
}) => (
  <Modal
    onClose={handleModalOpen}
    onOpen={handleModalOpen}
    open={isModalOpen}
    trigger={
      <Icon
        className='modal-trigger-icon'
        name='question circle outline'
      />
    }
  >
    <Modal.Header>About Home Training Gacha</Modal.Header>
    <Modal.Content>
      説明だよ
    </Modal.Content>
  </Modal>
);
