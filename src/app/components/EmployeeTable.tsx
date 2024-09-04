import React from 'react';
import { Employee } from '@/app/types/employee';

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export default function EmployeeTable({ employees, onEdit, onDelete }: EmployeeTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.position}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>
              <button onClick={() => onEdit(employee)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
