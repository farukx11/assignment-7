import { toast } from "react-toastify";

export default function TaskStatus({ tasks, completeTask, resolved }) {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4 text-gray-600">Task Status</h2>

      {tasks.length === 0 && <p>No tasks in progress</p>}

      {tasks.map((task) => (
        <div key={task.id} className="mb-4 rounded shadow-md bg-white p-4">
          <div className="mb-2 font-semibold">{task.title}</div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            onClick={() => {
              completeTask(task.id);
              toast.success(`${task.title} marked as Complete`);
            }}
          >
            Complete
          </button>
        </div>
      ))}

      <h2 className="font-bold text-lg mt-8 mb-4 text-gray-600">
        Resolved Task
      </h2>

      {(!resolved || resolved.length === 0) && <p>No resolved tasks yet.</p>}

      {resolved && resolved.length > 0 && (
        <div className="flex flex-col gap-3 mt-6">
          {resolved.map((task) => (
            <div
              key={task.id}
              className="w-full px-4 py-4 rounded text-gray-900 text-sm bg-white hover:bg-green-200"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            >
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
