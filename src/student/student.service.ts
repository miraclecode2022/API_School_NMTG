import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async students(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async student(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lassName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lassName,
    });

    return this.studentRepository.save(student);
  }
}
