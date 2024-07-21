import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Step7 = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(7);
  }, []);
  return <div></div>;
};

export default Step7;
