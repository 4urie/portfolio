'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTime = new Date('2005-02-06T00:00:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    setIsClient(true);
    tick(); 
   
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Prevent hydration mismatch by only showing dynamic content on client
  if (!isClient) {
    return <span suppressHydrationWarning>19.67</span>;
  }

  return <span suppressHydrationWarning>{age}</span>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 1,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Davao del Norte, Philippines',
  },
];

export default data;
