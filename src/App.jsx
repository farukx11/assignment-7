import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = lazy(() => import("./components/Banner"));
const TicketCard = lazy(() => import("./components/TicketCard"));
const TaskStatus = lazy(() => import("./components/TaskStatus"));

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tickets");
        return res.json();
      })
      .then((data) => {
        setTickets(data);

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addToTask = (ticket) => {
    setTasks((prevTasks) => [...prevTasks, ticket]);
    setTickets((prevTickets) => prevTickets.filter((t) => t.id !== ticket.id));
  };

  const completeTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setResolved((prevResolved) => [...prevResolved, task]);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading tickets...</p>
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-[70vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-solid"></div>
                <p className="mt-4 text-gray-500 text-md">
                  Loading components...
                </p>
              </div>
            }
          >
            <Banner inProgress={tasks.length} resolved={resolved.length} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    addToTask={addToTask}
                  />
                ))}
              </div>
              <TaskStatus
                tasks={tasks}
                completeTask={completeTask}
                resolved={resolved}
              />
            </div>
          </Suspense>
        )}
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
