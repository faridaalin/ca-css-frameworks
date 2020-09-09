import React from 'react';
import StyledParagraph from './paragraph.styles'

export default function Paragraph({ children }) {
    return (
        <StyledParagraph>{children}</StyledParagraph>
    )
}
