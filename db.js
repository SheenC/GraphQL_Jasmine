const doctors =[{
  doctor_id: "doctor1",
  name: "Lucy",
  clinic: "Nice Care Clinic",
  specialty: "General",
  timeslots: ["0930", "1130"],
 },]
const patients = [{
  patient_id: "patient1",
  name: "Paul",
},{
  patient_id: "patient2",
  name: "Mike",
}]
const appointments = [{
  appointment_id: "appointment1",
  time: "1000",
  doctor_id: "doctor1",
  patient_id: "patient1",
 },{
  appointment_id: "appointment2",
  time: "1030",
  doctor_id: "doctor1",
  patient_id: "patient2",
 },]

export {
  doctors,
  patients,
  appointments
}