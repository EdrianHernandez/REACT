
function Button() {
  
  const styles = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  }

  return (
    <button style={styles}>Click Me</button>
  );
}

export default Button