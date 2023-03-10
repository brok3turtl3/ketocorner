import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Message';

import { getOrderList, deliverOrder } from '../actions/orderActions';
import { ORDER_DELIVER_RESET } from '../constants/orderConstants';

const OrderListScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders } = orderList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {loading:loadingDeliver, error:errorDeliver, success:successDeliver} = orderDeliver

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(getOrderList());
		} else {
			navigate('/login');
		}

		if(successDeliver){
		dispatch({type: ORDER_DELIVER_RESET})
	}
	}, [dispatch, navigate, userInfo, successDeliver]);

  const deliverHandler = (id) => {
dispatch(deliverOrder(id))
  }

	

	return (
		<>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table striped bordered hover responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>USER</th>
							<th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
							<th>DELIVERED</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0,10)}</td>
                <td>${order.totalPrice}</td>

								<td>
									{order.isPaid ? (
										order.paidAt.substring(0,10)
									) : (
										<i className='fas fa-times' style={{ color: 'red' }}></i>
									)}
								</td>
								<td>
									{order.isDelivered ? (
										order.deliveredAt.substring(0,10)
									) : (
										<i className='fas fa-times' style={{ color: 'red' }}></i>
									)}
								</td>
								<td><LinkContainer to={`/orders/${order._id}`}>
                  <Button variant='light' className='btn-sm'>Details</Button>
                  </LinkContainer>
                  {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered &&
                  <Button variant='light' className='btn-sm' onClick={() => deliverHandler(order._id)}>Delivered</Button>}
                  
                  
                  </td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default OrderListScreen;
