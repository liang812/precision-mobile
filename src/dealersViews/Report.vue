<template>
  <div class="itv-report">
    <div class="itv-action-result" v-if="reports.length === 0">
      <img src="../assets/images/pic-box-none.png">
      <h1>您还没有报告</h1>
    </div>
    <template v-for="report in reports">
      <div class="report-item"
           :class="{'bg-filter':report.product === 1,'bg-child':report.product === 2,'bg-microbiology':[3,4].includes(report.product)}"
           @click="openReport(report.id,report.report_lite_link.split(',')[0])">
        <h3>{{ report.product_name }}报告</h3>
        <p class="person">
          <span>被测人：{{ report.person_name ? report.person_name : '-' }}</span>
          <span>{{ report.iso_finish_time | formatTime }}</span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
  import ApiUser from '../api/user'

  export default {
    name: "DealersReports",
    created() {
      this.loadReports();
    },
    data() {
      return {
        reports: [],
      }
    },
    methods: {
      /**
       * 获取报告列表
       */
      loadReports() {
        ApiUser.getReports({
          order_by: '-id',
        }).then(res => {
          if (res.data.code === 0) {
            this.reports = res.data.data.reports;
          }
        })
      },

      /**
       * 跳转到报告页面
       */
      openReport(reportId, fullLink) {
        // 更新报告查看次数
        ApiUser.updateReportViews(reportId, {}).then(
          res => {
            if (res.data.code === 0) {
              location.href = fullLink;
            }
          }
        )
      },
    },
  }
</script>

<style lang="scss"></style>
