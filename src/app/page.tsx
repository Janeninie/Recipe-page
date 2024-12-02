import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen sm:p-20 bg-stone-100">
      <section className="sm:max-w-screen-md mx-auto flex flex-col sm:gap-10 bg-white rounded-3xl p-10">
        <div>
          <Image
            src={"/images/image-omelette.jpeg"}
            width={800}
            height={600}
            alt="omelette"
            className="rounded-2xl w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="sm:text-4xl font-young text-stone-900">
            Simple omelette recipe
          </div>
          <div className="text-paragraph text-stone-600">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </div>
        </div>

        <div className="sm:p-6 rounded-xl flex flex-col sm:gap-1 w-full bg-rose-50">
          <div className="text-xl font-semibold text-rose-800 mb-1">
            Preparation time
          </div>
          <li>
            <span className="font-semibold text-brown-800 pl-2">Total:</span>{" "}
            Approximately 10 minutes
          </li>
          <li>
            <span className="font-semibold text-brown-800 pl-2">
              Preparation:
            </span>{" "}
            5 minutes
          </li>
          <li>
            <span className="font-semibold text-brown-800 pl-2">Cooking:</span>{" "}
            5 minutes
          </li>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-young text-brown-800 ">Ingredients</div>
          <ul className="flex flex-col gap-1 text-stone-600 list-disc list-inside">
            <li>
              <span className="pl-2">2-3 large eggs</span>
            </li>
            <li>
              <span className="pl-2">Salt, to taste</span>
            </li>
            <li>
              <span className="pl-2">Pepper, to taste</span>
            </li>
            <li>
              <span className="pl-2">1 tablespoon of butter or oil</span>
            </li>
            <li>
              <span className="pl-2">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </div>
        <hr className="border-b-1 border-stone-150" />
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-young text-brown-800">Instructions</div>
          <div className="flex flex-col gap-2 text-stone-600">
            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">1.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Beat the eggs:</span> In a
                bowl, beat the eggs with a pinch of salt and pepper until they
                are well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </div>
            </div>

            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">2.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </div>
            </div>

            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">3.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Cook the omelette:</span> Once
                the butter is melted and bubbling, pour in the eggs. Tilt the
                pan to ensure the eggs evenly coat the surface.
              </div>
            </div>

            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">4.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Add fillings (optional):</span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </div>
            </div>

            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">5.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </div>
            </div>

            <div className="flex">
              <div className="w-[7%] pl-2 font-semibold">6.</div>
              <div className="w-[93%]">
                <span className=" font-semibold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </div>
            </div>
          </div>
        </div>
        <hr className="border-b-1 border-stone-150" />
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-young text-brown-800">Nutrition</div>
          <div className="text-stone-600">
            The table below shows nutritional values per serving without the
            additional fillings.
          </div>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="pl-8 text-stone-600">Calories</div>
            <div className="font-bold text-brown-800">277kcal</div>
            <hr className="col-span-2 border-b-1 border-stone-150" />
            <div className="pl-8 text-stone-600">Carbs</div>
            <div className="font-bold text-brown-800">0g</div>
            <hr className="col-span-2 border-b-1 border-stone-150" />
            <div className="pl-8 text-stone-600">Protein</div>
            <div className="font-bold text-brown-800">20g</div>
            <hr className="col-span-2 border-b-1 border-stone-150" />
            <div className="pl-8 text-stone-600">Fat</div>
            <div className="font-bold text-brown-800">22g</div>
            <hr className="col-span-2 border-b-1 border-stone-150" />
          </div>
        </div>
      </section>
    </main>
  );
}
