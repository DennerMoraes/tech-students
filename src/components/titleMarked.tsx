import React from 'react';
import Icon, { IconName } from './icon';

type TitleMarkedProps = {
  text: string;
  highlight: string;
  size?: string;
  icon: IconName;
  position?: string;
  iconMobile?: string;
  iconDesktop?: string;
};

export const TitleMarked: React.FC<TitleMarkedProps> = ({
  text,
  highlight,
  size = "text-[52px]",
  icon,
  position,
  iconMobile,
  iconDesktop, 
}) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <h2 className={`text-blueText ${size} font-roboto font-[700] leading-[1.1] z-10`}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="relative inline-block">
            <span className={`relative z-10 text-blueText ${size} font-roboto font-[700] leading-[1.1]`}>{part}</span>
            <span className={`absolute bottom-0 left-1/2 translate-x-[-50%] z-0 ${position}`}>
              <span className={iconDesktop}><Icon name={icon}/></span>
              <span className={`lg:hidden ${iconMobile}`}><Icon name="strokeMobile"/></span>
            </span>
          </span>
        ) : (
          <span className='relative z-10' key={index}>{part}</span>
        )
      )}
    </h2>
  );
};
