import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Step5 = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(5);
  }, []);
  return <div></div>;
};

export default Step5;
