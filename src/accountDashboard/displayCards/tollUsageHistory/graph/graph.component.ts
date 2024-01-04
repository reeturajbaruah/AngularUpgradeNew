import { Component, OnInit, Input } from '@angular/core';

import { EChartsOption } from 'echarts';

import { TollUsageHistoryComponent } from '../tollUsageHistory.component';

@Component({
    selector: 'graph-component',
    templateUrl: './graph.html',
    styleUrls: ['./graph.less']
})
export class GraphComponent implements OnInit {

    @Input() public options: EChartsOption;

    @Input() public xAxisData = [];
    @Input() public yAxisData = [];

    constructor(private parent: TollUsageHistoryComponent
    ) { }

    async ngOnInit() {

        await this.parent.getGraphData();

        await this.populateGraph();
    }

    private async populateGraph() {

        if (this.xAxisData.length > 0 && this.yAxisData.length > 0) {
            const maxVal = this.yAxisData.reduce((a, b) => Math.max(a, b));

            const minVal = this.yAxisData.reduce((a, b) => Math.min(a, b));

            this.options = {
                grid: {
                    top: 13,
                    left: 15 + maxVal.toString().length * 8,
                    right: 15,
                    bottom: 25
                },
                legend: {
                    show: false
                },
                tooltip: {},
                xAxis: {
                    data: this.xAxisData,
                    silent: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    nameTextStyle: {
                        color: '#757575',
                        fontFamily: 'Jost',
                        fontSize: 10,
                        fontWeight: 'bold'
                    },
                    axisLabel: {
                        formatter: (value) => this.truncateMonth(value)
                    }
                },
                yAxis: {
                    nameTextStyle: {
                        color: '#757575',
                        fontFamily: 'Jost',
                        fontSize: 10,
                        fontWeight: 'bold'
                    },
                    axisLabel: {
                        inside: false,
                        verticalAlign: 'bottom',
                        margin: 0,
                        formatter: (value) => this.formatForCurrency(value, 0)
                    },
                    axisTick: {
                        show: true,
                        length: 15 + maxVal.toString().length * 8,
                        lineStyle: {
                            color: '#E0E0EF'
                        }
                    },
                    min: minVal
                },
                series: [
                    {
                        name: 'Toll Usage for the Last 12 Months',
                        type: 'line',
                        areaStyle: {
                            color: '#611EB8',
                            opacity: 0.1,
                        },
                        symbol: 'circle',
                        symbolSize: 8,
                        color: '#611EB8',
                        data: this.yAxisData,
                        animationDelay: (idx) => idx * 10 + 100,
                        tooltip: {
                            formatter: (value) => this.formatForCurrency(value.value, 2)
                        }
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: (idx) => idx * 5
            };
        }

    }

    private formatForCurrency(data, digits: number) {
        return data.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits });
    }

    private truncateMonth(data) {
        return data.slice(0, 1);
    }

}
