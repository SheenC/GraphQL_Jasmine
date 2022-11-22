const doctors =[{
  doctor_id: "doctor001",
  name: "Lucy",
  clinic: "Nice Care Clinic",
  specialty: "General",
  timeslots: ["0930", "1130"],
 },]
const patients = [{
  patient_id: "patient001",
  name: "Paul",
},]
const appointments = [{
  appointment_id: "appointment001",
  time: "1000",
  doctor_id: "doctor001",
  patient_id: "patient001",
 },]

export {
  doctors,
  patients,
  appointments
}