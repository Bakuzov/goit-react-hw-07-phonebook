import { Bars } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export const Loader = () => {
  return (
    <Div>
      <Bars
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Div>
  );
};
