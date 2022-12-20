import { Component, For } from 'solid-js';

import 'datatables.net';
import { CreateDataTable } from './components/DataTables';

const App: Component = () => {

  return (
    <div>
      
      <h1>DataTables.net in SolidJS</h1> 

      <CreateDataTable numRows={500} />
    </div>
      )
};

export default App;
