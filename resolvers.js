// Resolvers define how to fetch the types defined in your schema.
import * as db from './db.js';
 
const Query = {
    doctors: () => db.doctors,
    doctorById: (root, args, context, info) => db.doctors.filter(d => d.doctor_id === args.doctor_id),
}
 
const Doctor = {
    appointments: (doctor) => db.appointments.filter(a => a.doctor_id === doctor.doctor_id),
}

const Patient = {
    appointments: (patient) => db.appointments.filter(a => a.patient_id === patient.patient_id),
}

export {
    Query,
    Doctor,
    Patient
}
