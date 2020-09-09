import React from 'react';

import { PageTitle } from './pageHeader.style';

export default function PageHeader({ children, className}) {
    return (
        <PageTitle className={className} >{children}</PageTitle>
    )
}
