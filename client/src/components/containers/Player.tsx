import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayParams, Training } from '../../definitions/interfaces';
import { minute } from '../../definitions/types';
import { buildQueryParameter, getTrainigMenus } from '../../services/trainings';
import { Player } from '../presentationals/pages/Player';
import { Loading } from '../presentationals/parts/Loading';

export const PlayerContainer: FC<{}> = ({}) => {
  const params = useParams<PlayParams>();
  const minute = (params.minute as unknown) as minute;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menus, setMenus] = useState<Training[]>([]);

  const getTrainingMenu = async () => {
    setIsLoading(true);
    
    const query = buildQueryParameter(minute);
    const trainingMenu = await getTrainigMenus(query);

    setMenus(trainingMenu);

    setIsLoading(false);
  };

  const handleRetryButton = () => {
    getTrainingMenu();
  };

  useEffect(() => {
    getTrainingMenu();
  }, []);

  return isLoading ? <Loading /> : <Player minute={minute} menus={menus} handleRetryButton={handleRetryButton}/>
}