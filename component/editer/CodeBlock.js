import React from "react";
import Highlight from "react-highlight";

class CodeBlock extends React.Component {

    render() {
        return (
                 <Highlight language={this.props.language}>
                    {this.props.value}
                 </Highlight>
        )
    }
}

export default CodeBlock;