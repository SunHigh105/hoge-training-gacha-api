import React, {useState} from "react";
import { muscle } from "../../definitions/types";
import { Home } from "../presentationals/pages/Home";

export const HomeContainer = () => {
  const [isPartSelectionOpen, setIsPartSelectionOpen] = useState<boolean>(false);
  const [muscleCondition, setMuscleCondition] = useState<Array<muscle>>([]); 

  const handlePartSelection = () => {
    setIsPartSelectionOpen(!isPartSelectionOpen);
  }

  const handleCheckbox = (e: React.FormEvent<HTMLInputElement>, data: any) => {
    const value = data.value;
    
    data.checked
      ? setMuscleCondition(condition => ([...condition, value]))
      : setMuscleCondition(condition => (condition.filter(c => c !== value)));
  }

  return (
    <Home
      isPartSelectionOpen={isPartSelectionOpen}
      handlePartSelection={handlePartSelection}
      handleCheckbox={handleCheckbox}
      muscleCondition={muscleCondition}
    />
  );
};
