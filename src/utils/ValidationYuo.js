import { mixed, object, string } from "yup";

let userSchema = object ({
   nombre: string("Nombre debe contener solo letras").required("Nombre es requerido"),
   telefono: mixed().required("Telefono es requerido"),
   email: string().email("Email no tiene el formato correcto").required("Email es requerido")
}) 

const validateFrom = async(dataFrom) => {
    try {
      await userSchema.validate(dataFrom)
      return { status: "success" }
    } catch (error) {
      return { status: "errir", message: error.message }
    }
}

export default validateFrom