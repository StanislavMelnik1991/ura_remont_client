import { Params } from 'features/params';
import { LoginButton } from '_entities/telegram/LoginButton';
import { TGIFrame } from '_entities/telegram/LoginIFrame';

export default function Login() {
  return (
    <div>
      <LoginButton />
      <TGIFrame />
      <Params />
    </div>
  );
}
