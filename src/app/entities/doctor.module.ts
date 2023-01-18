import { EspecialidadModule } from "./especialidad.module";

export interface DoctorModule{
    id_doctor: number;
    nombre_doctor: string;
    apellidos_doctor: string;
    correo_doctor:string;
    direccion:string;
    especialidad : EspecialidadModule;
}