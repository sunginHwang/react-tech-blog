import cn from './PlaceHolderBar.scss';
import React from "react";

export default ({
                    width = '20rem',
                    height = '2rem',
                }) => <div className={cn.placeHolderBar} style={{width, height}}/>

