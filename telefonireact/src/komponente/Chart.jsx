import './Chart.css'
import {
 XYPlot,
 LineSeries,
 XAxis,
 YAxis,
 VerticalGridLines,
 HorizontalGridLines,
} from "react-vis";

const Chart = ({telefoni, stavke} ) => {
  const data = [
   
  
  ];
  function cenaTelefona(id){
    for(var i=0;i<telefoni.length;i++){
        if(telefoni[i].id==id){
            return telefoni[i].price;
        }
    }
    return 0;
}
  function prihodOdTelefona(id){
    var suma=0;
    for(var i=0;i<stavke.length;i++){
      if(stavke[i].proizvod_id===id){
        suma+=stavke[i].kolicina*cenaTelefona(stavke[i].proizvod_id);
      }
    }
    return suma;
  }
  
  
   for(var i=0;i<telefoni.length;i++){
 

     data.push({x:telefoni[i].id,y: prihodOdTelefona(telefoni[i].id)})
      console.log(data)
   }





 return (
   <div style={{ margin: "15px" }}>
     <XYPlot height={300} width={600}>
       <VerticalGridLines />
       <HorizontalGridLines />
       <XAxis />
       <YAxis />
       <LineSeries data={data} color="red" />
       <LineSeries data={data} color="purple" />
       <LineSeries data={data} color="yellow" />
     </XYPlot>
   </div>
 );
};

export default Chart;
