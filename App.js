import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
     
     
      <View style={styles.title}>
        <Text style={styles.title_text}>Đăng nhập</Text>
      </View>


      <View style={styles.contents}>
        <Text style= {styles.contents_title}>Nhập số điện thoại</Text>
        <Text style={{paddingTop : '20'}}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      </View>
      
      <TextInput style={styles.TextInput} placeholder='Nhập số điện thoại của bạn' keyboardType="number-pad"></TextInput>
      <View style={styles.button}>
        <Text style={styles.button_text}>Tiếp tục</Text>

      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },

  title : {
    width: '100%' ,
    height: '10%',
    marginTop:50, 
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor:'lightgrey',
    paddingLeft:10
  },

  title_text :{
      fontSize: 30,
      fontWeight: 'bold',
      
  },

  contents :{
    paddingTop: '15%',
    fontSize:15,
       paddingLeft:10
  } ,

  contents_title  : {
    fontSize: 20,
  },

  TextInput :{
    borderBottomWidth: 0.5,
    borderBottomColor:'black',
    width: '100%',
    height:'7%',
    marginTop:5,
       paddingLeft:10
  },

  button: {
    height: '7%',
    backgroundColor:'lightgrey',
    alignItems:'center',
    justifyContent:'center',
    marginRight: 7, 
    marginTop: 20, 
    borderRadius:5,
    marginLeft:7
  },

  button_text:{
    fontSize: 18,
    color: 'grey'
    
  }

});
