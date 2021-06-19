import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import PieChart from '../../components/Graphic'
>>>>>>> 69011b400d8e0e8ddca20be974df792ed34da17e
import Header from '../../components/Header';

import { Wrraper, WrraperContainer } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrraper>
            <Header>{children}</Header>
            <WrraperContainer>
<<<<<<< HEAD
=======
                <PieChart />
>>>>>>> 69011b400d8e0e8ddca20be974df792ed34da17e
            </WrraperContainer>
        </Wrraper>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};