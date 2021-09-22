import React from 'react';
import {Text} from 'react-native';
import { Container } from '../../../../themes/styles';
import { BarChart } from "react-native-gifted-charts";


export default function Grafico() {

  const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

    return (
      <Container>
           <BarChart 
           data={barData}
           barWidth={65}
           height= {615}
           frontColor="#fff"
           yAxisColor = "#fff"
           xAxisColor = "#fff"
           
           />
      </Container>
    );
  }