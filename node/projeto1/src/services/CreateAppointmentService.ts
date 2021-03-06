import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/** Recebimento das informações
 * Tratativa de erros e excessões
 * Acesso ao repositories  */
interface RequestDTO {
  provider: string;
  date: Date;
}

// SOLID
// Single Responsability Principle
// Dependency Invertion Principle

class CreateAppointmentServices {
  /* Dependency Inversion SOLID */
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointment {
    // Transformanda data informada para data inicial
    const appointmentDate = startOfHour(date);

    // Validando se já existe agendamento na data passada
    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentServices;
