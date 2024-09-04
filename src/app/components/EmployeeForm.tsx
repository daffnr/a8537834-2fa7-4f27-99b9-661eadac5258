import React, { useState } from 'react';
import { Employee } from '@/app/types/employee';

interface EmployeeFormProps {
  initialData?: Employee;
  onSubmit: (data: Employee) => void;
  onCancel: () => void;
}

export default function EmployeeForm({ initialData, onSubmit, onCancel }: EmployeeFormProps) {
  const [formData, setFormData] = useState<Employee>(
    initialData || {
      id: 0,
      firstName: '',
      lastName: '',
      position: '',
      phone: '',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
