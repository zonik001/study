<!--
Template Name: 公用表单
Create author: gaolei
Create Time  : 2020-08-07
-->
<template>
  <el-form
    ref="searchForm"
    :model="searchData"
    :rules="rules"
    :label-width="labelWidth"
    label-position="top"
    style="overflow:hidden"
  >
    <el-row class="form-btn" style="float: right; margin-bottom: 15px;">
      <template v-for="item in searchHandleTop">
        <el-button
          v-if="item.type === 'vertify'"
          :key="item.label"
          :disabled="item.disabled"
          :type="item.style || 'danger'"
          :size="size"
          @click="handelValidate('searchForm', item)"
        >{{ item.label }}</el-button>
        <el-button
          v-else-if="item.type === 'vertify2'"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          @click="handelValidate2('searchForm', item)"
        >{{ item.label }}</el-button>
        <el-button
          v-else-if="item.type === 'reset'"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          @click="handelReset('searchForm', item)"
        >{{ item.label }}</el-button>
        <el-button
          v-else
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          @click="item.handle()"
        >{{ item.label }}</el-button>
      </template>
    </el-row>
    <el-row style="clear: both; margin: 0 -16px" class="search-form">
      <template v-for="(item, index) in searchForm">
        <el-col v-if="item.type === 'textarea'" :span="item.col ? item.col: 24" :key="index">
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-input
              v-if="item.isautosize"
              :type="item.type"
              :rows="item.rows"
              :size="size"
              :disabled="item.disabled"
              :readonly="item.readonly"
              v-model.trim="searchData[item.prop]"
              :placeholder="item.placeholder"
              :maxlength="item.maxlength"
              :autosize="{ minRows: 5, maxRows: 10}"
              @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
            />
            <el-input
              v-if="!item.isautosize"
              :type="item.type"
              :rows="item.rows"
              :size="size"
              :disabled="item.disabled"
              :readonly="item.readonly"
              v-model.trim="searchData[item.prop]"
              :placeholder="item.placeholder"
              :maxlength="item.maxlength"
              @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
            />
          </el-form-item>
        </el-col>
        <el-col v-else-if="item.type === 'NoticeInput'" :span="24" :key="index">
          <el-col :span="8">
            <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
              <!-- 输入框 -->
              <el-input
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
              />
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <p
              style="margin-top: 8px;padding-left: 20px;color: #ff4949;font-size: 14px;"
            >{{ item.notice }}</p>
          </el-col>
        </el-col>
        <!-- 下拉框 后面跟文字 -->
        <el-col v-else-if="item.type === 'NoticeSelect'" :span="24" :key="index">
          <el-col :span="6" style="margin: 0 -16px;">
            <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
              <!-- 下拉框 -->
              <el-select
                v-model="searchData[item.prop]"
                :size="size"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :remote="item.remote"
                :remote-method="item.remoteMethod"
                filterable
                clearable
                style="width: 100%"
                @clear="item.clear ? item.clear(searchData[item.prop]): ''"
                @focus="item.focus ? item.focus(searchData[item.prop]): ''"
                @change="item.change ? item.change(searchData[item.prop]): ''"
                @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
              >
                <el-option
                  v-for="(op,idx) in item.options"
                  :label="op.label"
                  :value="op.value"
                  :key="idx"
                >{{ op.label }}</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <p style="margin-top: 42px; color: #ff4949;font-size: 14px;">{{ item.notice }}</p>
          </el-col>
        </el-col>
        <el-col v-else-if="item.type === 'SpanInput'" :span="item.col ? item.col: 24" :key="index">
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-input
              :type="item.type"
              :rows="item.rows"
              :size="size"
              :disabled="item.disabled"
              v-model.trim="searchData[item.prop]"
              :placeholder="item.placeholder"
              :maxlength="item.maxlength"
            />
          </el-form-item>
        </el-col>
        <el-col v-else-if="item.type === 'hidden'" :span="6" :key="index">
          <div style="height:86px"></div>
        </el-col>
        <el-col v-else-if="item.type === 'disappeared'" style="height: 0px" :span="6" :key="index">
          <div style="height:0px"></div>
        </el-col>
        <el-col v-else-if="item.type === 'onbtn'" :span="6" :key="index">
          <div style="height:86px">
            <el-button
              type="primary"
              slot="append"
              size="medium"
              @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
              style="background-color: #ff4949; color: #fff; border: none;margin-top:34px;border-radius:20px"
            >{{item.BtnLabel}}</el-button>
          </div>
        </el-col>
        <el-col v-else-if="item.type === 'TextInput'" :span="12" :key="index">
          <div style="color: red;margin-top: 30px;height: 56px;font-size: 14px;">{{item.text}}</div>
        </el-col>
        <el-col v-else-if="item.type === 'RadioLength'" :span="24" :key="index">
          <!-- 单选长度 -->
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-radio-group
              v-model="searchData[item.prop]"
              @change="item.change && item.change(searchData[item.prop])"
            >
              >
              <el-radio
                v-for="ra in item.radios"
                :size="size"
                :label="ra.value"
                :key="ra.value"
              >{{ ra.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col v-else-if="item.type === 'CheckboxRow'" :span="24" :key="index">
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-checkbox-group
              :size="size"
              @change="item.change ? item.change(searchData[item.prop]): ''"
              v-model.trim="searchData[item.prop]"
            >
              <el-checkbox
                v-for="ch in item.checkboxs"
                :disabled="item.disabled"
                :label="ch.value"
                :key="ch.value"
              >{{ ch.label }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col v-else-if="item.type === 'MobileInput'" :span="6" :key="index">
          <el-form-item :label="item.label">
            <el-input
              v-model.trim="searchData[item.prop1]"
              :size="size"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :placeholder="item.placeholder1"
              :style="{width:(item.width1?? '34%')}"
              @click.native="item.click? item.click(searchData[item.prop1]) : '' "
              @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop1]) : '' "
              @blur="item.blur ? item.blur(searchData[item.prop1]) : '' "
              @input="item.input ? item.input(searchData[item.prop1]): '' "
              :maxlength="item.maxlength"
            />
            &nbsp;{{item.jionName??'-'}}
            <el-input
              v-model.trim="searchData[item.prop2]"
              :size="size"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :placeholder="item.placeholder2"
              :style="{width:(item.width2??'60%')}"
              @click.native="item.click? item.click(searchData[item.prop2]) : '' "
              @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop2]) : '' "
              @blur="item.blur ? item.blur(searchData[item.prop2]) : '' "
              @input="item.input ? item.input(searchData[item.prop2]): '' "
              :maxlength="item.maxlength"
            />
          </el-form-item>
        </el-col>
        <!-- 纯文本 -->
        <el-col v-else-if="item.type === 'pureText'" :span="item.col ? item.col: 24" :key="index">
          <p class="dangerMsg" style="margin-top: 36px;">{{item.text}}</p>
        </el-col>
        <!-- 红色纯文本 -->
        <el-col
          v-else-if="item.type === 'pureTextRed'"
          :span="item.col ? item.col: 24"
          :key="index"
        >
          <p class="dangerMsg" style="margin-top: 36px;color:red">{{item.text}}</p>
        </el-col>
        <el-col v-else-if="item.type === 'FiveSelect'" :key="index" class="FiveSelects">
          <el-form-item :label="item.label">
            <el-select
              ref="select1"
              v-model="searchData[item.prop]"
              :size="size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :remote="item.remote"
              :remote-method="item.remoteMethod"
              filterable
              :filter-method="item.filterMethod"
              clearable
              style="width: 100%"
              @clear="item.clear ? item.clear(searchData[item.prop]): ''"
              @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              @click.native="item.click? item.click(searchData[item.prop]) : '' "
              @change="item.change ? item.change(searchData[item.prop]): ''"
              @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
            >
              <el-option
                v-for="(op,idx) in item.options"
                :label="op.label"
                :value="op.value"
                :key="idx"
              >{{ op.label }}</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col v-else-if="item.type === 'fullLineInput'" :span="24" :key="index">
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-input
              v-model.trim="searchData[item.prop]"
              :size="size"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :placeholder="item.placeholder"
            />
          </el-form-item>
        </el-col>
        <el-col v-else :span="6" :key="index">
          <el-form-item :label="item.label" :key="item.prop" :prop="item.prop">
            <el-tooltip
              class="item"
              :disabled="searchData[item.prop] ? false : true"
              :effect="item.effect"
              :content="searchData[item.prop]+''"
              :placement="item.placement"
              :open-delay="600"
            >
              <!-- 输入框 -->
              <el-input
                v-if="item.type === 'Input'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :readonly="item.readonly"
                :placeholder="item.placeholder"
                @click.native="item.click? item.click(searchData[item.prop]) : '' "
                @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop]) : '' "
                @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                @input="item.input ? item.input(searchData[item.prop]): '' "
                :maxlength="item.maxlength"
              />

              <!-- 输入框可清空 -->
              <el-input
                v-if="item.type === 'InputClear'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
                clearable
                @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
              />
              <!-- 输入框+input -->
              <div v-if="item.type === 'InputBtn'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :readonly="item.readonly"
                  :placeholder="item.placeholder"
                  @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop]) : '' "
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                  @click.native="item.click? item.click(searchData[item.prop]) : '' "
                  @change="item.change ? item.change(searchData[item.prop]) : ''"
                >
                  <el-button
                    type="primary"
                    slot="append"
                    :disabled="item.isBtnDisabled"
                    icon="el-icon-search"
                    size="medium"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none"
                  ></el-button>
                </el-input>
              </div>

              <!-- 输入框+input -->
              <div v-if="item.type === 'InputBtnS'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :readonly="item.readonly"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                  @click.native="item.click? item.click(searchData[item.prop]) : '' "
                >
                  <el-button
                    type="primary"
                    slot="append"
                    size="medium"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none"
                  >{{item.btnText}}</el-button>
                </el-input>
              </div>

              <!-- 输入框+按钮  不同的按钮图标  -->
              <div v-if="item.type === 'InputBtnIcon'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                >
                  <el-button
                    type="primary"
                    slot="append"
                    :icon="item.InputBtnIcon"
                    size="medium"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none"
                  ></el-button>
                </el-input>
              </div>
              <!-- 输入框 + 按钮 （非查询） -->
              <div v-if="item.type === 'InputBtnNoSearch'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                  @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop]) : '' "
                >
                  <el-button
                    type="primary"
                    size="medium"
                    slot="append"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none"
                  >{{item.InputBtnLabel}}</el-button>
                </el-input>
              </div>

              <!-- 输入框 + 一个按钮 -->
              <div v-if="item.type === 'InputAndOneBtn'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                  @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop]) : '' "
                  style="padding: 0"
                >
                  <el-button
                    type="primary"
                    size="medium"
                    slot="append"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none"
                  >{{item.InputBtnLabel}}</el-button>
                </el-input>
              </div>

              <!-- 输入框 + 问号 -->
              <div v-if="item.type === 'inputAndQuestion'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                >
                  <el-button
                    type="primary"
                    size="medium"
                    slot="append"
                    @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none;margin-top: -1px; margin-bottom: -1px"
                  >?</el-button>
                </el-input>
              </div>

              <!-- 输入框 + 两个按钮 -->
              <div v-if="item.type === 'InputTwoBtnNoSearch'">
                <el-input
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  clearable
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
                  @keyup.enter.native="item.keyup ? item.keyup(searchData[item.prop]) : '' "
                >
                  <el-button
                    type="primary"
                    slot="append"
                    class="btn1"
                    @click="item.handleclick1 ? item.handleclick1(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none;"
                  >{{item.InputBtnLabel1}}</el-button>
                  <el-button
                    type="primary"
                    slot="append"
                    @click="item.handleclick2 ? item.handleclick2(searchData[item.prop]) : ''"
                    style="background-color: #ff4949; color: #fff; border: none;"
                  >{{item.InputBtnLabel2}}</el-button>
                </el-input>
              </div>
            </el-tooltip>

            <!-- 录入框后跟的文字 -->
            <div v-if="item.type === 'text'">
              <div style="margin-top:30px; margin-bottom: 14px">{{item.text}}</div>
            </div>

            <!-- 录入框后跟的文字 -->
            <div v-if="item.type === 'text1'">
              <div style="margin-top:30px;color:red">{{item.text}}</div>
            </div>
            <div v-if="item.type === 'text2'">
              <div style="margin-top:30px">{{item.text}}</div>
            </div>

            <!-- 输入框+单选 -->
            <div v-if="item.type==='RadioInput'" class="flexBox">
              <el-input
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disable"
                :placeholder="item.placeholder"
                @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
              />
              <el-radio
                v-model="radioData[item.radioProp]"
                :size="size"
                :label="item.value"
                :key="item.value"
              >{{ item.radioLabel }}</el-radio>
            </div>

            <el-input
              v-if="item.type === 'ComplexInput'"
              v-model.trim="searchData[item.prop]"
              :size="size"
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
            >
              <template :slot="item.position">{{ item.content }}</template>
            </el-input>

            <el-input
              v-if="item.type === 'Password'"
              v-model.trim="searchData[item.prop]"
              :size="size"
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              type="password"
              @blur="item.blur ? item.blur(searchData[item.prop]) : '' "
            />

            <!-- 下拉框 -->
            <!-- $forceUpdate() 下拉刷新,修复数据改变下拉框不变的bug -->
            <el-select
              ref="select1"
              v-if="item.type === 'Select'"
              v-model="searchData[item.prop]"
              :size="size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :remote="item.remote"
              :remote-method="item.remoteMethod"
              filterable
              :filter-method="item.filterMethod"
              clearable
              style="width: 100%"
              @clear="item.clear ? item.clear(searchData[item.prop]): ''"
              @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              @click.native="item.click? item.click(searchData[item.prop]) : '' "
              @change="item.change ? item.change(searchData[item.prop]): ''"
              @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
            >
              <el-option
                v-for="(op,idx) in item.options"
                :label="op.label"
                :value="op.value"
                :key="idx"
              >{{ op.label }}</el-option>
            </el-select>

            <!-- 下拉选+按钮 -->
            <div v-if="item.type === 'SelectBtn'" class="flexBox">
              <el-select
                v-model="searchData[item.prop]"
                :size="size"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :remote="item.remote"
                :remote-method="item.remoteMethod"
                filterable
                clearable
                style="width: 100%"
                @clear="item.clear ? item.clear(searchData[item.prop]): ''"
                @focus="item.focus ? item.focus(searchData[item.prop]): ''"
                @change="item.change ? item.change(searchData[item.prop]): ''"
                @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
              >
                <el-option
                  v-for="(op,idx) in item.options"
                  :label="op.label"
                  :value="op.value"
                  :key="idx"
                >{{ op.label }}</el-option>
              </el-select>
              <el-button
                type="primary"
                solt="append"
                :disabled="item.disabledBtn"
                size="medium"
                @click="item.handleclick ? item.handleclick(searchData[item.prop]) : ''"
                style="background-color: #ff4949; color: #fff; border: none; border-ra"
              >{{item.SelectBtnLabel}}</el-button>
            </div>

            <!-- 下拉选--只显示value -->
            <el-select
              v-if="item.type === 'SelectVL'"
              v-model="searchData[item.prop]"
              :size="size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :remote="item.remote"
              :remote-method="item.remoteMethod"
              filterable
              :filter-method="item.filterMethod"
              clearable
              style="width: 100%"
              @clear="item.clear ? item.clear(searchData[item.prop]): ''"
              @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              @change="item.change ? item.change(searchData[item.prop]): ''"
              @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
            >
              <el-option v-for="(op,idx) in item.options" :value="op.value" :key="idx">
                <span style="float: left">{{ op.label }}</span>
              </el-option>
            </el-select>

            <!-- 下拉选--只显示label -->
            <el-select
              v-if="item.type === 'SelectLB'"
              v-model="searchData[item.prop]"
              :size="size"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :remote="item.remote"
              :remote-method="item.remoteMethod"
              filterable
              :filter-method="item.filterMethod"
              clearable
              style="width: 100%"
              @clear="item.clear ? item.clear(searchData[item.prop]): ''"
              @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              @change="item.change ? item.change(searchData[item.prop]): ''"
              @visible-change="item.visibleChange ? item.visibleChange($event) : $forceUpdate()"
            >
              <el-option
                v-for="(op,idx) in item.options"
                :label="op.label.split('-')[1]"
                :value="op.value"
                :key="idx"
              >{{ op.label }}</el-option>
            </el-select>

            <!-- 单选 -->
            <el-radio-group
              v-if="item.type === 'Radio'"
              :disabled="item.disabled"
              v-model="searchData[item.prop]"
              @change="item.change && item.change(searchData[item.prop])"
            >
              >
              <el-radio
                v-for="ra in item.radios"
                :size="size"
                :label="ra.value"
                :key="ra.value"
              >{{ ra.label }}</el-radio>
            </el-radio-group>

            <!-- 组合单选按钮 -->
            <el-radio-group
              v-if="item.type === 'RadioButton'"
              v-model.trim="searchData[item.prop]"
              :size="size"
              style="width: 100%"
              @change="item.change && item.change(searchData[item.prop])"
            >
              <el-radio-button
                v-for="ra in item.radios"
                :label="ra.value"
                :key="ra.value"
              >{{ ra.label }}</el-radio-button>
            </el-radio-group>

            <!-- 复选框 -->
            <el-checkbox-group
              v-if="item.type === 'Checkbox'"
              :size="size"
              @change="item.change ? item.change(searchData[item.prop]): ''"
              v-model.trim="searchData[item.prop]"
            >
              <el-checkbox
                v-for="ch in item.checkboxs"
                :disabled="item.disabled"
                :label="ch.value"
                :key="ch.value"
              >{{ ch.label }}</el-checkbox>
            </el-checkbox-group>

            <el-tooltip
              class="item"
              :disabled="(searchData[item.prop] && typeof(searchData[item.prop]) !== 'object') ? false : true"
              :effect="item.effect"
              :content="searchData[item.prop]+''"
              :placement="item.placement"
              :open-delay="600"
            >
              <!-- date+单选框 -->
              <div v-if="item.type==='RadioDate'" class="flexBox">
                <el-date-picker
                  v-if="!item.range"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  :value-format="item.format"
                  style="width: 100%"
                  @change="item.change(searchData[item.prop])"
                />

                <el-date-picker
                  v-if=" item.range === 'start'"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :picker-options="item.pickerOptionsStart"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  type="date"
                  style="width: 100%"
                />

                <el-date-picker
                  v-if="item.range === 'end'"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :picker-options="item.pickerOptionsEnd"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  type="date"
                  style="width: 100%"
                />
                <el-radio
                  v-model="radioData[item.radioProp]"
                  :size="size"
                  :label="item.value"
                  :key="item.value"
                >{{ item.radioLabel }}</el-radio>
              </div>
              <!-- date+多选框 -->
              <div v-if="item.type==='CheckboxDate'" class="flexBox">
                <el-date-picker
                  v-if="!item.range"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  :value-format="item.format"
                  style="width: 100%"
                  @change="item.change(searchData[item.prop])"
                />
                <el-date-picker
                  v-if=" item.range === 'start'"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :picker-options="item.pickerOptionsStart"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  type="date"
                  style="width: 100%"
                />
                <el-date-picker
                  v-if="item.range === 'end'"
                  v-model.trim="searchData[item.prop]"
                  :size="size"
                  :disabled="item.disabled"
                  :picker-options="item.pickerOptionsEnd"
                  :placeholder="item.placeholder"
                  :format="item.format"
                  type="date"
                  style="width: 100%"
                />
                <el-checkbox
                  v-model.trim="searchData[item.isChecked]"
                  :disabled="item.checkboxDisabled"
                  style="margin-left: 5px"
                >{{item.checkboxLabel}}</el-checkbox>
              </div>
              <!-- 日期 -->
              <el-date-picker
                v-if="item.type === 'Date' && !item.range"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
                :format="item.format"
                :value-format="item.format"
                style="width: 100%"
                @change="item.change(searchData[item.prop])"
                @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              />

              <el-date-picker
                v-if="item.type === 'Date' && item.range === 'start'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :picker-options="item.pickerOptionsStart"
                :placeholder="item.placeholder"
                :format="item.format"
                :value-format="item.valueFormat"
                type="date"
                style="width: 100%"
                @change="item.change(searchData[item.prop])"
                @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              />

              <el-date-picker
                v-if="item.type === 'Date' && item.range === 'end'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :picker-options="item.pickerOptionsEnd"
                :placeholder="item.placeholder"
                :format="item.format"
                :value-format="item.valueFormat"
                type="date"
                style="width: 100%"
                @focus="item.focus ? item.focus(searchData[item.prop]): ''"
              />

              <el-date-picker
                v-if="item.type === 'Month' && !item.range"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
                :format="item.format"
                :value-format="item.format"
                type="month"
                style="width: 100%"
              />

              <el-date-picker
                v-if="item.type === 'Month' && item.range === 'start'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :picker-options="item.pickerOptionsStart"
                :placeholder="item.placeholder"
                :format="item.format"
                type="month"
                style="width: 100%"
              />

              <el-date-picker
                v-if="item.type === 'Month' && item.range === 'end'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                :picker-options="item.pickerOptionsEnd"
                :placeholder="item.placeholder"
                :format="item.format"
                type="month"
                style="width: 100%"
              />

              <el-date-picker
                v-if="item.type === 'Year'"
                v-model.trim="searchData[item.prop]"
                type="year"
                placeholder="选择年"
              />

              <!-- 时间 -->
              <el-time-select
                v-if="item.type === 'Time'"
                :size="size"
                v-model.trim="searchData[item.prop]"
              />

              <!-- 日期时间 -->
              <el-date-picker
                v-if="item.type === 'DateTime'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :placeholder="item.placeholder"
                :disabled="item.disable && item.disable(searchData[item.prop])"
                :value-format="item.format"
                type="datetime"
                style="width: 100%"
                @change="item.change(searchData[item.prop])"
              />

              <!-- 起止时间 -->
              <el-date-picker
                v-if="item.type === 'Daterange'"
                v-model.trim="searchData[item.prop]"
                :size="size"
                :disabled="item.disabled"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                @change="item.change(searchData[item.prop])"
              />
            </el-tooltip>

            <!-- 滑块 -->
            <el-slider
              v-if="item.type === 'Slider'"
              :size="size"
              v-model.trim="searchData[item.prop]"
            />

            <!-- 开关 -->
            <el-switch
              v-if="item.type === 'Switch'"
              :size="size"
              @change="item.change ? item.change(searchData[item.prop]): ''"
              v-model.trim="searchData[item.prop]"
            />

            <!-- 三级联动 cascader -->
            <el-cascader
              v-if="item.type === 'cascader'"
              :size="size"
              :options="item.props.options"
              v-model.trim="searchData[item.prop]"
              :placeholder="item.props.placeholder || '请选择'"
              :disabled="item.props.disabled || false"
              :props="item.props.defaultParams"
              style="width: 100%;"
              @change="item.change(searchData[item.prop], item)"
            />
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    <!-- button 操作按钮 -->
    <el-row
      class="form-btn"
      :style="type=== 'fr' ? 'float: right; margin-top: -48px;' : 'float: right; margin-top: 8px;'"
    >
      <template v-for="item in searchHandle">
        <el-button
          v-if="item.type === 'vertify'"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          :disabled="item.disabled"
          @click="handelValidate('searchForm', item)"
        >{{ item.label }}</el-button>
        <!-- 控制表单按钮的显示隐藏 -->
        <el-button
          v-else-if="item.type === 'btnFlag'"
          v-show="item.isShowBtn"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          :disabled="item.disabled"
          @click="handelValidate('searchForm', item)"
        >{{ item.label }}</el-button>
        <el-button
          v-else-if="item.type === 'vertify2'"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          :disabled="item.disabled"
          @click="handelValidate2('searchForm', item)"
        >{{ item.label }}</el-button>
        <el-button
          v-else-if="item.type === 'reset'"
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          :disabled="item.disabled"
          @click="handelReset('searchForm', item)"
        >{{ item.label }}</el-button>
        <span class="dangerMsg" v-else-if="item.type === 'text'" :key="item.label">{{ item.label }}</span>
        <el-tooltip
          v-else-if="item.type === 'tooltipBtn'"
          effect="dark"
          :content="item.content"
          :placement="item.placement??'bottom'"
        >
          <el-button
            :key="item.label"
            :type="item.style || 'danger'"
            :size="size"
            :disabled="item.disabled"
            @click="item.handle()"
          >{{ item.label }}</el-button>
        </el-tooltip>
        <el-button
          v-else
          :key="item.label"
          :type="item.style || 'danger'"
          :size="size"
          :disabled="item.disabled"
          @click="item.handle()"
        >{{ item.label }}</el-button>
      </template>
    </el-row>
  </el-form>
</template>
<script>
export default {
  props: {
    labelWidth: {
      type: String,
      default: '120px'
    },
    size: {
      type: String,
      default: 'medium'
    },
    searchForm: {
      type: Array,
      default: () => []
    },
    searchHandle: {
      type: Array,
      default: () => []
    },
    searchHandleTop: {
      type: Array,
      default: () => []
    },
    searchData: {
      type: Object,
      default: () => {}
    },
    radioData: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: ''
    },
    smoothErr: {
      //滚动到错误校验
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 解析表单的正则验证
    rules() {
      const rules = this.searchForm.reduce((map, i) => {
        if (i.rules) {
          map[i.prop] = i.rules
        }
        return map
      }, {})
      return rules
    }
  },
  methods: {
    handelValidate(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (val) {
            val.handle()
          }
        } else {
          if (this.smoothErr) this.scrollToError()
          return false
        }
      })
    },
    handelValidate2(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          val.handle(true)
          return true
        } else {
          val.handle(false)
          if (this.smoothErr) this.scrollToError()
          return false
        }
      })
    },
    handelReset(formName, val) {
      this.$refs[formName].resetFields()
      if (val) {
        val.handle()
      }
    },
    scrollToError() {
      this.$nextTick(() => {
        let isError = document.getElementsByClassName('is-error')
        isError[0].scrollIntoView({
          // 滚动到指定节点
          // 值有start,center,end，nearest，当前显示在视图区域中间
          block: 'center',
          // 值有auto、instant,smooth，缓动动画（当前是慢速的）
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.flexBox {
  display: flex;
  align-items: center;
  .el-radio {
    margin-left: 5px;
  }
  // .el-button {
  //   margin-left: 5px;
  //   padding: 10px 15px 9px 15px;
  //   border-radius: 5px !important;
  // }
}
::v-deep .el-form-item {
  margin-bottom: 14px;
}
::v-deep .el-form-item__label {
  line-height: 24px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #232323;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
::v-deep .el-form-item__content {
  width: 90%;
  font-weight: 500;
  .el-input-group {
    //input基线对齐（插槽）
    vertical-align: baseline;
  }
}
::v-deep .el-input__inner {
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #232323;
  &::placeholder {
    color: #919191;
    font-size: 14px;
    font-weight: 200;
  }
}
::v-deep .el-textarea__inner {
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #232323;
  &::placeholder {
    color: #919191;
    font-size: 14px;
    font-weight: 200;
  }
}
::v-deep .el-pagination span:not([class*='suffix']) {
  font-size: 12px;
  font-weight: 400;
  color: #232323;
}
.el-divider--horizontal,
.el-divider.el-divider--horizontal {
  margin: 10px 0 0px 0;
  background-color: #f0f0f0;
}
::v-deep .el-form-item__error {
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
::v-deep .el-form-item .el-input .btn1 {
  margin-right: 1px;
}
.FiveSelects {
  width: 20%;
}
</style>
