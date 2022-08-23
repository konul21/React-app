import { object, string, number, } from 'yup';

let userSchema = object({
  email: string().email('duzgun bir email daixl edin').required('Doldurun'),
  password: number('sifre reqemlerden ibaret olsun').required('Doldurun').positive('sifre musbet reqemlerden ibaret olsun').integer('sifre tam ededler ibaret olsun'),
});

export default userSchema