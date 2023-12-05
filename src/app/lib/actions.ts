import { RegistrationFieldsValue } from './defining-types';

export async function createUser({
  username,
  email,
  password,
}: RegistrationFieldsValue) {
  return await fetch('/api/auth/registration', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
