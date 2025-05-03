import React from 'react';
import AnimatedCounter from './CounterAnimation';
import Icon, { IconName } from './Icon';

export type CounterItem = {
    number: number;
    desc: string;
    icon: IconName;
    unit?: string;
};

type CounterListProps = {
    items: CounterItem[];
};

const CounterList: React.FC<CounterListProps> = ({ items }) => {
    return (
        <div className='bg-blueText'>
            <div className='mx-auto flex items-center py-10 md:py-20 px-4 max-w-330 flex-wrap justify-center gap-12 lg:gap-0 lg:justify-between'>
                {items.map((item, idx) => (
                    <div key={idx} className='w-[361px] flex flex-col items-center justify-center gap-4'>
                        <Icon name={item.icon} />
                        <AnimatedCounter className='text-[48px] lg:text-[72px] font-[700] leading-[1.1] text-yellow font-roboto' number={item.number} unit={item.unit} />
                        <p className='text-[16px] lg:text-[24px]  leading-[1.6] text-yellow font-roboto font-[400]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CounterList;
