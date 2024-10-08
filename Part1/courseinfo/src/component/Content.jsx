// eslint-disable-next-line react/prop-types
const Content = ({parts})  => {
    return  parts.map((parte,index) => (
           <p key={index} >
           {parte.name}   {parte.exercises} 
           </p> 
              
   ));
};
    export default Content;