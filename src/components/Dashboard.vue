<template>
  <div id='dashboard'>
    <h4>Dashboard</h4>

    <div class="container">
      <table>
        <thead>
          <tr>
              <th>DEPTº</th>
              <th>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
         <tr v-for="employee in employees" v-bind:key="employee.id">
              <th class="chip">{{employee.dept}}</th>
              <th>{{employee.employee_id}}</th>
              <th>{{employee.name}}</th>
              <th>
                <router-link  v-bind:to="{name:'view-employee', params:
                {employee_id: employee.employee_id}}">
                  <i class="fa fa-eye"></i>
                </router-link>
              </th>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit';

export default {
  name: 'dashboard',
  data() {
    return {
      employees: [],
    };
  },
  created() {
    db.collection('employees').orderBy('dept').get().then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position,
          };
          this.employees.push(data);
        });
      },
    );
  },
};

</script>

<style scoped>

</style>
