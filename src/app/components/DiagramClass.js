import { Canvas, Port, Node } from 'reaflow';
import graphData from '../data/graphData.json';


const DiagramClass = () => {
  return (
    
    <Canvas
      direction="horizontal"
      Width={900}
      maxHeight={600}
      node={
        <Node
            port={<Port className='port_style' />}
         />
      }
      edges={graphData.edges.map(edge => ({
        ...edge,
        className: 'edge' // Asigna la clase a cada arista mediante sus propiedades
      }))}
      nodes={graphData?.nodes?.map(node => ({
        ...node,
        text: 
        node.data?.type || ""  
          ? `${node.data.type} - ${node.data.name || ""}`  
          : node.text,
      })) || []}
    />
  );
};

export default DiagramClass;
