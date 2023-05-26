import Button from "../Button";

const ObservationsTextArea = ({ obsText, handleOnChangeObsArea }) => {
  return (
    <>
      <div className="flex flex-col bg-white shadow-2xl rounded-xl w-48 md:w-96 p-2">
        <h1 className="font-bold text-blue-800 text-lg md:text-xl">
          Observações:
        </h1>
        <textarea
          name="observations"
          placeholder="Faça suas anotações sobre o pokemon!"
          rows="6"
          cols="35"
          maxLength="200"
          className="my-2 md:p-2 p-1 border"
          onChange={handleOnChangeObsArea}
          value={obsText}
        ></textarea>
        <div className="w-full flex flex-col items-end">
          <span className="flex items-end text-blue-800">
            {obsText.length}/200
          </span>
        </div>
      </div>

      <div className="w-48 md:w-96 my-8 flex items-center justify-end">
        <Button text="Capturar" />
      </div>
    </>
  );
};

export default ObservationsTextArea;
