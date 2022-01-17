interface Props {
  prop?: string;
}

const {typeCap} = ({ prop }: Props) => {
  return (
    <div>Component {typeCap}</div>
  );
};

export default {typeCap};
