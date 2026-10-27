import { View, Image  } from 'react-native';

import { Button } from '../components/Button';
import {Input } from '../components/Input';
import {Filter} from '../components/Filter'
import { styles } from './styles';

import { FilterStatus } from '@/app/types/FilterStatus';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/logo.png")} 
        style={styles.logo} 
      />   

      <View style={styles.form}>
        <Input placeholder='O que você precisa' />

        <Button title="Adicionar" 
	        activeOpacity={0.2} 
	        onPress={() => console.log("Adicionar")} 
	      />
      </View>
      
      <View style={styles.content}>
          <Filter status={FilterStatus.DONE} isActive/>
          <Filter status={FilterStatus.PENDING} isActive={false}/>

      </View>
    </View>
  );
}


