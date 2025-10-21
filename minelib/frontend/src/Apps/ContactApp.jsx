import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../Validations/contactSchema';
import './styles/contact.css'

export const ContactApp = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ resolver: yupResolver(contactSchema)});

  const onSubmit = (data) => {
    alert(`Mensaje enviado por ${data.name}`);
    reset();
  }

  return (
    <>
    <section className='contact-form-section'>
      <h2>Envíanos tu mensaje!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <input
          {...register("name")}
          type="text"
          placeholder="Tu nombre"
          className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span
          className="field-error">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <input
          {...register("lastName")}
          type="text"
          placeholder="Tu apellido"
          className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && <span
          className="field-error">{errors.lastName.message}</span>}
        </div>
        <div className="form-group">
          <input
          {...register("email")}
          type="email"
          placeholder="Tu email"
          className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span
          className="field-error">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <textarea
          {...register("message")}
          placeholder="Tu mensaje"
          rows="5"
          className={errors.message ? "input-error" : ""}
          />
          {errors.message && (
          <span className="field-error">{errors.message.message}</span>
          )}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </section>
    </>
  )
}
export default ContactApp





