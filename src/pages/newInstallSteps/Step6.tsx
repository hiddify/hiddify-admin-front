import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Step6 = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(6);
  }, []);
  return <div></div>;
};

export default Step6;
