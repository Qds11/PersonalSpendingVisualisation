<template>
    <h6 class="text-start fw-bold">Filter Results</h6>
    <div class="row mb-2">
        <label for="start" class="col-1 col-form-label  ">Start:</label>
        <div class="col-3">

            <input type="date" class="form-control" id="start" placeholder="Start date" aria-label="Start-date"
                v-model="start">
        </div>
        <label for="end" class="col-1 col-form-label  ">End:</label>
        <div class="col-3">
            <input type="date" id="end" class="form-control" placeholder="End date" aria-label="End-date" v-model="end">
        </div>
        <div class="col-1  "> <button class="btn btn-primary" @click="filter"> Filter</button>
        </div>
        <div v-if="filtered" class="col-1  "> <button class="btn btn-primary" @click="clearFilter"> Clear</button>
        </div>
    </div>

    <div class="no-data" v-if="(chartData.datasets[0].data.length==0 )"> No data for the selected date range</div>

    <div id="barchart">
            <Bar :chart-options="{
                responsive: true,
                scales: {

                    y: {
                        title: { display: true, text: 'Amount ($)'},
                    },
                    x: {
                        title: { display: true, text: 'Date (YYYY-MM-DD)' },
                    },
                },
                maintainAspectRatio: false,
                plugins: {
                legend: { display: false },
                title: { display: true, text: 'Spending' },
                },
            }" :chart-data="chartData" />
    </div>

</template>

<script>
    import axios from "axios";
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'
    import {
        Bar
    } from 'vue-chartjs'

    ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
    export default {
        name: 'BarChart',
        components: {
            Bar
        },
        data() {
            return {
                start: '',
                end: '',
                filtered: false,
                chartData: {
                    labels: [],
                    datasets: [{
                        data: [],
                        backgroundColor: "#eb4034",
                    }]
                },
                chartOptions: {
                    responsive: true
                }
            }
    },
        //get all spending data once vue instance is created
        created() {
            this.getAllSpendingData()
        },
    methods: {
            //clears filter
            clearFilter() {
                this.getAllSpendingData()
                this.start = ''
                this.end = ''
                this.filtered=false
        },
            //call api to get all spending data
            async getAllSpendingData() {
                try {
                    const response = await axios.get('http://localhost:5000/spending');
                    this.chartData.labels = response.data[0]
                    this.chartData.datasets[0].data = response.data[1]


                } catch (err) {
                    console.log(err)
                }

        },
            //call api to get spending data filered by date range
            async getFilteredSpendingData() {
                try {
                    const response = await axios.get(`http://localhost:5000/spending/${this.start}/${this.end}`);
                    this.chartData.labels = response.data[0]
                    this.chartData.datasets[0].data = response.data[1]

                } catch (err) {
                    console.log(err)
                }

        },
            //filters data displayed according to date range
            filter() {
                if (this.end < this.start) {
                    alert('Your end date must be later that start date')

                } else if (!this.start || !this.end) {
                    alert('Select both start and end dates')
                } else {
                    this.filtered = true
                    this.getFilteredSpendingData()

                }
            }
        },
    }
</script>

<style scoped>
    #barchart {
        position: relative;
    }

    .no-data {
        position: absolute;
        top: 50%;
        left: 43%;

    }
</style>