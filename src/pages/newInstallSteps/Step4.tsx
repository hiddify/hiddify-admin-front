import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Step4 = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(4);
  }, []);
  return <div></div>;
};

export default Step4;
