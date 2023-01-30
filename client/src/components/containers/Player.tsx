import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayParams, Training } from '../../definitions/interfaces';
import { minute, muscle } from '../../definitions/types';
import { buildQueryParameter, getTrainigMenus } from '../../services/trainings';
import { Player } from '../presentationals/pages/Player';
import { Loading } from '../presentationals/parts/Loading';
import { Error } from '../presentationals/pages/Error';

export const PlayerContainer: FC<{}> = ({}) => {
  const params = useParams<PlayParams>();
  const minute = (params.minute as unknown) as minute;
  const muscle = params.muscle
   ? params.muscle.split(',') as muscle[]
   : [];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menus, setMenus] = useState<Training[]>([]);
  const [totalMinute, setTotalMinute] = useState<Number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const getTrainingMenu = async () => {
    setIsLoading(true);
    
    const query = buildQueryParameter(minute, muscle);
    const res = await getTrainigMenus(query);
    if (res.isSucceed) {
      setTotalMinute(res.data.totalMinute);
      setMenus(res.data.trainings);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    setIsError(true);
  };

  const handleRetryButton = () => {
    getTrainingMenu();
  };

  useEffect(() => {
    getTrainingMenu();
  }, []);

  if (isLoading) return <Loading />;
  return isError 
    ? <Error />
    : <Player totalMinute={totalMinute} menus={menus} handleRetryButton={handleRetryButton}/>
}