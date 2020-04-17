import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop:'10%'
          }}
        >
          <img src="https://i.ibb.co/m8dLS0z/Ghost-big.png" alt="Rabiel" style={{ margin: '0 auto', width: '250px'}} />
          <h3 style={{textAlign:'center'}}>Something went wrong </h3>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
