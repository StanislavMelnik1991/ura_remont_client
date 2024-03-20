import { Params } from 'features/params';
import { LoginButton } from '_entities/telegram/LoginButton';

export default function Login() {
  return (
    <div>
      <LoginButton />
      <Params />
    </div>
  );
}
