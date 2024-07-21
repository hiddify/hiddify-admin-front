import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Step3 = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(3);
  }, []);
  return <div></div>;
};

export default Step3;
