import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayParams, Training } from '../../definitions/interfaces';
import { minute, muscle } from '../../definitions/types';
import { buildQueryParameter, getTrainigMenus } from '../../services/trainings';
import { Player } from '../presentationals/pages/Player';
import { Loading } from '../presentationals/parts/Loading';

export const PlayerContainer: FC<{}> = ({}) => {
  const params = useParams<PlayParams>();
  const minute = (params.minute as unknown) as minute;
  const muscle = params.muscle
   ? params.muscle.split(',') as muscle[]
   : [];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menus, setMenus] = useState<Training[]>([]);
  const [totalMinute, setTotalMinute] = useState<Number>(0);

  const getTrainingMenu = async () => {
    setIsLoading(true);
    
    const query = buildQueryParameter(minute, muscle);
    const trainingMenu = await getTrainigMenus(query);

    setTotalMinute(trainingMenu.totalMinute);

    setMenus(trainingMenu.trainings);

    setIsLoading(false);
  };

  const handleRetryButton = () => {
    getTrainingMenu();
  };

  useEffect(() => {
    getTrainingMenu();
  }, []);

  // TODO: Error Handling
  return isLoading 
    ? <Loading />
    : <Player totalMinute={totalMinute} menus={menus} handleRetryButton={handleRetryButton}/>
}