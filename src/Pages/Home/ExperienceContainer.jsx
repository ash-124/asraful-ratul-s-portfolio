import React from 'react';
import MyIntrests from './AboutContainer/MyIntrests';

const ExperienceContainer = () => {
    return (
        <div className='flex flex-col gap-6'>
            <MyIntrests title={'Contact'} description={['Dhaka Bangladesh', 'asrafulratul888@gmail.com', +8801407382973]} />
            <MyIntrests title={'Years Of Experience'} description={[1]} />
            <MyIntrests title={'Projects Done'} description={[" 3 +" ]}/>
        </div>
    );
};

export default ExperienceContainer;