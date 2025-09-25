import { toast } from "react-toastify";
import { FaCalendarAlt } from "react-icons/fa";

export default function TicketCard({ ticket, addToTask }) {
  const statusColor = {
    Open: "bg-green-100 text-green-800",
    Closed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  const handleClick = () => {
    addToTask(ticket);
    toast.success(`${ticket.title} added to Task Status`);
  };

  return (
    <div
      className="bg-white rounded-lg p-4 sm:p-5 shadow-md relative w-full max-w-md mx-auto cursor-pointer
                 hover:bg-[#e0ebdffd] hover:shadow-lg transition-colors duration-300"
      onClick={handleClick}
    >
      <div
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold 
        ${statusColor[ticket.status] || "bg-gray-100 text-gray-700"}`}
      >
        {ticket.status}
      </div>

      <h3 className="text-base sm:text-md font-bold text-gray-800">
        {ticket.title}
      </h3>

      <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>

      <div className="mt-4 text-xs sm:text-sm text-gray-500 space-y-2">
        <p>
          <span className="text-gray-700 font-semibold">#{ticket.id}</span>{" "}
          <span className="text-red-600 font-bold ml-2 uppercase">
            {ticket.priority} Priority
          </span>
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span>Customer: {ticket.customer}</span>
          <span className="flex items-center gap-1 text-gray-500">
            <FaCalendarAlt className="text-gray-400" />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}
