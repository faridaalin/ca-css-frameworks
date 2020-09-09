import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

export default function ContactListGroup({ children, className}) {
    return (
        <ListGroup.Item className={className}>
            {children}
      </ListGroup.Item>
    )
}
