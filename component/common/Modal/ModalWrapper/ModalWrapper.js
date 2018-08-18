import React from 'react';
import style from'./ModalWrapper.scss';

const ModalWrapper = ({
    visible,
    modalClick,
    children
}) => {
  return (
      visible &&
            <div className={style.ModalWrapper} onClick={()=>modalClick}>
                    {children}
            </div>

  );
};

export default ModalWrapper;

