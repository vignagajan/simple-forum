import QuestionForm from "../components/QuestionForm";
import QuestionItem from "../components/QuestionItem";

function Dashboard() {
  const questions = [
    { title: "Title", text: "Lorem Ipsum adgknalhnalkjfsnh jk", createdAt: "2022-04-18T10:17:12.382+00:00" },
    { title: "Title 2", text: "agsfdjkfdshgkhdf khsdkfg hksjdh kghdf ", createdAt: "2022-04-18T10:17:12.382+00:00" },
    { title: "Title 3", text: "sdfngjksdnfgjksndfhjnskjdfhnjknsdjknh", createdAt: "2022-04-18T10:17:12.382+00:00" },
  ];
  return (
    <>
      <h1>Dashboard</h1>
      <QuestionForm />
      <section className="content">
        <div className="questions">
          {questions.map((question)=>(
            <QuestionItem key={question._id} question={question}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
