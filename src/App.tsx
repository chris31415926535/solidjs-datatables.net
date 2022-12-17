import { Component, For } from 'solid-js';

import jQuery from 'jquery';
import 'datatables.net';

const App: Component = () => {

  jQuery(function() {
    jQuery('#table_id').dataTable();
  });

  let numRows = 500;
  let rowId = 0;

  return (
    <div>
      
      <h1>DataTables.net in SolidJS</h1> 

      <table id="table_id" >
        <thead>
            <tr>
                <th>#</th>
                <th>Column 1</th>
                <th>Column 2</th>
            </tr>
        </thead>
        <tbody>
          <For each={new Array(numRows)}>
          {
            (_item) => 
              <tr>
                <td>{rowId++}</td>
                <td>{Math.random()}</td>
                <td>{Math.random()}</td>
              </tr>
            }
          </For>
        </tbody>
      </table>
   </div>
  );
};

export default App;
