import Student from './Student.jsx';

function App() {
  
  return (
    <>
      <Student name="Panda" age={24} isStudent={false}/>
      <Student name="Bear" age={23} isStudent={true}/>
      <Student name="Phoenix" age={25} isStudent={true}/>
      <Student /> 
    </>
  );
}

export default App
