package com.lumiere.order.service;

import com.lumiere.order.entity.Order;
import com.lumiere.order.entity.OrderStatus;
import com.lumiere.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;

    public void placeOrder(Order order) {
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setStatus(OrderStatus.PENDING);
        order.setOrderDate(java.time.LocalDateTime.now());
        orderRepository.save(order);
        log.info("Order placed successfully: {}", order.getOrderNumber());
    }

    public List<Order> getOrdersByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }
}
