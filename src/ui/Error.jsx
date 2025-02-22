import LinkButton from '@/ui/LinkButton';
import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="py-8 text-center">
      <h1>Something went wrong 😢</h1>
      <p className="p-2 font-medium">{error.data || error.message}</p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
