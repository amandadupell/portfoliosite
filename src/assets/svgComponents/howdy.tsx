import * as React from "react";

interface Props {
  height?: number;
  width?: number;
};

class Howdy extends React.Component<Props> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...this.props}>
        <defs>
          <style>
            {
              ".howdy_svg__a{font-size:45.59px;font-family:Temeraire-ItalienneItalic,Temeraire;font-style:italic}"
            }
          </style>
        </defs>
        <text className="howdy_svg__a" transform="rotate(-82.69 143.133 67.5)">
          {"H"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-70.6 148.303 38.329)">
          {"o"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-57.3 165.425 7.507)">
          {"w"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-44 180.741 -58.767)">
          {"d"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-32.39 209.59 -147.723)">
          {"y"}
        </text>
        <text
          className="howdy_svg__a"
          transform="rotate(-23.43 246.659 -293.118)"
        >
          {"!"}
        </text>
        <text
          className="howdy_svg__a"
          transform="rotate(-17.68 293.87 -450.08)"
        />
        <text
          className="howdy_svg__a"
          transform="rotate(-8.47 508.401 -1065.675)"
        >
          {"T"}
        </text>
        <text className="howdy_svg__a" transform="translate(191.11 58.8)">
          {"a"}
        </text>
        <text className="howdy_svg__a" transform="rotate(14 -132.59 927.282)">
          {"k"}
        </text>
        <text className="howdy_svg__a" transform="rotate(24.41 -30.541 603.417)">
          {"e"}
        </text>
        <text className="howdy_svg__a" transform="rotate(31.8 -1.444 507.031)" />
        <text className="howdy_svg__a" transform="rotate(40.55 27.515 420.208)">
          {"y"}
        </text>
        <text className="howdy_svg__a" transform="rotate(51.42 44.927 364.674)">
          {"o"}
        </text>
        <text className="howdy_svg__a" transform="rotate(62.15 58.576 323.532)">
          {"u"}
        </text>
        <text className="howdy_svg__a" transform="rotate(73.7 67.66 294.13)">
          {"r"}
        </text>
        <text className="howdy_svg__a" transform="rotate(81.4 68.776 282.516)" />
        <text className="howdy_svg__a" transform="rotate(88.22 74.782 268.02)">
          {"t"}
        </text>
        <text className="howdy_svg__a" transform="rotate(96 76.866 256.378)">
          {"i"}
        </text>
        <text className="howdy_svg__a" transform="rotate(108.45 90.795 233.713)">
          {"m"}
        </text>
        <text className="howdy_svg__a" transform="rotate(122.72 90.187 221.525)">
          {"e"}
        </text>
        <text className="howdy_svg__a" transform="rotate(129.49 88.585 216.343)">
          {"."}
        </text>
        <text
          className="howdy_svg__a"
          transform="matrix(-.7 .72 -.72 -.7 305.93 292.94)"
        />
        <text className="howdy_svg__a" transform="rotate(142.97 98.103 201.183)">
          {"L"}
        </text>
        <text className="howdy_svg__a" transform="rotate(154.23 99.674 191.794)">
          {"o"}
        </text>
        <text className="howdy_svg__a" transform="rotate(163.96 102.363 183.56)">
          {"o"}
        </text>
        <text
          className="howdy_svg__a"
          transform="matrix(-.99 .11 -.11 -.99 230.87 338.19)"
        >
          {"k"}
        </text>
        <text
          className="howdy_svg__a"
          transform="rotate(-177.94 103.97 168.64)"
        />
        <text className="howdy_svg__a" transform="rotate(-169.7 109.82 162.017)">
          {"a"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-158.8 112.385 152.96)">
          {"r"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-149.01 114.772 144.48)">
          {"o"}
        </text>
        <text
          className="howdy_svg__a"
          transform="matrix(-.75 -.67 .67 -.75 118.01 315.46)"
        >
          {"u"}
        </text>
        <text className="howdy_svg__a" transform="rotate(-125.97 123.334 123.59)">
          {"n"}
        </text>
        <text
          className="howdy_svg__a"
          transform="rotate(-113.83 126.675 110.058)"
        >
          {"d"}
        </text>
        <text
          className="howdy_svg__a"
          transform="scale(-1) rotate(75 123.938 -162.34)"
        >
          {"."}
        </text>
        <text
          className="howdy_svg__a"
          transform="rotate(-100.2 128.321 89.753)"
        />
      </svg>
    )
  };
};

export default Howdy;
