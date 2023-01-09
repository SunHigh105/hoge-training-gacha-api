import React, { FC, useEffect, useState } from "react";
import { Home } from "../presentationals/pages/Home";

import { getTrainigMenus } from "../../services/trainings";

export const HomeContainer: FC = () => {
  const [menus, setMenus] = useState<[]>([]);

  const getMenus = async () => {
    const response = await getTrainigMenus();
    setMenus(() => response);
  }

  useEffect(() => {
    getMenus();
  }, []);

  console.log(menus);

  return <Home />;
};
