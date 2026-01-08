package com.lumiere.product.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "t_products")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    private String id; // Using String to match frontend "1", "2" or UUIDs
    private String name;
    private String category;
    private BigDecimal price;
    private BigDecimal originalPrice;
    @Column(length = 1000)
    private String image;
    @Column(length = 2000)
    private String description;
    private String material;
    private String dimensions;
    private boolean inStock;
    private boolean featured;
    private boolean isNew; // "new" is a reserved keyword in Java

    @ElementCollection
    private List<String> images;

    @ElementCollection
    private List<String> colors;
}
