import { PacienteModel } from "./pacient.module";

export interface InfoMedicaModule{
    alergia: boolean;
    discapacionas: boolean;
    etnia:string;
    cirugias: boolean;
    paciente: PacienteModel
}