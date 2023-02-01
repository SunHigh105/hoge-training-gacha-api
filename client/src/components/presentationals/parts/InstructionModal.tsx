import React from 'react';
import { Header, Icon, List, Modal, Button } from 'semantic-ui-react';

import '../../../css/InstructionModal.css';

export const InstructionModal = ({
  isModalOpen = false,
  handleModalOpen = () => {}
}) => (
  <Modal
    size='small'
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
      <Header>操作説明</Header>
      <p>指定した時間分の宅トレ動画をランダムで選択してくれます。</p>
      <p>（動画の合計時間は、指定した時間と数分の誤差が生じることがあります）</p>
      <p>「筋トレ部位絞り込み」で部位を選択すると、選択した部位の宅トレ動画のヒット率が上がります。</p>
      <p>動画一覧の「Retry」ボタンで何度でも動画を選択し直すことができます。</p>

      <Header>宅トレ動画について</Header>
      <p>宅トレ動画は以下のチャンネルから取得しています。</p>
      <List bulleted>
        <List.Item>
          <a href='https://www.youtube.com/@MarinaTakewaki' target='_blank' rel='noreferrer'>Marina Takewaki</a>
        </List.Item>
        <List.Item>
          <a href='https://www.youtube.com/@noga' target='_blank' rel='noreferrer'>のがちゃんねる/nogachannel</a>
        </List.Item>
      </List>
    </Modal.Content>
    <Modal.Actions>
      <Button color='olive' onClick={handleModalOpen}>
        <Icon name='close' />
        Close
      </Button>
    </Modal.Actions>
  </Modal>
);
