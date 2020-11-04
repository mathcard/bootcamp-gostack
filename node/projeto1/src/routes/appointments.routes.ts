import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointment = appointmentRepository.all();
  return response.json(appointment);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = parseISO(date);

  const appointmentDate = startOfHour(parsedDate);

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

  return response.json(appointment);
});

export default appointmentsRouter;
