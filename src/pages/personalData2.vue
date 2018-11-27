<template>
  <el-form ref="form" :model="form" label-width="8rem" label-position="top" >
    <el-row>
      <el-col :span="10">
        <el-form-item label="姓 (拼音)" class="font-class-size">
          <el-input class="el-input__inner" v-model="form.surname"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="10">
        <el-form-item label="名 (拼音)" class="font-class-size">
          <el-input class="el-input__inner" v-model="form.firstname"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="10">
        <el-form-item label="性别" class="font-class-size">
          <el-input class="el-input__inner" v-model="form.sex"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="10">
        <el-form-item label="生日" class="font-class-size">
          <el-date-picker type="date"  v-model="form.birthdate"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="10">
        <el-form-item label="护照号码" class="font-class-size">
          <el-input class="el-input__inner" v-model="form.passportNumber"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="10">
        <el-form-item label="护照过期日期" class="font-class-size">
          <el-date-picker type="date" class="el-input__inner" v-model="form.passportExpireDate"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="10">
        <el-form-item label="护照签发国" class="font-class-size">
          <el-select class="el-input__inner" v-model="form.issueCountry">
            <el-option label="CN" value="CN" ></el-option>
            <el-option label="US" value="US"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

</template>

<script>
  export default {
    name: "personalData2",
    data() {
      return {
        form: {
          surname: '',
          firstname: '',
          birthdate: '',
          sex: '',
          passportNumber: '',
          passportExpireDate: '',
          issueCountry: 'CN'
        },
        info: null,
        messageResponse: null
      }
    },
    methods: {
      onSubmit() {
        // post request
        this.$axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response))
       // console.log('submit!');
      //  console.log(this.info );
      //  console.log(this.form.surname);
      //  console.log(JSON.stringify(this.form));
        this.$axios
          .get('/tax_fund/requestData')
          .then(responseData  => (this.messageResponse = responseData))
        console.log(this.messageResponse );
        // form submitted successfully, then, you can now jump to other pages
       // this.$router.push({ path: '/' })

      }
    }
  }
</script>

<style>
  .el-input__inner {
    width: 40rem;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    color: darkblue;
    text-align: center;
    /*outline: medium;*/
  }
  .font-class-size {
    font-size: 4rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

</style>
