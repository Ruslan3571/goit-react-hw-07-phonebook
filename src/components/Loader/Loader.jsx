import s from '../Loader/Loader.module.css';

const { ThreeDots } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <div className={s.loader}>
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
