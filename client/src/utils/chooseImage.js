import umbrella from '../images/umbrella.svg'
import sunglasses from '../images/sunglasses.svg'
import snowflake from '../images/snowflake.svg'
export const imageChooser = (props)=>{
      if(props === 'umbrella'){
         return umbrella;
      }
      else if(props === 'sunglasses'){
          return sunglasses;
      }
      else if(props === 'snowflake'){
          return snowflake
      }
      else{
          return undefined;
      }
}