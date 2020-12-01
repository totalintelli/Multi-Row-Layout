<template>
  <div>
    <img src="../assets/benchmark.png" alt="" />
    <br /><br />
    <table>
      <thead>
        <tr>
          <td>Product Name</td>
          <td>Product Number</td>
          <td>Safety Stock Level</td>
          <td ROWSPAN="2">Sell Start Date</td>
          <td ROWSPAN="2">Modified Date</td>
        </tr>
        <tr>
          <td colspan="2">color</td>
          <td>List Price</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HL Road Frame - Red, 62</td>
          <td>FR-R92R-62</td>
          <td>500</td>
          <td ROWSPAN="2">7/1/2001</td>
          <td ROWSPAN="2">3/11/2004</td>
        </tr>
        <tr>
          <td colspan="2">Red</td>
          <td>1431.5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'SettleListPage',
  data() {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 50%;
  border: 1px solid #444444;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
th,
td {
  border: 1px solid #444444;
}
</style>
