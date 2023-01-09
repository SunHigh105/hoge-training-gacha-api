import React, { useState, useEffect, FC } from 'react';
import { App } from './components/presentationals/App';

export const AppContainer: FC =() => {
  const [user, setUser] = useState({ user_id: '', name: '' });

  // ログイン済みか判定
  // 第二引数に[getUser]を設定すると何度もgetUserInfo()が実行されてしまう
  useEffect(() => {
    // getUserInfo();
  }, []);
  
  return (
    <App />
  );
}
