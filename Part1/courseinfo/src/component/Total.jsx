// eslint-disable-next-line react/prop-types
const Total = ({parts})  => {
    return  (
      // eslint-disable-next-line react/prop-types
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
    );
    
    }
    export default Total