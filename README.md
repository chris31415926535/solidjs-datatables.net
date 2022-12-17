## DataTables.net working with SolidJS

This small demo shows the DataTables jQuery library working in SolidJS. 

This may not be the best solution! But it's the only way I've been able to get it to work.

There are four steps:

1. Include the datatables css file in `index.html`.
2. In App.tsx, `import jQuery from 'jquery'` and then `import 'datatables.net'`.
3. Create an hmtl table and make note of its id.
1. Make the table a datatable with `jQuery(function() {jQuery('#table_id').dataTable();});`.

