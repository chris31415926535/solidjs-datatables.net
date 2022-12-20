import { Component, For } from 'solid-js';

import jQuery from 'jquery';
import 'datatables.net';
import { CreateDataTable, Testing } from './components/DataTables';

const App: Component = () => {

  jQuery(function() {jQuery('#table_id').dataTable();});

  let numRows = 500;
  let rowId = 0;

  return (
    <div>
      
      <h1>DataTables.net in SolidJS</h1> 

      <CreateDataTable numRows={500} />
    </div>
      )
};

export default App;
