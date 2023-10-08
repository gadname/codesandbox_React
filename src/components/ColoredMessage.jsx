export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>お元気ですか?</p>;
};
