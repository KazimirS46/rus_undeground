type Props = {
  name: string;
  email: string;
  password: string;
};

export async function createUser({ name, email, password }: Props) {
  return await fetch('/api/auth/registration', {
    method: 'POST',
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
