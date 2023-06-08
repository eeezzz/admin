<template>
  <div class="login">
    <div class="relative">
      <div class="left">
        <el-row>
          <el-col :span="24">
            <div class="homepageLogo">
              <ul>
                <li><el-image style="width: 50px; height: 50px" :src="url" fit="fit" /></li>
                <li><span>ZhaoxiAdmin</span></li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-image class="boxbg" :src="boxbg" fit="fit" />
            <p class="p1">歡迎使用本系統</p>
            <p class="p2">開箱即用的後台管理系統</p>
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <el-row>
          <el-col :span="24">
            <h2>登入</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form :model="form" label-width="120px" label-position="top" size="large" class="form">
              <el-form-item label="用戶名" prop="username">
                <el-input v-model="form.username" />
              </el-form-item>
              <el-form-item label="密碼" prop="password">
                <el-input v-model="form.password" />
              </el-form-item>
              <el-form-item>
                <el-button class="submitBtn" type="primary" @click="onSubmit">登錄</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>


      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ElRow, ElImage } from 'element-plus';
import { reactive, ref } from 'vue';
const url = ref('/images/logo.0606fdd2.png')
const boxbg = ref('/images/svgs/login-box-bg.svg')

const form = reactive(
  {
    username: '',
    password: ''
  }
)

const onSubmit = () => {
  console.log(form)
}

</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  .relative {
    width: 100%;
    height: 100%;
    text-align: center;

    .left {
      width: 50%;
      height: 100%;
      float: left;
      background-image: url('/images/svgs/login-bg.svg');

      .boxbg {
        width: 350px;
        height: 350px;
        margin-top: 100px;
      }

      .homepageLogo {
        height: 50px;
        line-height: 50px;
        margin-top: 40px;

        span {
          color: white;
          font-size: 24px;
        }

        ul {
          list-style: none;

          li {
            float: left;
            margin-left: 5px;
          }
        }
      }

      p {
        color: white;
      }

      .p1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .p2 {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }

    .right {
      width: 50%;
      float: left;
      padding-top: 15%;

      .form {
        width: 50%;
        margin: 0px auto;

        .submitBtn {
          width: 100%;
        }
      }
    }
  }
}
</style>