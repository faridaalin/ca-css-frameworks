import React from 'react';
import { LinkStyle } from './form.styles'

export default function ItemLink({ children, href }) {
    return (
        <LinkStyle href={href}>
            {children}
        </LinkStyle>
    )
}

