import AppointmentRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointments';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const appointment = new Appointment({
      date,
      provider,
    });

    this.appointmentRepository.create(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
