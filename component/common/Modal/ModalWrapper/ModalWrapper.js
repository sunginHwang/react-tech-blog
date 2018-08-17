import React from 'react';
import style from'./ModalWrapper.scss';

const ModalWrapper = ({
    visible,
    children
}) => {
  return (
      visible &&
            <div className={style.ModalWrapper}>
                    {children}
            </div>

  );
};

export default ModalWrapper;

