import React from 'react';
import { Container } from '../../../../themes/styles';
import {Calendar, CalendarList} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'fr';

export default function Calendario() {

  
    return (
      <Container>
           <CalendarList
           
           markingType={'period'}
           
            pastScrollRange={50}
            
            futureScrollRange={50}
            
            scrollEnabled={true}
           
            showScrollIndicator={true}

            maxDate = { new Date()}
           
            markedDates={{
              '2021-09-22': {disabled: true, startingDay: true, color: 'green', endingDay: true},
              '2021-09-21': {disabled: true, startingDay: true, color: 'green', endingDay: true},
              '2021-09-20': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}

           />
      </Container>
    );
  }