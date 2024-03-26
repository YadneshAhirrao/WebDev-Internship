<template>
  <div class="table-class">
    <table>
      <tr class="table-heading">
        <th>Type</th>
        <th>Key</th>
        <th>Summary</th>
        <th>Assignee</th>
        <th>Reporter</th>
        <th>Status</th>
        <th>Resolution</th>
        <th>Created</th>
        <th>Due Date</th>
      </tr>
      <tr class="table-content">
        <td>Bug</td>
        <td>NNG-13088</td>
        <td>POC for Streamlit integration</td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=SC&background=44546f&color=fff&size=32"
            alt=""
          />Shivam Chaudhary
        </td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=SC&background=44546f&color=fff&size=32"
            alt=""
          />Shivam Chaudhary
        </td>
        <td>GROOMED</td>
        <td>Unresolved</td>
        <td>Mar 5, 2024</td>
        <td>Mar 5, 2024</td>
      </tr>
      <tr class="table-content">
        <td>Task</td>
        <td>NNG-13091</td>
        <td>UI view result functionality in UDF manager</td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=SG&background=3c5ed5&color=fff&size=32"
            alt=""
          />Saloni Gupta
        </td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=SG&background=3c5ed5&color=fff&size=32"
            alt=""
          />Saloni Gupta
        </td>
        <td>DEVELOPMENT IN PROGRESS</td>
        <td>Unresolved</td>
        <td>Mar 5, 2024</td>
        <td>Mar 5, 2024</td>
      </tr>
      <tr class="table-content">
        <td>Bug</td>
        <td>NNG-13090</td>
        <td>Add Placeholder in accept project modal</td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=DD&background=3e388e&color=fff&size=32"
            alt=""
          />
          Debrat Dubey
        </td>
        <td>
          <img
            src="https://ui-avatars.com/api/?rounded=true&name=JP&background=912a3e&color=fff&size=32"
            alt=""
          />Jheberson Pontejos
        </td>
        <td>GROOMED</td>
        <td>Unresolved</td>
        <td>Mar 5, 2024</td>
        <td>Mar 5, 2024</td>
      </tr>
      <!-- Add more rows as needed -->
    </table>
  </div>
</template>

<style scoped>
table,
th,
td {
  padding: 0 0.3rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}

.table-class {
  margin-top: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
}

.table-heading {
  text-align: left;
  border-bottom: 1px solid;
  overflow: scroll;
}

.table-content {
  overflow: scroll;
}

.table-content > td {
  padding: 0.5rem 0.125rem;
  padding-left: 0.4rem;
  font-size: 14px;
}
img {
  display: inline;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-right: 10px; /* Add some spacing between avatar and text */
}
</style>
