package com.ihub.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Long>
{

}
