import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayParams, Training } from '../../definitions/interfaces';
import { minute } from '../../definitions/types';
import { buildQueryParameter, getTrainigMenus } from '../../services/trainings';
import { Player } from '../presentationals/pages/Player';

export const PlayerContainer: FC<{}> = ({}) => {
  const params = useParams<PlayParams>();
  const minute = (params.minute as unknown) as minute;

  const [menus, setMenus] = useState<Training[]>([]);

  const getTrainingMenu = async () => {
    const query = buildQueryParameter(minute);
    const trainingMenu = await getTrainigMenus(query);

    setMenus(trainingMenu);
  } 

  useEffect(() => {
    getTrainingMenu();
  }, []);

  return (
    <Player
      minute={minute} 
      menus={menus}
    />
  )
}