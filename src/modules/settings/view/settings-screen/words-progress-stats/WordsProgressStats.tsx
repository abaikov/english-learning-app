// import Color from 'color';
import React from 'react';
import { Dimensions, View, Text } from 'react-native';
// import { BarChart, StackedBarChart } from 'react-native-chart-kit';
// import { EProjectBorderRadius } from '../../../../../components/palette/EProjectBorderRadius';
// import { EProjectColor } from '../../../../../components/palette/EProjectColor';
import { WordProgressStatsStyleSheet } from './WordsProgressStatsStyleSheet';
import { IWordsProgressStatsProps } from './type/IWordsProgressStatsProps';

// const windowWidth = Dimensions.get('window').width;

export const WordsProgressStats = (props: IWordsProgressStatsProps) => {
    // const data = {
    //     labels: [] as string[],
    //     datasets: [{
    //         data: [] as number[]
    //     }]
    //     // legend: ['1'],
    //     // barColors: [EProjectColor.PINK],
    //     // labels: [] as string[],
    //     // data: [] as number[][]
    // };
    // props.wordsProgressData.forEach((count, index, array) => {
    //     data.labels.push(
    //         index == 0
    //             ? 'initial'
    //             : index == array.length - 1
    //                 ? 'learned'
    //                 : String(index)
    //     );
    //     data.datasets[0].data.push(count);
    //     // if (index > 0) {
            
    //     //     data.labels.push(' ' + String(index) + '');
    //     //     data.datasets[0].data.push(deck.length);
    //     //     // data.data.push([deck.length]);
    //     // }
    // })
    // // data.labels.push(' ');
    // // data.data.push([0]);
    return <View style={{
    }}>
        <View style={WordProgressStatsStyleSheet.textBlock}>
            <Text style={WordProgressStatsStyleSheet.text}>
                Words in progress: {props.wordsInProgressCount}
            </Text>
            <Text style={WordProgressStatsStyleSheet.text}>
                Memorized words: {props.learnedWordsCount}
            </Text>
            <Text style={WordProgressStatsStyleSheet.text}>
                Known words: {props.knownWordsCount}
            </Text>
            <Text style={WordProgressStatsStyleSheet.text}>
                New words: {props.newWordsCount}
            </Text>
            <Text style={WordProgressStatsStyleSheet.text}>
                Overall words: {props.overallWordsCount}
            </Text>
        </View>
        {/* <Text style={WordProgressStatsStyleSheet.titleText}>
            Words count by repetition stage: 
        </Text>
        <BarChart
            data={data}
            style={{
                borderRadius: EProjectBorderRadius.DEFAULT
            }}
            // barPercentage={0.5}
            // hideLegend={false}
            showValuesOnTopOfBars
            withInnerLines={false}
            // withHorizontalLabels={false}
            // withVerticalLabels={false}
            chartConfig={{
                backgroundGradientFrom: EProjectColor.BACKGROUND_GRAY,
                backgroundGradientFromOpacity: 0.1,
                backgroundGradientTo: EProjectColor.BACKGROUND_GRAY,
                backgroundGradientToOpacity: 0.1,
                // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.4,
                // useShadowColorFromDataset: false, // optional
                color: (opacity = 1) => Color(EProjectColor.WHITE).alpha(opacity).toString(),//`rgba(26, 255, 146, ${opacity})`,
            }}
            yAxisSuffix=''
            yAxisLabel=''
            xAxisLabel='Stage '
            width={windowWidth - (16 * 2)}
            height={220}
        /> */}
        
    </View>
}
