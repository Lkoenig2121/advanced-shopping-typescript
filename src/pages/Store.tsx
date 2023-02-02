import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import storeItems from "../data/items.json"

export interface IStoreProps {
}

export function Store (props: IStoreProps) {
  return (
    <div>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}><StoreItem {...item} /></Col>
        ))}
      </Row>
    </div>
  );
}
