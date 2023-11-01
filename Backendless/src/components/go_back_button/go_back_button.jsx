import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="w-11 text-lg font-semibold hover:border-b-2 border-blue-200 hover:text-blue-200  duration-150"
    >
      Reset
    </button>
  );
}

export { GoBackButton };
