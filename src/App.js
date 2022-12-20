import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Experience from './components/Experience'
import Works from './components/Works'

function App() {
  return (
    <div className='bg-gray-50 px-10 md:px-20 dark:bg-gray-900 min-h-full'>
      <Navbar />
      <Landing />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
