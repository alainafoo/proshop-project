import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
// import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/message';
import Loader from '../components/loader';

import {
    useDeliverOrderMutation,
    useGetOrderDetailsQuery,
    useGetPaypalClientIdQuery,
    usePayOrderMutation,
  } from '../slices/ordersApiSlice';

const OrderScreen = () => {

    const { id: orderId } = useParams()

    const {
        data: order,
        refetch,
        isLoading,
        error,
      } = useGetOrderDetailsQuery(orderId);
 

    return isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'/>
        ) : (
        <>
        <h1>Order {order._id}</h1>
            <Row>
                <Col md={8}>
                <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
            </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}> Column</Col>
            </Row>
        </>
    )
}

export default OrderScreen