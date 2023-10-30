import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import about3 from "../img/about3.png";
import about4 from "../img/about4.png";
export function About() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-16 gap-40">
      <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-between">
          {" "}
          <img className="w-24 h-24" src={about1}></img>
          <h1 className="sm:text-5xl text-2xl font-bold text-center">
            About Wasafati
          </h1>
        </div>

        <p>
          At our family cooking blog, we believe that the heart of every home is
          the kitchen. It's where we gather, create, and share cherished
          memories with our loved ones. We are delighted to welcome you into our
          virtual kitchen, where we'll share our passion for cooking, delicious
          recipes, and heartwarming stories that revolve around the joy of food.
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row-reverse items-center justify-between">
          {" "}
          <img className="w-24 h-24" src={about2}></img>
          <h1 className="sm:text-5xl text-2xl font-bold text-center">
            What we offer
          </h1>
        </div>

        <p>
          At Wasafati family cooking blog, where the kitchen is our playground
          and food is all about fun! Here, we've got a mouthwatering lineup of
          recipes that'll make your taste buds dance with delight. No
          formalities, just good ol' deliciousness served with a side of love!
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-cbetween">
          {" "}
          <img className="w-24 h-24" src={about3}></img>
          <h1 className="sm:text-5xl text-2xl font-bold text-center">
            Recognition and Appreciation
          </h1>
        </div>

        <p>
          We understand the effort and love that goes into crafting a recipe,
          and we want to recognize your contribution to our community. When your
          recipe is published, we'll credit you as the author, and you'll have
          the satisfaction of knowing that your creation is making its way into
          kitchens around the world.
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row-reverse items-center justify-between">
          {" "}
          <img className="w-24 h-24" src={about4}></img>
          <h1 className="sm:text-5xl text-2xl font-bold text-center">
            Join Our Culinary Adventure
          </h1>
        </div>

        <p>
          So, what are you waiting for? Whether you have a treasured family
          recipe, a delightful dessert, or a savory main course to share, we
          can't wait to feature it on our blog. Join us in our culinary
          adventure, where we embrace the love for food, the spirit of family,
          and the joy of cooking. Together, let's make our kitchen a place where
          everyone can share their culinary creations, celebrate their cooking
          successes, and inspire others to embark on their own gastronomic
          journeys. Happy Cooking and Happy Sharing!
        </p>
        <p>- Wasafati team</p>
      </div>
    </div>
  );
}

export default About;
