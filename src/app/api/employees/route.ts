// src/app/api/employees/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const employees = await prisma.employee.findMany();
  return NextResponse.json(employees);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newEmployee = await prisma.employee.create({ data });
  return NextResponse.json(newEmployee, { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const { id, ...rest } = data;
  const updatedEmployee = await prisma.employee.update({
    where: { id },
    data: rest,
  });
  return NextResponse.json(updatedEmployee);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.employee.delete({ where: { id } });
  return NextResponse.json({ message: 'Employee deleted' });
}
