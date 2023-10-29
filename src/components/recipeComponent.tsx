export function RecipePage() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-6">
      <h1 className="text-4xl sm:text-6xl font-bold pt-12 p-12">Recipe Name</h1>
      <div className="flex flex-col sm:flex-row justify-evenly p-4 w-full items-center">
        <img
          src="src\img\appetizers-category.jpg"
          className="rounded-3xl shadow-xl w-48 sm:w-72"
          alt=""
        ></img>
        <div className="p-12">
          <p className="font-bold text-xl text-start text-peach">
            ingredients:
          </p>
          <ul>
            <li>* ingredient 1</li>
            <li>* ingredient 2</li>
            <li>* ingredient 3</li>
            <li>* ingredient 4</li>
            <li>* ingredient 5</li>
            <li>* ingredient 6</li>
            <li>* ingredient 7</li>
            <li>* ingredient 8</li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl shadow-xl p-12 flex flex-col gap-8">
        <p className="text-peach text-3xl">Cooking instructions:</p>
        <ul>
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>{" "}
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>{" "}
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>{" "}
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>{" "}
          <li>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default RecipePage;
