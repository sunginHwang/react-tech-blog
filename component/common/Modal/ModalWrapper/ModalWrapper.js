import React from 'react';
import cn from'./ModalWrapper.scss';

const ModalWrapper = ({
    visible,
    modalClick,
    children
}) => {
  return (
      visible &&
            <div className={cn.ModalWrapper} onClick={()=>modalClick}>
                    {children}
            </div>

  );
};

export default ModalWrapper;

