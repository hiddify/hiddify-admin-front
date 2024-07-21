import { useEffect } from 'react';
import { useActiveStep } from '../../providers/activeStepProvider';

const Home = () => {
  const { setActiveStep } = useActiveStep();

  useEffect(() => {
    setActiveStep(undefined);
  }, []);
  return <div></div>;
};

export default Home;
