import { createEffect, For, onMount } from "solid-js";
import jQuery from 'jquery';
import 'datatables.net';

export function CreateDataTable(props: any) {

    let numRows = props.numRows | 10;


    let table_id = String("table_id_" + Math.round(Math.random() * 10**8));

    jQuery(function() {jQuery("#"+table_id).dataTable()}) ;

    console.log(table_id)
    
    let rowId = 0;
    
    return (
    <table id={table_id} >
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
    );
    
}
