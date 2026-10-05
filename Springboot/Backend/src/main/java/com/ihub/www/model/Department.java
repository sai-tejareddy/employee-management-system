package com.ihub.www.model;

import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Transactional
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long deptId;
	
	@Column
	private String deptName;
	
	@Column
	private String designation;
}
