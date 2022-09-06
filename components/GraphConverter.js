import dynamic from 'next/dynamic';
const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

export default function GraphConverter({ graph }) {

  return (
    <Graphviz
      dot={graph}
      options={{
        fit: true,
        height: 550,
        width: 550,
        zoom: false,
      }}
    />
  )

}
