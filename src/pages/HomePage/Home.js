import React from 'react';
import {homeObjOne} from './Data';
import InfoSection from '../../components/InfoSection/InfoSection'
import ShortLink from '../../components/ShortLink/ShortLink';

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne}/>
            <ShortLink/>
        </div>
    )
}

export default Home
