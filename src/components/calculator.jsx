import { Grid } from '@mui/material'

import { OperandKey } from './keys/operandKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';

export const Calculator = () => {
  return (
    <Grid container 
      sx={{
        height: '100vh',
        fontFamily: 'system-ui',
        backgroundColor: '#404040'
      }}
    >
      <Grid container item xs={2} 
        sx={{ 
          display: 'grid', 
          gridTemplateRows: '30%',
          margin: 'auto', 
          height: '50%', 
          minWidth: '200px',
          minHeight: '300px'
        }}
      >
        <Grid item>
          <DisplayPanel/>
        </Grid>
        <Grid container item>
          <ClearKey label={'C'}/>
          <OperatorKey label={'%'}/>
          <OperatorKey label={'+'}/>
          <OperandKey label={'1'}/>
          <OperandKey label={'2'}/>
          <OperandKey label={'3'}/>
          <OperatorKey label={'/'}/>
          <OperandKey label={'4'}/>
          <OperandKey label={'5'}/>
          <OperandKey label={'6'}/>
          <OperatorKey label={'*'}/>
          <OperandKey label={'7'}/>
          <OperandKey label={'8'}/>
          <OperandKey label={'9'}/>
          <OperatorKey label={'-'}/>
          <OperandKey label={'.'}/>
          <OperandKey label={'0'}/>
          <EqualsKey label={"="}/>
        </Grid>
      </Grid>
    </Grid>
  );
}