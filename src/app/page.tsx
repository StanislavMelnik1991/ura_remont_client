import { validateAuth } from 'features/auth';
import { adminClientRouter } from 'shared/routes/adminClient';

export default async function Home() {
  const successUrl = adminClientRouter.admin.baseRoute;
  await validateAuth({ successUrl });
  return <div />;
}
