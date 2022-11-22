// Resolvers define how to fetch the types defined in your schema.
import * as db from './db.js';
import { v4 as uuidv4 } from 'uuid';

const Doctor = {
    appointments: (doctor) => db.appointments.filter(a => a.doctor_id === doctor.doctor_id),
}

const Patient = {
    appointments: (patient) => db.appointments.filter(a => a.patient_id === patient.patient_id),
}

const Query = {
    doctors: () => db.doctors,
    doctorNameById: (root, args, context, info) => {
        const doctor = db.doctors.filter(d => d.doctor_id === args.doctor_id)
        return doctor[0].name
    },
    doctorClinicById: (root, args, context, info) => {
        const doctor = db.doctors.filter(d => d.doctor_id === args.doctor_id)
        return doctor[0].clinic
    },
    doctorSpecialtyById: (root, args, context, info) => {
        const doctor = db.doctors.filter(d => d.doctor_id === args.doctor_id)
        return doctor[0].specialty
    },
    doctorTimeslotsById: (root, args, context, info) => {
        const doctor = db.doctors.filter(d => d.doctor_id === args.doctor_id)
        return doctor[0].timeslots
    }
}
 
const Mutation = {
    addAppointment: (root, args, context, info) => {
        const appoint_id = uuidv4()
        db.appointments.push({
            appointment_id: appoint_id,
            time: args.time,
            doctor_id: args.doctor_id,
            patient_id: args.patient_id,
        })
        console.log(db.appointments)
        return db.appointments[db.appointments.length - 1].appointment_id
    },
    cancelAppointment : (root, args, context, info) => {
        let cancel_id = 0
        for (let i = 0; i < db.appointments.length; i++) {
            if (db.appointments[i].appointment_id === args.appointment_id) {
                cancel_id = db.appointments[i].appointment_id
                db.appointments.splice(i, 1)
            }
        }
        console.log(db.appointments)
        return cancel_id
    },
    updatePatient: (root, args, context, info) => {
        let update_id = 0
        for (let i = 0; i < db.appointments.length; i++) {
            if (db.appointments[i].appointment_id === args.appointment_id) {
                update_id = db.appointments[i].appointment_id
                let p = db.appointments[i].patient_id
                for (let j = 0; j < db.patients.length; j++) {
                    if (db.patients[j].patient_id === p) {
                        db.patients[j].name = args.name
                    }
                }
            }
        }
        console.log(db.appointments)
        console.log(db.patients)
        return update_id
    }
}


export {
    Doctor,
    Patient,
    Query,
    Mutation
}
