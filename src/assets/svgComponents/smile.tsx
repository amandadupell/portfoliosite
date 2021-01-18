import * as React from "react";

interface Props {
  className?: string;
  height?: number;
  width?: number;
}

class Smile extends React.Component<Props> {
  render() {
    return (
      <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...this.props}>
        <defs>
          <style>{".smile_svg__b{fill:#020200}"}</style>
        </defs>
        <circle cx={200} cy={200} r={117} fill="#efd800" />
        <ellipse
          className="smile_svg__b"
          cx={152.81}
          cy={165.29}
          rx={11.7}
          ry={44.07}
        />
        <ellipse
          className="smile_svg__b"
          cx={247.19}
          cy={165.29}
          rx={11.7}
          ry={44.07}
        />
        <path
          className="smile_svg__b"
          d="M200 265.09c-41.08 0-75-20.91-79.94-47.93a38 38 0 00-.63 6.85c0 30.25 36.07 54.77 80.57 54.77s80.57-24.52 80.57-54.77a38 38 0 00-.63-6.85c-4.94 27.02-38.86 47.93-79.94 47.93z"
        />
      </svg>
    )
  };
};

export default Smile;
