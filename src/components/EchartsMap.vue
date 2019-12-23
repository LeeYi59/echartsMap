<template>
  <div class="container">
    <div class="logo-info">
      <h1>东莞市邮政行业安全监管平台</h1>
    </div>
    <div class="time-info">
      <div class="weather-box">
        <div class="data">
          <p class="time" id="time" v-html="time"></p>
          <p id="date" v-html="date"></p>
        </div>
      </div>
    </div>
    <div class="left-bottom">
      <div id="chartMap" ref="chartMap"></div>
    </div>
    <div class="right-bottom">
      <div class="desc-info">基于2019年1-6月数据</div>
      <div class="message-info">
        <div class="left-message-info">
          <div style="margin-bottom:5px;display: block;">
            <div class="message-box box-border">
              <img src="/static/images/bj-1.png" alt class="bj-1" />
              <img src="/static/images/bj-2.png" alt class="bj-2" />
              <img src="/static/images/bj-3.png" alt class="bj-3" />
              <img src="/static/images/bj-4.png" alt class="bj-4" />
              <img
                class="postal-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAADD0lEQVR42u2XSWxNURjH/0U3RU2dtIZEIipFQpSKPIsSEaGJmKKJhWrkVY2RiGjFlJhqWkjMGyRIEEPsFCUESSM27aJo0UiLkKoaUs3PwvXS1n3v3ePeu3L//83Lfd8753e/873znSMFChQoUKD/U1TylnoHbuKQXwhDcK7NfkHMN4AY5xfEHscIzfTwC+K2Y4i7/pVlCwDbWMY0QkyL4hAhst1PNpUCZnXzTNYB8FmSGMwwsqJ4CCPcIwyImegqiZy4yzHSLcSMmMMfkKycRFet+0xsiTnBYonzcSBOuIe4EXOCNImGOBDL3SL0pBmADr7auEYi1ZqqnR+2/s4otxBjAGihb9SIuQA0kUmarVPdL0aRBXGUYzY+xWXqALjqZ5884XBP3OQnxDOHENP9Q0jhpyOEbyT7BzHbYR6e+7kY5QBUU04Z5V1cxlZOcZItlLGLKd5M148QeV08mVweAXCIZFK7OYM0SaI/GaQzvNtvf3sKIdJNIHZgqjcSg+JGTTKBuGUMccHBAe8TvZwjJPLRGKJUYl+cmCsmecjFXOMlKuPEbDSBWGM7REeM4VslKW7+pppAnLVOi70ZaDmZXNqBNrLpG3k6kD4cB+B25ETVRj45nSL+OIWhJJhvzucoJmy5mP1WaZVGnoUJs4LHAOyUKAHggSRRwsoucWFWUWCCkOpwc+6sORJnADgsscQ25o4JRME/lOUAyWriiyQO2MaETSB2GSPUdjqFZ0pU2UZNNIFoMIa4JrEAgBcSCbTaRiWaQFznLne6+CY1ALzjIpe43M1XyZeoAOCixATrD13JrcgIVRx039C2A3A66vdJPAFgvcRaAO5738QfAvCBel7z6i830mSlPC9y79jrNUI/fjiqjS/0kqgHYKHXEDMcFug9iSzr83CvITY7hKiQWArAS+8r4ppDiPkSRwA47zVCgnX1K2RsbEsS1QBs8BpitPWehbYnx84uZDXtAIS8higy3kHbSPIa4rgxRJX3ZfnUGGK31wjD/qGxz/MaYjrvaTBwI3VGV5xAgQIFCmSkXwUInvvy+/S9AAAAAElFTkSuQmCC"
              />
              <div class="content-info">
                <div class="title1">邮政业</div>
                <div class="title2">业务总量(万件)</div>
                <div class="first">826545</div>
              </div>
            </div>
            <div class="message-box box-border">
              <img src="/static/images/bj-1.png" alt class="bj-1" />
              <img src="/static/images/bj-2.png" alt class="bj-2" />
              <img src="/static/images/bj-3.png" alt class="bj-3" />
              <img src="/static/images/bj-4.png" alt class="bj-4" />
              <img
                class="postal-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAADD0lEQVR42u2XSWxNURjH/0U3RU2dtIZEIipFQpSKPIsSEaGJmKKJhWrkVY2RiGjFlJhqWkjMGyRIEEPsFCUESSM27aJo0UiLkKoaUs3PwvXS1n3v3ePeu3L//83Lfd8753e/873znSMFChQoUKD/U1TylnoHbuKQXwhDcK7NfkHMN4AY5xfEHscIzfTwC+K2Y4i7/pVlCwDbWMY0QkyL4hAhst1PNpUCZnXzTNYB8FmSGMwwsqJ4CCPcIwyImegqiZy4yzHSLcSMmMMfkKycRFet+0xsiTnBYonzcSBOuIe4EXOCNImGOBDL3SL0pBmADr7auEYi1ZqqnR+2/s4otxBjAGihb9SIuQA0kUmarVPdL0aRBXGUYzY+xWXqALjqZ5884XBP3OQnxDOHENP9Q0jhpyOEbyT7BzHbYR6e+7kY5QBUU04Z5V1cxlZOcZItlLGLKd5M148QeV08mVweAXCIZFK7OYM0SaI/GaQzvNtvf3sKIdJNIHZgqjcSg+JGTTKBuGUMccHBAe8TvZwjJPLRGKJUYl+cmCsmecjFXOMlKuPEbDSBWGM7REeM4VslKW7+pppAnLVOi70ZaDmZXNqBNrLpG3k6kD4cB+B25ETVRj45nSL+OIWhJJhvzucoJmy5mP1WaZVGnoUJs4LHAOyUKAHggSRRwsoucWFWUWCCkOpwc+6sORJnADgsscQ25o4JRME/lOUAyWriiyQO2MaETSB2GSPUdjqFZ0pU2UZNNIFoMIa4JrEAgBcSCbTaRiWaQFznLne6+CY1ALzjIpe43M1XyZeoAOCixATrD13JrcgIVRx039C2A3A66vdJPAFgvcRaAO5738QfAvCBel7z6i830mSlPC9y79jrNUI/fjiqjS/0kqgHYKHXEDMcFug9iSzr83CvITY7hKiQWArAS+8r4ppDiPkSRwA47zVCgnX1K2RsbEsS1QBs8BpitPWehbYnx84uZDXtAIS8higy3kHbSPIa4rgxRJX3ZfnUGGK31wjD/qGxz/MaYjrvaTBwI3VGV5xAgQIFCmSkXwUInvvy+/S9AAAAAElFTkSuQmCC"
              />
              <div class="content-info">
                <div class="title1">邮政业</div>
                <div class="title2">收入(万元)</div>
                <div class="first1">6845425</div>
              </div>
            </div>
          </div>
          <div style="margin-bottom:5px;display: block;">
            <div class="message-box box-border">
              <img src="/static/images/bj-1.png" alt class="bj-1" />
              <img src="/static/images/bj-2.png" alt class="bj-2" />
              <img src="/static/images/bj-3.png" alt class="bj-3" />
              <img src="/static/images/bj-4.png" alt class="bj-4" />
              <img
                class="express-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAADnklEQVR42u3Zf2iVZRTA8SfFCgkro9DV1iIxkKTM/TGMggQpglIhTYNBYUFiVBZkf0VQ6WJYmMt+QC51ohFSaJSrdLXKiJJ+zIwiY8vRqEXkr7Raffrn2dvu3b27233nnX/c5/xzn3PO875fnnPe533PuUEYbQkhlCHKEGWIMkQZomiI8z2ixUfDlj3etsolIwEx2+/SjL/cmhai2kiMGekgtsTL7PGiJi8PS16wO65uTQfxC9hedJK9BHqdnQbiGLijaIgb4l5MSQNxGNxXNMSiCHFpGohDYHnRELdFiDGnAsRC1/STWmeOBkT26PbE6EPAu6cCBE+WFmKBWjWmqDZVjcWORP0VpYTITsRro76jlBCTBVvj7xWC4Pk4aygdRHABfvKaXtQIgp/zvd5OHkQ1HhVMQ7cguDpfSE4exEVYIwhW4RlB8Fy0ri49RNCBmRkhuar0EP+HZFa0d5YeIqhPZs9Gj6dKDxH8mISkOzskpYOYhi7jBLXR5818EEfB0qIh5icQF2ZBBK9jqiDYAH4bHOLB1F9WQSVWZthWY5oguBP8kQ9iP+gyW4XKYUqFWb4FPYIr0WSyKlWqVJpsGy4XBPeDQ/kglvUrYnr9Myz5M1n7eNyJgeNcQbB8cIhgV+rS5wtjBcEcm+y0PUqLJrXxHgUhgrVOFA3wryanF8ycIUAEk8zXGT/J6rJkkbnmWTxAX6fOAhcPKX2HBBEEHyfRTSdj00B8DtZl6CZ4yG4dvrfDkoK3v8VW3zjoAytVjxTETbFS7Rv7Tc8LMFFrhu/flhUD8SVYm8zn5EjD43lyYLwfcnjfk9jvBUcKQ+zLeNeNT06Bveo16Iizr3KufSVaj1invt9D31cmLwHHCkO8Dw6YJAhWZFUO4+yImusGrKyIlva4Nrg7apoFwRk+jOdyQYilceEhbdocB59lePwaj+i2LOmMPYrqHHvTpk1X/N04lO7dvgFRfSDD3jzosbU3w/fGAfbDJg4FYkLS/ukbD2fYXx0Uoj3Dd26W9WuXDb2POdfTNtugB3yXgXg06tbb1E/W+yTeqKafdws4YaPNGtUV10y9K0mtswRBpU+jZnqOB1RMvL7K87GoWZuuozsmOah6NNuWvOJyl/trkm1/Q5MDyWxS2rbyjBxxP+icPN57cnjPG4ne9kztGRd9y3l5fU+zMQv35pFrsC/UpNUuja4v6FurwTves8Xtw+tZlf9qKEOUIcoQZYj8EP8B/JEaofFkYu8AAAAASUVORK5CYII="
              />
              <div class="content-info">
                <div class="title1">快递业</div>
                <div class="title2">业务总量(万件)</div>
                <div class="first">826545</div>
              </div>
            </div>
            <div class="message-box box-border">
              <img src="/static/images/bj-1.png" alt class="bj-1" />
              <img src="/static/images/bj-2.png" alt class="bj-2" />
              <img src="/static/images/bj-3.png" alt class="bj-3" />
              <img src="/static/images/bj-4.png" alt class="bj-4" />
              <img
                class="express-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAADnklEQVR42u3Zf2iVZRTA8SfFCgkro9DV1iIxkKTM/TGMggQpglIhTYNBYUFiVBZkf0VQ6WJYmMt+QC51ohFSaJSrdLXKiJJ+zIwiY8vRqEXkr7Raffrn2dvu3b27233nnX/c5/xzn3PO875fnnPe533PuUEYbQkhlCHKEGWIMkQZomiI8z2ixUfDlj3etsolIwEx2+/SjL/cmhai2kiMGekgtsTL7PGiJi8PS16wO65uTQfxC9hedJK9BHqdnQbiGLijaIgb4l5MSQNxGNxXNMSiCHFpGohDYHnRELdFiDGnAsRC1/STWmeOBkT26PbE6EPAu6cCBE+WFmKBWjWmqDZVjcWORP0VpYTITsRro76jlBCTBVvj7xWC4Pk4aygdRHABfvKaXtQIgp/zvd5OHkQ1HhVMQ7cguDpfSE4exEVYIwhW4RlB8Fy0ri49RNCBmRkhuar0EP+HZFa0d5YeIqhPZs9Gj6dKDxH8mISkOzskpYOYhi7jBLXR5818EEfB0qIh5icQF2ZBBK9jqiDYAH4bHOLB1F9WQSVWZthWY5oguBP8kQ9iP+gyW4XKYUqFWb4FPYIr0WSyKlWqVJpsGy4XBPeDQ/kglvUrYnr9Myz5M1n7eNyJgeNcQbB8cIhgV+rS5wtjBcEcm+y0PUqLJrXxHgUhgrVOFA3wryanF8ycIUAEk8zXGT/J6rJkkbnmWTxAX6fOAhcPKX2HBBEEHyfRTSdj00B8DtZl6CZ4yG4dvrfDkoK3v8VW3zjoAytVjxTETbFS7Rv7Tc8LMFFrhu/flhUD8SVYm8zn5EjD43lyYLwfcnjfk9jvBUcKQ+zLeNeNT06Bveo16Iizr3KufSVaj1invt9D31cmLwHHCkO8Dw6YJAhWZFUO4+yImusGrKyIlva4Nrg7apoFwRk+jOdyQYilceEhbdocB59lePwaj+i2LOmMPYrqHHvTpk1X/N04lO7dvgFRfSDD3jzosbU3w/fGAfbDJg4FYkLS/ukbD2fYXx0Uoj3Dd26W9WuXDb2POdfTNtugB3yXgXg06tbb1E/W+yTeqKafdws4YaPNGtUV10y9K0mtswRBpU+jZnqOB1RMvL7K87GoWZuuozsmOah6NNuWvOJyl/trkm1/Q5MDyWxS2rbyjBxxP+icPN57cnjPG4ne9kztGRd9y3l5fU+zMQv35pFrsC/UpNUuja4v6FurwTves8Xtw+tZlf9qKEOUIcoQZYj8EP8B/JEaofFkYu8AAAAASUVORK5CYII="
              />

              <div class="content-info">
                <div class="title1">快递业</div>
                <div class="title2">收入(万元)</div>
                <div class="first1">6845425</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pie-box box-border">
          <img src="/static/images/bj-1.png" alt class="bj-1" />
          <img src="/static/images/bj-2.png" alt class="bj-2" />
          <img src="/static/images/bj-3.png" alt class="bj-3" />
          <img src="/static/images/bj-4.png" alt class="bj-4" />
          <div class="pie-box-main" ref="pie"></div>
          <div class="switch-btn-style charts-border-info">
            <div
              :class="'one-btn-info '+(pieIndex==0?'choose-bg-info':'')"
              @click="changePieIndex(0)"
            >业务</div>
            <div
              :class="'one-btn-info '+(pieIndex==1?'choose-bg-info':'')"
              @click="changePieIndex(1)"
            >收入</div>
          </div>
        </div>
      </div>
      <div style="position: relative;">
        <img src="/static/images/bj-1.png" alt class="bj-1" />
        <img src="/static/images/bj-2.png" alt class="bj-2" />
        <img src="/static/images/bj-3.png" alt class="bj-3" />
        <img src="/static/images/bj-4.png" alt class="bj-4" />
        <div class="right-bottom-mid box-border" ref="line1"></div>
        <div class="switch-btn-style charts-border-info">
          <div
            :class="'one-btn-info '+(expressIndex==0?'choose-bg-info':'')"
            @click="changeExpressIndex(0)"
          >业务</div>
          <div
            :class="'one-btn-info '+(expressIndex==1?'choose-bg-info':'')"
            @click="changeExpressIndex(1)"
          >收入</div>
        </div>
      </div>
      <div style="position: relative;">
        <img src="/static/images/bj-1.png" alt class="bj-1" />
        <img src="/static/images/bj-2.png" alt class="bj-2" />
        <img src="/static/images/bj-3.png" alt class="bj-3" />
        <img src="/static/images/bj-4.png" alt class="bj-4" />
        <div class="right-bottom-last box-border" ref="line2"></div>
        <div class="switch-btn-style charts-border-info">
          <div
            :class="'one-btn-info '+(postalIndex==0?'choose-bg-info':'')"
            @click="changePostalIndex(0)"
          >业务</div>
          <div
            :class="'one-btn-info '+(postalIndex==1?'choose-bg-info':'')"
            @click="changePostalIndex(1)"
          >收入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");
import dongguan from "@/js/data/dongguan.js";
let that;
export default {
  data() {
    return {
      time: "",
      date: "",
      pieIndex: 0,
      expressIndex: 0,
      postalIndex: 0,
      companies: [{}],
      // companyType: [],
      // companyTypeMoney: [],
      bounds: [],
      boundsMoney: [],
      money: {},
      work: {}
    };
  },
  mounted() {
    console.log(that.$refs.chartMap);
    that.money = {
      old: {
        name: "2018",
        data: [120, 132, 101, 134, 90, 230, 210, 150, 227, 350, 50, 40]
      },
      new: {
        name: "2019",
        data: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 10]
      }
    };
    that.work = {
      old: {
        name: "2018",
        data: [40, 65, 80, 70, 90, 102, 149, 150, 180, 210, 150, 260]
      },
      new: {
        name: "2019",
        data: [60, 80, 85, 108, 130, 222, 260, 271, 290, 295, 311, 350]
      }
    };
    that.getChartMap();
    that.getChartLine1(that.work, 0);
    that.getChartLine2(that.work, 0);
    // that.companyType = [
    //   {
    //     name: "普服网点",
    //     value: 15940
    //   },
    //   {
    //     name: "机关单位",
    //     value: 1231
    //   },
    //   {
    //     name: "独立机构",
    //     value: 5421
    //   }
    // ];
    that.bounds = [
      {
        name: "顺丰",
        value: 11546
      },
      {
        name: "中通",
        value: 5415
      },
      {
        name: "圆通",
        value: 1231
      },
      {
        name: "韵达",
        value: 878
      },
      {
        name: "百世",
        value: 1515
      },
      {
        name: "申通",
        value: 6465
      },
      {
        name: "邮政EMS",
        value: 18500
      },
      {
        name: "优速",
        value: 5151
      }
    ];
    that.boundsMoney = [
      {
        name: "顺丰",
        value: 12341342
      },
      {
        name: "中通",
        value: 1231512
      },
      {
        name: "圆通",
        value: 564564
      },
      {
        name: "韵达",
        value: 123456
      },
      {
        name: "百世",
        value: 98678
      },
      {
        name: "申通",
        value: 456378
      },
      {
        name: "邮政EMS",
        value: 2546784
      },
      {
        name: "优速",
        value: 1466778
      }
    ];
    // that.companyTypeMoney = [
    //   {
    //     name: "普服网点",
    //     value: 1231231
    //   },
    //   {
    //     name: "机关单位",
    //     value: 234234
    //   },
    //   {
    //     name: "独立机构",
    //     value: 65635
    //   }
    // ];
    // that.getPie1(that.companyType, 0);
    that.getPie(that.bounds, 0);
  },
  created() {
    that = this;
    that.getDate();
  },
  methods: {
    changeExpressIndex(index) {
      if (index == 0) {
        that.getChartLine1(that.work, index);
      } else if (index == 1) {
        that.getChartLine1(that.money, index);
      }
      that.expressIndex = index;
    },
    changePostalIndex(index) {
      if (index == 0) {
        that.getChartLine2(that.work, index);
      } else if (index == 1) {
        that.getChartLine2(that.money, index);
      }
      that.postalIndex = index;
    },
    changePieIndex(index) {
      if (index == 0) {
        that.getPie(that.bounds, index);
      } else if (index == 1) {
        that.getPie(that.boundsMoney, index);
      }
      that.pieIndex = index;
    },
    getCompanies() {
      let companies = [];
      for (let i = 0; i < 500; i++) {
        // let lat
        // let area='东城街道';
        // if(i<20){
        //     area
        // }
        companies.push({
          name: "测试企业" + i,
          registerAddress: "测试地址" + i,
          ownerName: "测试人员" + i,
          telePhone: "1111111111",
          location:
            113.55 + Math.random() * 0.65 + "," + (22.75 + Math.random() * 0.4)
        });
      }
      return companies;
    },
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        let location = data[i].location.split(",");
        let locationStr = [parseFloat(location[0]), parseFloat(location[1])];
        res.push({
          name: data[i].name,
          value: locationStr,
          registerAddress: data[i].registerAddress,
          ownerName: data[i].ownerName,
          telePhone: data[i].telePhone,
          visualMap: false
        });
      }
      console.log(res);
      return res;
    },
    getChartMap() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(that.$refs.chartMap);
      myChart.resize();
      echarts.registerMap("东莞", {
        type: "FeatureCollection",
        features: dongguan
      });
      // 绘制图表
      var option = {
        animation: true,
        tooltip: {
          show: true
        },
        geo: {
          map: "东莞",
          selectedMode: false,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            //未激活样式
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            //激活样式
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        visualMap: {
          //   show: false,
          min: 0,
          max: 30000,
          text: ["多", "少"],
          orient: "horizontal",
          itemWidth: 15,
          itemHeight: 200,
          right: 0,
          bottom: 30,
          formatter: "{value}家",
          inRange: {
            // color: ["#0033ff", "#000099"]
            color: ["#08435E", "#0C235F"]

            // color: ['#08435E', '#0D2565']
          },
          textStyle: {
            color: "white"
          }
        },
        series: [
          {
            name: "dongguan",
            type: "map",
            mapType: "东莞",
            selectedMode: false,
            tooltip: {
              trigger: "item",
              textStyle: {
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                align: "left"
              },
              formatter: data => {
                let res = "";
                if (typeof data.data.name != "undefined") {
                  res += "<span>" + data.name + "</span></br>";
                }
                // if (typeof data.data.general != "undefined") {//普服网点
                res += "<span>普服网点：" + 15940 + "家</span></br>";
                // }
                // if (typeof data.data.ownerName != "undefined") {
                res += "<span>机关单位：" + 1231 + "家</span></br>";
                // }
                // if (typeof data.data.telePhone != "undefined") {
                res += "<span>独立机构：" + 5421 + "家</span></br>";
                // }
                return res;
              } //地图区域弹出框信息
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#6699ff",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontSize: 16
                  }
                }
              },
              emphasis: {
                // 也是选中样式
                areaColor: "#0066ff",
                borderWidth: 1,
                borderColor: "#3366ff",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  }
                }
              }
            },
            data: [
              {
                name: "莞城街道",
                value: 10000
              },
              {
                name: "东城街道",
                value: 100
              },
              {
                name: "万江街道",
                value: 8500
              },
              {
                name: "横沥镇",
                value: 12424
              },
              {
                name: "东坑镇",
                value: 1231
              },
              {
                name: "谢岗镇",
                value: 12314
              },
              {
                name: "凤岗镇",
                value: 3565
              },
              {
                name: "企石镇",
                value: 7000
              },
              {
                name: "石排镇",
                value: 989
              },
              {
                name: "长安镇",
                value: 454
              },
              {
                name: "大朗镇",
                value: 7259
              },
              {
                name: "大岭山镇",
                value: 40
              },
              {
                name: "虎门镇",
                value: 454
              },
              {
                name: "桥头镇",
                value: 30000
              },
              {
                name: "常平镇",
                value: 17000
              },
              {
                name: "黄江镇",
                value: 4000
              },
              {
                name: "樟木头镇",
                value: 25000
              },
              {
                name: "清溪镇",
                value: 1000
              },
              {
                name: "塘厦镇",
                value: 24011
              },
              {
                name: "寮步镇",
                value: 9879
              },
              {
                name: "茶山镇",
                value: 700
              },
              {
                name: "沙田镇",
                value: 15487
              },
              {
                name: "石碣镇",
                value: 123
              },
              {
                name: "石龙镇",
                value: 8754
              },
              {
                name: "南城街道",
                value: 7510
              },
              {
                name: "厚街镇",
                value: 1231
              },
              {
                name: "洪梅镇",
                value: 9114
              },
              {
                name: "麻涌镇",
                value: 5453
              },
              {
                name: "中堂镇",
                value: 12185
              },
              {
                name: "高埗镇",
                value: 7845
              },
              {
                name: "道滘镇",
                value: 7777
              },
              {
                name: "望牛墩镇",
                value: 6666
              }
            ]
          },
          {
            name: "企业",
            type: "scatter",
            coordinateSystem: "geo",
            hoverAnimation: false,
            data: that.convertData(that.getCompanies()),
            symbolSize: 5,
            // large:true,
            tooltip: {
              trigger: "item",
              textStyle: {
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                align: "left"
              },
              formatter: data => {
                console.log(data);
                //企业点弹出框信息
                let res = "";
                if (typeof data.data.name != "undefined") {
                  res += "<span>" + data.name + "</span></br>";
                }
                if (typeof data.data.registerAddress != "undefined") {
                  res +=
                    "<span>地址：" + data.data.registerAddress + "</span></br>";
                }
                if (typeof data.data.ownerName != "undefined") {
                  res +=
                    "<span>联系人：" + data.data.ownerName + "</span></br>";
                }
                if (typeof data.data.telePhone != "undefined") {
                  res +=
                    "<span>联系电话：" + data.data.telePhone + "</span></br>";
                }
                return res;
              }
            },
            label: {
              //   normal: {
              //     formatter: "{c}",
              //     position: "right",
              //     show: false
              //   },
              //   emphasis: {
              //     formatter: "{c}",
              //     show: true
              //   }
            },
            itemStyle: {
              normal: {
                color: "#21D8E0"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    // getPie1(data, index) {
    //   let myChart = echarts.init(that.$refs.pie1);
    //   myChart.resize();
    //   let option = {
    //     title: {
    //       text: "企业类型与品牌业务量与收入统计",
    //       top: 10,
    //       // subtext: "纯属虚构",
    //       textStyle: {
    //         color: "#fff"
    //       },
    //       x: "left"
    //     },
    //     tooltip: {
    //       trigger: "item",
    //       formatter:
    //         index == 0
    //           ? "{b}业务量(万件)<br/>{c} ({d}%)"
    //           : "{b}收入(万元)<br/>{c} ({d}%)",
    //       textStyle: {
    //         color: "#fff",
    //         fontSize: 18,
    //         fontWeight: "bold"
    //       }
    //     },
    //     legend: {
    //       type: "plain",
    //       icon: "circle",
    //       orient: "horizontal",
    //       textStyle: {
    //         color: "#fff",
    //         fontSize: 10
    //       },
    //       left: 20,
    //       // top: 20,
    //       bottom: 20
    //     },
    //     series: [
    //       {
    //         name: "企业类型",
    //         type: "pie",
    //         radius: "55%",
    //         avoidLabelOverlap: false,
    //         // center: ["40%", "50%"],
    //         radius: ["50%", "70%"],
    //         data: index == 0 ? that.companyType : that.companyTypeMoney,
    //         itemStyle: {
    //           emphasis: {
    //             shadowBlur: 10,
    //             shadowOffsetX: 0,
    //             shadowColor: "rgba(0, 0, 0, 0.5)"
    //           }
    //         },
    //         label: {
    //           normal: {
    //             show: false,
    //             position: "center",
    //             color: "#fff"
    //           },
    //           emphasis: {
    //             show: true,
    //             position: "center",
    //             color: "#fff",
    //             fontSize: 16,
    //             fontWeight: "bold"
    //             // align: "left"
    //           }
    //         },
    //         labelLine: {
    //           normal: {
    //             show: false
    //           }
    //         }
    //       }
    //     ]
    //   };
    //   myChart.setOption(option);
    // },
    getPie(data, index) {
      let myChart = echarts.init(that.$refs.pie);
      myChart.resize();

      let option = {
        title: {
          text: "东莞市各快递品牌业务量与收入统计",
          top: 10,
          // subtext: "纯属虚构",
          textStyle: {
            color: "#fff"
          },
          x: "left"
        },
        tooltip: {
          trigger: "item",
          formatter:
            index == 0
              ? "{a}(万件)<br/>{b}:{c} ({d}%)"
              : "{a}(万元)<br/>{b}:{c} ({d}%)",
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold"
          }
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          icon: "circle",
          formatter: data => {
            let str = "";
            if (index == 0) {
              that.bounds.forEach(bound => {
                if (bound.name == data) {
                  str = data + ":" + bound.value + "(万件)";
                }
              });
            } else {
              that.boundsMoney.forEach(bound => {
                if (bound.name == data) {
                  str = data + ":" + bound.value + "(万元)";
                }
              });
            }
            return str;
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            lineHeight: 14
          },
          right: 20,
          // top: 20,
          bottom: 20
        },
        series: [
          {
            name: index == 0 ? "业务量" : "收入",
            type: "pie",
            radius: "55%",
            avoidLabelOverlap: false,
            center: ["30%", "55%"],
            radius: ["50%", "70%"],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
           
            label: {
              normal: {
                show: true,
                position: "inside",
                color: "#fff",
                align:"center",
                formatter:data=>{
                  if(data.percent>10.0){
                    return data.percent+"%"
                  }else{
                    return ""
                  }
                  
                },
              },
              emphasis: {
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold"
                // align: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    getChartLine1(data, index) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(that.$refs.line1);
      myChart.resize();
      var option = {
        color: ["#65A5FF", "#FDB309"],
        textStyle: {
          color: "#fff"
        },
        title: {
          top: 10,
          text: "东莞市邮政行业业务量与收入情况",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          formatter:
            "{b}</br>{a0}:{c0}" +
            (index == 1 ? "(亿元)" : "(亿件)") +
            "</br>{a1}:{c1}" +
            (index == 1 ? "(亿元)" : "(亿件)"),
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            align: "left"
          },
          trigger: "axis"
        },
        legend: {
          top: 10,
          icon: "circle",
          textStyle: {
            color: "#fff",
            fontSize: 12
          },
          data: [data.old.name, data.new.name]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          borderColor: "#3366ff",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#202D65"
            }
          },
          axisLabel: {
            color: "#65A5FF"
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          axisLine: { show: false },
          axisTick: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#202D65"
            }
          },
          type: "value"
        },
        series: [
          {
            name: data.old.name,
            type: "line",
            stack: data.old.name,
            symbol: "none", //折线点设置为实心点
            symbolSize: 0, //折线点的大小

            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#65A5FF"
                }
              }
            },
            data: data.old.data
          },
          {
            name: data.new.name,
            type: "line",
            stack: data.new.name,
            symbol: "none", //折线点设置为实心点
            symbolSize: 0, //折线点的大小
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#FDB309"
                }
              }
            },
            data: data.new.data
          }
        ]
      };
      myChart.setOption(option);
    },
    getChartLine2(data, index) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(that.$refs.line2);
      myChart.resize();
      var option = {
        color: ["#65A5FF", "#FDB309"],
        textStyle: {
          color: "#fff"
        },
        title: {
          top: 10,
          text: "东莞市快递行业业务量与收入情况",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          formatter:
            "{b}</br>{a0}:{c0}" +
            (index == 1 ? "(亿元)" : "(亿件)") +
            "</br>{a1}:{c1}" +
            (index == 1 ? "(亿元)" : "(亿件)"),
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            align: "left"
          },
          trigger: "axis"
        },
        legend: {
          top: 10,
          icon: "circle",
          textStyle: {
            color: "#fff",
            fontSize: 12
          },
          data: [data.old.name, data.new.name]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          borderColor: "#3366ff",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#202D65"
            }
          },
          axisLabel: {
            color: "#65A5FF"
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          axisLine: { show: false },
          axisTick: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#202D65"
            }
          },
          type: "value"
        },
        series: [
          {
            name: data.old.name,
            type: "line",
            stack: data.old.name,
            symbol: "none", //折线点设置为实心点
            symbolSize: 0, //折线点的大小

            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#65A5FF"
                }
              }
            },
            data: data.old.data
          },
          {
            name: data.new.name,
            type: "line",
            stack: data.new.name,
            symbol: "none", //折线点设置为实心点
            symbolSize: 0, //折线点的大小
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#FDB309"
                }
              }
            },
            data: data.new.data
          }
        ]
      };
      myChart.setOption(option);
    },
    getDate() {
      //获取当前时间
      var timer = setInterval(function() {
        var date = new Date();
        var year = date.getFullYear(); //当前年份
        var month = date.getMonth(); //当前月份
        var data = date.getDate(); //天
        var hours = date.getHours(); //小时
        var minute = date.getMinutes(); //分
        var second = date.getSeconds(); //秒
        var day = date.getDay(); //获取当前星期几
        var ampm = hours < 12 ? "am" : "pm";
        that.date =
          "<span style='margin:0 5px'>" +
          year +
          "/" +
          (month + 1) +
          "/" +
          data +
          "</span ><span style='margin:0 5px'>" +
          ampm +
          "</span ><span style='margin:0 5px'>周" +
          day +
          "</span>";
        that.time =
          that.fnW(hours) + ":" + that.fnW(minute) + ":" + that.fnW(second);
      }, 1000);
    },
    fnW(str) {
      var num;
      str >= 10 ? (num = str) : (num = "0" + str);
      return num;
    }
  }
};
</script>

<style scoped>
.pie-box-main {
  /* display: inline-block; */
  position: relative;
  width: 575px;
  height: 370px;
}
.pie-one {
  position: absolute;
  left: 0;
  width: 287px;
  height: 370px;
}
.pie-two {
  position: absolute;
  right: 0;
  width: 287px;
  height: 370px;
}
.one-btn-info {
  display: inline-block;
  width: 58px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  line-height: 25px;
}
.one-btn-info.choose-bg-info {
  background: #0673f2;
}
.switch-btn-style {
  position: absolute;
  /* width: 130px; */
  top: 15px;
  right: 20px;
  padding: 2px;
}
.switch-btn-style.charts-border-info {
  border: 1px solid #1e4f9b;
  background: rgba(15, 21, 59, 0.35);
  box-shadow: inset 0 0 18px #0b2c62;
  -webkit-box-shadow: 0 0 18px #0b2c62 inset;
  -moz-box-shadow: 0 0 18px #0b2c62 inset;
  overflow: hidden;
}

.right-bottom-last {
  position: relative;
  height: 230px;
  width: 959px;
  /* margin: 40px 0;    */
  margin-top: 5px;
}
.right-bottom-last.box-border {
  background-color: rgba(0, 24, 106, 0.5);
  border: 1px solid #20558b;
}
.right-bottom-mid {
  position: relative;
  height: 230px;
  width: 959px;
  margin-top: 30px;
}
.right-bottom-mid.box-border {
  background-color: rgba(0, 24, 106, 0.5);
  border: 1px solid #20558b;
}
.pie-box {
  display: inline-block;
  position: relative;
  width: 575px;
  height: 370px;
}
.pie-box.box-border {
  background-color: rgba(0, 24, 106, 0.5);
  border: 1px solid #20558b;
}
.message-box {
  width: 180px;
  margin-right: 5px;
  display: inline-block;
  position: relative;
  height: 180px;
}
.message-box.box-border {
  /* overflow: hidden;
  box-shadow: inset 0 0 18px #0b2c62;
  background: rgba(15, 21, 59, 0.35); */
  box-sizing: border-box;
  background-color: rgba(0, 24, 106, 0.5);
  border: 1px solid #20558b;
}
.message-info {
  position: relative;
  text-align: left;
  height: 350px;
  margin-bottom: 5px;
}
.message-info .postal-logo {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 25px;
  left: 16px;
}
.message-info .express-logo {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 25px;
  left: 16px;
}
.title1 {
  position: absolute;
  left: 70px;
  top: 35px;
  text-align: left;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.title2 {
  position: absolute;
  text-align: left;
  left: 20px;
  top: 70px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.first {
  position: absolute;
  left: 15px;
  top: 95px;
  text-align: left;
  font-size: 36px;
  color: #f38500;
  margin-bottom: 10px;
  font-weight: bold;
}
.first1 {
  position: absolute;
  left: 15px;
  top: 95px;
  text-align: left;
  font-size: 36px;
  color: #77b6ff;
  margin-bottom: 10px;
  font-weight: bold;
}
.left-message-info {
  width: 379px;
  display: inline-block;
}
.right-bottom {
  position: absolute;
  left: 930px;
  top: 40px;
  height: 750px;
  display: block;
}
.desc-info {
  color: #fff;
  font-size: 14px;
  text-align: left;
  margin-bottom: 5px;
}
.container {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  padding: 0 20px;
}

.weather-box {
  width: 150px;
  height: 70px;
  /* border: 1px solid #0e94ea; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.weather-box > .data {
  /* width: 2.19rem; */
  /* height: 0.65rem; */
  /* border-right: 2px solid #cdddf7; */
}
.data > p {
  font-size: 12px;
  margin: 0 5px;
  color: #cdddf7;
  text-align: center;
}

.data > p > span {
  display: inline;
  margin: 0 5px !important;
}

.data > p.time {
  font-size: 32px;
  height: 32px;
  line-height: 32px;
}
.logo-info {
  display: block;
  position: absolute;
  float: left;
  background: url("/static/images/title_border.png") bottom center no-repeat;
  width: 850px;
  top: 30px;
  left: 20px;
  color: #cdddf7;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 5px;
}
.time-info {
  position: absolute;
  width: 150px;
  height: 70px;
  top: 0px;
  right: 40px;
}
.left-bottom {
  display: block;
  float: left;
  margin-top: 150px;
  width: 850px;
  height: 750px;
}
#chartMap {
  display: block;
  width: 850px;
  height: 750px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  position: relative;
}
img.bj-1 {
  position: absolute;
  display: block;
  left: -1px;
  top: -1px;
}
img.bj-2 {
  position: absolute;
  display: block;
  right: -1px;
  top: -1px;
}
img.bj-3 {
  position: absolute;
  right: -1px;
  bottom: -1px;
}
img.bj-4 {
  position: absolute;
  left: -1px;
  bottom: -1px;
}
</style>