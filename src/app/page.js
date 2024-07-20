import Header from "./item/Header";
import TaskInput from "./item/TaskInput";
import Task from "./item/Task";
import Footer from "./item/Footer";

export default function Home() {
  const tasks = [
    {id: 1, title: "Read a Book", isDone: true},
    {id: 2, title: "Take a shower", isDone: false},
    {id: 3, title: "Sleep", isDone: false}
  ]

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task {...tasks[0]} />
        {/* task */}
        <Task {...tasks[1]} />
        {/* task */}
        <Task {...tasks[2]} />
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Buachompoo Rerksuitthirat" studentId="660610768"/>

    </div>
  );
}