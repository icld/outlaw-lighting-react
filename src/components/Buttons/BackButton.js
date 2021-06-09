import { useHistory } from "react-router-dom";
const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div class="pl-10 pr-10 pt-10 justify-center">
      <button
        class="text-white px-4 w-full md:w-24 h-10  bg-blue-600  rounded-xl hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        onClick={goBack}
      >
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
