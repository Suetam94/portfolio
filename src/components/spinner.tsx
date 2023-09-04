import { Spinner as Spin } from '@phosphor-icons/react';

const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Spin className="animate-spin" fill={'#FFF'} size={50} />
    </div>
  );
};

export default Spinner;
