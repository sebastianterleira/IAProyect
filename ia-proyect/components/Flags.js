
import { FlagIcon } from 'react-flag-kit';

const Flags = ({ country }) => {
  return (
    <div>
      <FlagIcon code={country} size={24} />
    </div>
  );
};


export default Flags;
