export default function Banner({ inProgress, resolved }) {
  return (
    <div className="my-6 max-w-[1850px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full rounded-xl shadow-2xl">
          <img src="/assets/vector1.png" alt="" />
          <div>
            <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
              In-Progress
            </h2>

            <p className="text-5xl md:text-6xl font-bold text-center">
              {inProgress}
            </p>
          </div>
          <img src="/assets/vector3.png" alt="" />
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 text-white w-full rounded-xl shadow-2xl">
          <img src="/assets/vector1.png" alt="" />
          <div>
            <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
              Resolved
            </h2>
            <p className="text-5xl md:text-6xl font-bold text-center">
              {resolved}
            </p>
          </div>
          <img src="/assets/vector3.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between px-2 max-w-6xl mx-auto">
        <h2 className="text-xl text-bold sm:text-2xl">Customer Tickets</h2>
      </div>
    </div>
  );
}
