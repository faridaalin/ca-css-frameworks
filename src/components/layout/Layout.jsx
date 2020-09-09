import React from 'react';
import Container from 'react-bootstrap/Container'

export default function Layout({children}) {
    return (
        <Container className="px-4">
            {children}
        </Container>
    )
}
