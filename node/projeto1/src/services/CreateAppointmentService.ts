import Appointment from '../models/Appointment';

/** Recebimento das informações
 * Tratativa de erros e excessões
 * Acesso ao repositories  */
interface RequestDTO {
  date: Date;
  provider: string;
}

class CreateAppointmentServices {
  public execute({ date, provider }: RequestDTO): Appointment {
    // Transformanda data informada para data inicial
    const appointmentDate = startOfHour(date);

    // Validando se já existe agendamento na data passada
    const findAppointmentInSameDate = appointmentRepository.findByDate(
      parsedDate,
    );

    if (findAppointmentInSameDate) {
      return response
        .status(400)
        .json({ message: 'This appointment is already booked' });
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentServices;
