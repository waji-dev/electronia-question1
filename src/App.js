import { EAProvider } from './components/ElectroniaTodo/EAContext';
import EAUserControl from './components/ElectroniaTodo/EAUserControl';

function App() {
  return (
    <EAProvider>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <EAUserControl header="Electronia Assesment" />
          </div>
        </div>
      </div>
  </EAProvider>
  );
}
export default App;
